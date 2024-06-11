import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer';
import Header from '../header';

const Home = () => {
    const { currentUser } = useAuth()
    const [displayName, setDisplayName] = useState('');

    useEffect(() => {
        if (currentUser) {
            setDisplayName(currentUser.displayName);
        }
    }, [currentUser]);

    return (
        <>
        <Header></Header>
        <div className='flex flex-col items-center'>
            <h1 className='p-2.5 text-xl font-light pt-14 text-center text-gray-700'>Hello {currentUser.displayName ? currentUser.displayName : currentUser.email}, Here are Videos for you</h1>
            <div className="mt-8 w-full max-w-4xl px-4">
              <VideoPlayer />
            </div>
        </div>
        </>
    )
}

export default Home;