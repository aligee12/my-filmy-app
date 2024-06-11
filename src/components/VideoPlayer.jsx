
import React, { useEffect, useState } from 'react';
import { listAll, getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase/firebase';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [videoUrls, setVideoUrls] = useState([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosRef = ref(storage, 'videos');
        const videoList = await listAll(videosRef);
        const urls = await Promise.all(videoList.items.map(async (item) => {
          return getDownloadURL(item);
        }));
        setVideoUrls(urls);
      } catch (error) {
        console.error("Error fetching videos: ", error);
      }
    };

    fetchVideos();
  }, []);

  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  return (
    <div className="flex flex-wrap justify-between">
      {videoUrls.length > 0 ? (
        videoUrls.map((url, index) => (
          <div
            key={index}
            className="w-full sm:w-5/12 mb-4 cursor-pointer"
            onClick={() => handlePlay(index)}
          >
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <ReactPlayer
                url={url}
                controls
                playing={playingIndex === index}
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
};

export default VideoPlayer;

