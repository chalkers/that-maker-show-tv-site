import React, { Component } from 'react';
import { Link } from 'react-router';
import episodes from './episodes.json';


function EpisodeBlurb(props) {
    return (
        <h4><Link to={'episode/' + props.episode.slug}>{props.episode.title}</Link></h4>
    );
}

function Season(props) {
    let season = props.season;
    let episodeList = Object.keys(episodes[season]).map(episodeId => {
        return <li key={season + '-' + episodeId}><EpisodeBlurb episode={episodes[season][episodeId]} /></li>;
    });
    return (
        <div className="season">
            <h3> { props.season }</h3>
            <ul>{ episodeList }</ul>
        </div>
    );
}


class Home extends Component {
    render() {
        let seasons = Object.keys(episodes);
        return (
            <div>
            {seasons.map(season => (
                <Season season={season} key={season}/>
            ))}
            </div>
            );
    }
}

export default Home;