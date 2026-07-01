import React, { useState, useEffect } from "react";

const YoutubeVideos = () => {
  const [videos, setVideos] = useState([]);

  const api_key = import.meta.env.VITE_API_KEY

  useEffect(() => {
    try{
      const fetchVideos = async () => {
        const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key= ${api_key}`,
    )
   const data =await response.json();
   setVideos (data.items);
      }
       fetchVideos(data.items)
    } catch (error){
      console.log(error);

    }
  },[]);
    
   

  return (
    <div className="youtube-container">
      {videos.map((video) => {
        const { data, snippet } = video;
        return (
          <div className="video-card" key={id.videoId}>
            <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
            <h3>{snippet.title}</h3>
            <p>{snippet.description}</p>
            <small>{new Date(snippet.publishedAt).toLocaleDateString()}</small>
          </div>
        );
      })}
    </div>
  );
};

export default YoutubeVideos;
