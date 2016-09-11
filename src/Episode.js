import React, { Component } from 'react';
import Youtube from 'react-youtube';
import './Episode.css';
import Gallery from 'react-photo-gallery';
import TweetLink from './TweetLink';

function CreditGroup(props) {
    let items = Object.keys(props.group).map(key => {
        return (<li key={key}><a href={props.group[key]}>{key}</a></li>);
    });
    return (
        <div className="credits-group">
            <h4>{props.title}</h4>
            <ul>{items}</ul>
        </div>
    );
}

class Episode extends Component {
    constructor(props) {
        super(props);
        this.state = { message: this._defaultMessage };
    }
    render() {
        return (
            <div id="Episode">
                <h3>{this.props.title}</h3>
                <Youtube
                    videoId={this.props.youtube_id}
                    onStateChange={this._onStateChange.bind(this)}
                    onPlay={this._onPlay.bind(this)} />
                <TweetLink message={this.state.message} />
                <h4>Subscribe to That Maker Show</h4>
                <a href="https://www.youtube.com/user/thatmakershow">YouTube Channel</a> - <a href="https://itunes.apple.com/us/podcast/that-maker-show/id843687042">iTunes Podcast</a>
                <CreditGroup title="Produced by" group={this.props.producers} />
                <CreditGroup title="Crew" group={this.props.crew} />
                <CreditGroup title="Special Thanks" group={this.props.special_thanks} />
                <h4>Behind the Scenes</h4>
                <p>Here's some photos from behind the scenes of the <em>{this.props.title}</em> episode</p>
                <Gallery photos={this.props.gallery} />
            </div>
        );
    }


    _onStateChange(event) {
        if(event.data !== 1) {
            if(typeof this.playBackInterval !== 'undefined') {
                clearInterval(this.playBackInterval)
            }
        }
    }

    _onPlay(event) {
        let player = event.target;
        if(typeof this.playBackInterval !== 'undefined') {
            clearInterval(this.playBackInterval)
        }
        this.playBackInterval = setInterval(()=>{
            this._getCurrentTil(player.getCurrentTime());
        },
        500);
    }

    _getCurrentTil(seconds) {
        console.log(seconds);
        const currentTils = this.props.tils.filter(til => til.time <= seconds).pop();
        if(currentTils) {
            this.setState({message: this._createMessageWithTime(currentTils.message, currentTils.time)});
        } else {
            this.setState({message: this._defaultMessage});
        }
    }

    _createMessageWithTime(message, startTime) {
        return `${message} ${this._yt_link}?t=${startTime}`
    }

    get _yt_link() {
        return `http://youtu.be/${this.props.youtube_id}`;
    }

    get _defaultMessage() {
        return `I'm watching the latest That Maker Show - ${this.props.title} ${this._yt_link}`
    }
}

export default Episode;
