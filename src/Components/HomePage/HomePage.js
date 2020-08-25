import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "0.5cm",
        }}
      >
        <input
          style={{
            marginTop: "8cm",

            display: "flex",
            height: "40px",
            width: "12cm",
            borderColor: "red",
            // Width: "15cm",
          }}
          placeholder="Serach Here"
          value={searchFieldValue}
          onChange={(e) => setSearchFieldValue(e.target.value)}
        />
        <button
          style={{
            height: "20px",
            maxWidth: "4cm",
          }}
        >
          {
            <Link to={{ pathname: "/landingPage", data: searchFieldValue }}>
              Search
            </Link>
          }
        </button>
      </div>
    </div>
  );
}

export default HomePage;
