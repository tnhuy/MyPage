import React from 'react';

const VideoDetails = ({video}) => {
	if (!video) {
		return<div>Loading...</div>;
	}
	const videoId = video.id.videoId;
	const url = `http://www.youtube.com/embed/${videoId}`;
	return (
		<div>
		<div className="video-detail">
			<iframe className="embed-responsfive-item" src={url} width="100%" height="350px"></iframe>
		</div>
		<div className="details">
			<div>{video.snippet.title}</div>
			<div>{video.snippet.description}</div>
		</div>
		</div>
	);
}
export default VideoDetails;