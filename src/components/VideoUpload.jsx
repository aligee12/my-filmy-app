
import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/firebase';

const VideoUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');
  const [uploadTask, setUploadTask] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, `videos/${file.name}`);
      const task = uploadBytesResumable(storageRef, file);

      setUploadTask(task);

      task.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error("Upload error: ", error);
        },
        () => {
          getDownloadURL(task.snapshot.ref).then((downloadURL) => {
            setVideoUrl(downloadURL);
            setUploadTask(null); // Reset upload task once done
            console.log('File available at', downloadURL);
          });
        }
      );
    }
  };

  const handleCancelUpload = () => {
    if (uploadTask) {
      uploadTask.cancel();
      setUploadTask(null);
      setProgress(0);
      console.log('Upload canceled');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Upload Video
      </button>
      {uploadTask && (
        <button
          onClick={handleCancelUpload}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Cancel Upload
        </button>
      )}
      <progress value={progress} max="100" className="w-full" />
      {videoUrl && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Uploaded Video:</h4>
          <video width="400" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
