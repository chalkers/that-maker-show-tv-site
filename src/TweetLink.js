import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './TweetLink.css';

class TweetLink extends Component {
    render() {
        return (
            <div className="TweetLink">
                <FontAwesome  name='twitter'size='2x' />
                <span className="message">{this.props.message}</span>
                <a className="button" href={this.link()} target="tweet">Tweet</a>
            </div>
        );
    }

    link() {
        return `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.props.message)}`;
    }
}

export default TweetLink;