import React, { useRef, useState } from 'react'
import { hightlightsSlides } from '../constant'

const VideoCarousel = () => {
    const videoRef = useRef([])
    const videoSpanRef = useRef([])
    const videoDivRef = useRef([])

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false
    })

    const {isEnd, startPlay, videoId, isLastVideo, isPlaying} = video
  return (
    <div className='flex items-center'>
        {hightlightsSlides.map((list, id) => {
            return (
                <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                    <div className='sm:w-[70vw] w-[88vw] h-[35vh] sm:h-[50vh] md:h-[75vh]'>
                        <div className='w-full h-full rounded-3xl bg-black'>

                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default VideoCarousel