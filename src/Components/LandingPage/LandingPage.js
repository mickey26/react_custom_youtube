import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PlayList from "../PlayList/PlayList";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
import "./LandingPage.css";
import Header from "../Header/Header";

import { URL, API_KEY } from "../../Constants/EndPoint";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      // videoId: null,
      fetchVideo: null,
      playlistView: [],
    };

    this.fetchVideo(this.props && this.props.location.data);
    // console.log(this.props.location.data);
  }

  async fetchVideo(term) {
    await axios
      .get(URL, {
        params: {
          part: "snippet",
          key: API_KEY,
          q: term,
          maxResults: 10,
        },
      })

      .then((res) => {
        console.log(res, "res");
        if (res.status === 200) {
          this.setState({
            videos: res.data.items,

            // selectedVideo: res.data.items[1],
          });
        }
      });
  }
  addToList(it) {
    this.setState({
      playlistView: [...this.state.playlistView, it],
    });
  }

  render() {
    // let videoId =
    //   this.state.selectedVideo && this.state.selectedVideo.id.videoId;
    // const url = `https://www.youtube.com/embed/${videoId}`;
    // console.log(videos);

    return (
      <div>
        <header>
          <Header />
        </header>
        <body>
          <div className="leftContainer">
            {this.state.videos.map((item, index) => (
              <div className="card" key={index}>
                <Link to={{ pathname: "/Player", data: item }}>
                  <img
                    src={item.snippet.thumbnails.default.url}
                    alt="Avatar"
                  ></img>
                  <br />
                  {item.snippet.title}
                </Link>
                <input
                  type="submit"
                  value="Add to Playlist"
                  className="btn"
                  onClick={() => this.addToList(item)}
                />
              </div>
            ))}
          </div>
        </body>

        <div className="rightContainer">
          <header>
            <h2>My Playlist</h2>
          </header>
          <body>
            {/* {this.state.playlistView.map((item, index) => (
              <div className="card" key={index}>
                <Link to={{ pathname: "/Player", data: item }}>
                  <img
                    src={item.snippet.thumbnails.default.url}
                    alt="Avatar"
                  ></img>
                  <br />
                  {item.snippet.title}
                </Link>
              </div>
            ))} */}
            <PlayList data={this.state.playlistView} />
          </body>
        </div>
      </div>
    );
  }
}

export default LandingPage;
