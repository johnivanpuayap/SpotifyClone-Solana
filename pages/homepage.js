import Nav from '../components/nav'
import Activity from '../components/activity'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import uploadModal from '../components/uploadModal'
import Playlist from '../components/playlist'
import PlayerControls from '../components/playerControls'

import useSpotify from '../hooks/useSpotify'
import {songs} from '../data/songs'

const HomePage = () => {

  const [showUploadMusic, setShowUploadMusic] = useState(false)
  const [title, setTitle] = useState('')
  const [musicUrl, setMusicUrl] = useState('')
  // const [songs, setSongs] = useState([])  

  const { newMusic, getSongs} = useSpotify(
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic,
  )

  return (
    <div className='flex'>
      <Nav />
      <div className='w-full'>
        <Header setShowUploadMusic = {setShowUploadMusic}/>
        <Playlist
          songs={songs} 
        />
        <PlayerControls />
        {showUploadMusic && (
          <uploadModal
            title={title}
            setTitle={setTitle}
            setShowUploadMusic={setShowUploadMusic}
            musicUrl={musicUrl}
            setMusicUrl={setMusicUrl}
            newMusic={newMusic}
          />
        )}
      </div>
      <Activity />
    </div>
  )
}

export default HomePage
