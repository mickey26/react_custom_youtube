import React from "react";

import { Link } from "react-router-dom";

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistValue: [],
    };
  }

  render() {
    console.log(this.props.data, "hello");
    console.log(this.playlistValue, "dsnk");

    return (
      <div>
        {/* {this.state.playlistValue.map((item, index) => (
          <div className="card" key={index}>
            <Link to={{ pathname: "/Player", data: item }}>
              <img src={item.snippet.thumbnails.default.url} alt="Avatar"></img>
              <br />
              {item.snippet.title}
            </Link>
          </div>
        ))} */}
      </div>
    );
  }
}
export default PlayList;
