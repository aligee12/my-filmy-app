
import React from 'react';
import VideoUpload from './VideoUpload';
import VideoPlayer from './VideoPlayer';
import Header from './header';

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center py-8 mt-8">
        <h1 className="text-2xl font-bold mb-4">Upload Some New Videos</h1>
          <VideoUpload />
        <div className="mt-8 w-full max-w-4xl px-4">
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

