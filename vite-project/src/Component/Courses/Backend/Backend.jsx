import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
// import "./frontend.css";

const apiKey = process.env.API_KEY


/**
 * Component that renders a list of tutorial videos and a video player.
 * @param {string} type - The type of tutorials to fetch from YouTube API (e.g. "html tutorial").
 * @returns {JSX.Element} The frontend component.
 */

const Backend = ({ type }) => {
  const [videoList, setVideoList] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [completedVideos, setCompletedVideos] = useState([]);
  const [currentType, setType] = useState(type);


// Fetch videos from YouTube API based on the current type of tutorials
  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${currentType}&type=video&key=${apiKey}`
      );
      const json = await response.json();
      setVideoList(json.items);
    };
    fetchVideos();
  }, [currentType]);

  const handleVideoEnd = (videoId) => {
    setCompletedVideos([...completedVideos, videoId]);
  };


  // Event handler for when a video is clicked to be played
  const handleVideoPlay = (videoId) => {
    setActiveVideo(videoId);
  };


    // Event handler for when the type of tutorials is changed
  const handleTypeChange = (newType) => {
    setActiveVideo(null);
    setCompletedVideos([]);
    setVideoList([]);
    setType(newType);
  };

    // Renders the list of videos
  const renderVideoList = () => {
    return videoList.map((video) => (
      <div
        className={`tutorial-video ${
          activeVideo === video.id.videoId ? "active" : ""
        } ${completedVideos.includes(video.id.videoId) ? "completed" : ""}`}
        key={video.id.videoId}
        onClick={() => handleVideoPlay(video.id.videoId)}
      >
        <div className="thumbnail-container">
          <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
          {completedVideos.includes(video.id.videoId) && (
            <div className="completed-overlay">
              <i className="fas fa-check"></i>
            </div>
          )}
        </div>
        <p>{video.snippet.title}</p>
      </div>
    ));
  };

  // Options for the YouTube player
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="tutorial-container">
      <div className="tutorial-list">
        <h2>Browse Lessons</h2>
        <ul>
          <li onClick={() => handleTypeChange("nodejs tutorial")}>NodeJS</li>
          <li onClick={() => handleTypeChange("ExpressJs full tutorials")}>ExpressJS</li>
          <li onClick={() => handleTypeChange("MongoDB full Tutorials")}>MongoDB Tutorials</li>
          <li onClick={() => handleTypeChange("PostgreSQL full Tutorials")}>PostgreSQL Tutorials</li>

        </ul>
      </div>
      <div className="tutorial-videos">
        <div className="video-list">{renderVideoList()}</div>
        <div className="video-player">
          {activeVideo && (
            <YouTube
              videoId={activeVideo}
              opts={opts}
              onEnd={() => handleVideoEnd(activeVideo)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Backend;
