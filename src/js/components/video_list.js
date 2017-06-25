import React from 'react';
import VideoListItem from './video_list_item';
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const VideoList = (props) => {

	return (
		<div style={styles.root}>
		    <GridList
		      cols={2}
		      cellHeight={200}
		      padding={1}
		      style={styles.gridList}
		    >
		      {props.videos.map((video) => (
		          <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/>
		      ))}
		    </GridList>
		  </div>
	);
}

export default VideoList;