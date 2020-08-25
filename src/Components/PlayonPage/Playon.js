import React from "react";
// import { Link } from "react-router-dom";
import Header from "../Header/Header";

class PlayonPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: null,
    };
  }
  render() {
    console.log(this.props, "jgjfhfjfjdgg");
    let vedioId =
      this.props &&
      this.props.location &&
      this.props.location.data &&
      this.props.location.data.id.videoId;
    const url = `https://www.youtube.com/embed/${vedioId}`;

    return (
      <div>
        <header>
          <Header />
        </header>
        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={url}
              title="youtube"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayonPage;
