import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import React, { useState } from "react";

import Chip from "./Chip";
import LineGraph from "./LineGraph";
import "./NewsFeed.css";
import TimeLine from "./TimeLine";

// function Newsfeed() {

function NewsFeed() {
  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]);

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        {/* chart Section in NewsFeed */}
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>$114,678 </h1>
            <p>$44.63 (+0.04%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        {/* buying Section in NewsFeed */}
        <div className="newsfeed__buying__section">
          <h2>Buying Power</h2>
          <h2>$4.11</h2>
        </div>
        {/* market Section in NewsFeed */}
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p> Markets closed </p>
            <h1> Happy ThanksGiving </h1>
          </div>
        </div>
        {/* popularlists Section in NewsFeed */}
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <Chip
                label={topic}
                image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
