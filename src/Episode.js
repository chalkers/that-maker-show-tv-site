import React, { Component } from 'react';
import Youtube from 'react-youtube';
import './Episode.css';
import Gallery from 'react-photo-gallery';
import TweetLink from './TweetLink';

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
                <h4>Subscribe to That Make Show</h4>
                <a href="https://www.youtube.com/user/thatmakershow">YouTube Channel</a> - <a href="https://itunes.apple.com/us/podcast/that-maker-show/id843687042">iTunes Podcast</a>
                <h4>Hosted by</h4>
                <ul>{Object.keys(this.props.hosts).map(this.renderHost.bind(this))}</ul>
                <h4>Producers by</h4>
                <ul>{Object.keys(this.props.producers).map(this.renderProducers.bind(this))}</ul>
                <h4>Special Thanks</h4>
                <ul>{Object.keys(this.props.special_thanks).map(this.renderSpecialThanks.bind(this))}</ul>
                <h4>Behind the Scenes</h4>
                <p>Here's some photos from behind the scenes of the <em>{this.props.title}</em> episode</p>
                <Gallery photos={this.props.gallery} />
            </div>
        );
    }

    renderHost(host) {
        const link = this.props.hosts[host];
        return (
            <li key={host}><a href={link}>{host}</a></li>
        );
    }

    renderProducers(producer) {
        const link = this.props.producers[producer];
        return (
            <li key={producer}><a href={link}>{producer}</a></li>
        );
    }

    renderSpecialThanks(thanks) {
        const link = this.props.special_thanks[thanks];
        return (
            <li key={thanks}><a href={link}>{thanks}</a></li>
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
