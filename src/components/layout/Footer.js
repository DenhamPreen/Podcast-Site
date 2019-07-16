import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import testAudio from '../../episodes/test.mp3'

const Footer = () => {
    return (
        <footer className='footer-player'>
            <center>
                <ReactAudioPlayer
                    src="https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Sassy+-+wot+r+u+talkin+bout+(THE+BIG+LEZ+SHOW)&filename=23/234496-a4374071-a192-4aa3-ab5f-ea4e7d1e0b66.mp3"
                    controls
                />
            </center>
        </footer>
    )
}

export default Footer
