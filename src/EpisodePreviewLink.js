import React from 'react';
import { Link } from 'react-router';
import './EpisodePreviewLink.css';

function EpisodeThumbnail(props) {
    return (
        <img src={`http://i3.ytimg.com/vi/${props.episode.youtube_id}/maxresdefault.jpg`} alt={props.episode.title} />
    );
}

function EpisodeLink(props) {
    return (<Link to={'episode/' + props.episode.slug} title={props.episode.title}>{props.children || props.episode.title}</Link>);
}

function EpisodePreviewLink(props) {
    return (
        <h4 className="EpisodePreview">
            <EpisodeLink {...props}><EpisodeThumbnail {...props} /></EpisodeLink>
            <EpisodeLink {...props} />
        </h4>
    );
}

export default EpisodePreviewLink;