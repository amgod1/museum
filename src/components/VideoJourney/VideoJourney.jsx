import React from 'react'
import styles from './VideoJourney.module.css'

import img0 from './../../assets/video/poster0.jpg'
import img1 from './../../assets/video/poster1.jpg'
import img2 from './../../assets/video/poster2.jpg'
import img3 from './../../assets/video/poster3.jpg'

import video0 from './../../assets/video/video0.mp4'
import video1 from './../../assets/video/video1.mp4'
import video2 from './../../assets/video/video2.mp4'
import video3 from './../../assets/video/video3.mp4'

let videoInfo = [
  {key: 1, img: img1, video: video1, width: 452, height: 254},
  {key: 2, img: img2, video: video2, width: 452, height: 254},
  {key: 3, img: img3, video: video3, width: 452, height: 254},
]


const LilVideo = (props) => {
  return (
    <div>
      <video className='lilVideo' src={props.video} poster={props.img} width={props.width} height={props.height} controls></video>
    </div>
  )
}

let getVideos = videoInfo.map(el => <LilVideo video={el.video} img={el.img} width={el.width} height={el.height} key={el.key} />)


const VideoJourney = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            Video Journey
          </h2>
          <p className={styles.text}>
            Enter and visit one of the most famous museums in the world and enjoy masterpieces such as Mona Lisa or Hammurabi's Code
          </p>
        </div>
        <div className={styles.videoWrapper}>
          <video className='mainVideo' src={video0} poster={img0} controls></video>
        </div>
        <div className={styles.videosLittle}>
          { getVideos }
        </div>
      </div>
    </div>
  )
}

export default VideoJourney