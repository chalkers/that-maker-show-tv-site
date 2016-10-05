import React from 'react';
import EpisodePreviewLink from './EpisodePreviewLink';
import './Season.css';

function Season(props) {
    const {season, episodes} = props;
    let episodeList = Object.keys(episodes).map(episodeId => {
        return <li className="episode-link" key={season + '-' + episodeId}><EpisodePreviewLink episode={episodes[episodeId]} /></li>;
    });
    return (
        <div className="season">
            <h3>{ season }</h3>
            <ul>{ episodeList }</ul>
        </div>
    );
}

export default Season;