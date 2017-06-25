import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

const VideoListItem = ({video, onVideoSelect}) => {
	const videoId = video.id.videoId;
	const url = `http://www.youtube.com/embed/${videoId}`;
	return (
				<GridList
		      cols={2}
		      cellHeight={200}
		      padding={1}
		      style={styles.gridList}
		    >
				<GridTile onClick={() => onVideoSelect(video)}
		          key={video.etag}
		          title={video.snippet.title}
		          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
		          actionPosition="left"
		          titlePosition="top"
		          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
		          cols={video.featured ? 2 : 1}
		          rows={video.featured ? 2 : 1}
		        >
		 			<iframe className="embed-responsfive-item" src={url} width="100%" height="350px" ></iframe>
		 		</GridTile></GridList>
	);
}

export default VideoListItem;