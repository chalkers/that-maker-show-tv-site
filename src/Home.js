import React, { Component } from 'react';
import Season from './Season';
import episodes from './episodes.json';

class Home extends Component {
    render() {
        let seasons = Object.keys(episodes);
        return (
            <div>
            {seasons.map(season => (
                <Season season={season} key={season} episodes={episodes[season]} />
            ))}
            </div>
            );
    }
}

export default Home;