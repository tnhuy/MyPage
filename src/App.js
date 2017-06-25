import React, { Component } from 'react';
import './css/App.css';
import Header from './js/components/header';
import VideoDetail from './js/components/video_detail';
import AppNav from './js/components/appNav';
import VideoList from './js/components/video_list';
import YTSearch from 'youtube-api-search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const API_KEY = 'AIzaSyB2pcgS17IzQtudvtFYU3uz0A4dbU6fGfA';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
    }
    
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'espn'}, (videos) => {
      this.setState({videos : videos,
        selectedVideo: videos[0]});
      console.log(videos);
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <AppNav />
        <div className="App-main-body">
          <div className="container">
            <div className="row">
              <div className="col s6"><VideoDetail video={this.state.selectedVideo} /></div>
              <div className="col s6">
                <MuiThemeProvider>
                  <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                    videos={this.state.videos} />
                </MuiThemeProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
