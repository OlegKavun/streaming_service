import React from 'react'
import s from './Home.module.scss'
import blockPhoto1 from '../../assets/images/homepage/streaming-TV.png'
import blockPhoto2 from '../../assets/images/homepage/download-show.png'
import blockPhoto3 from '../../assets/images/homepage/streaming-devices.png'
import chanels from '../../assets/images/tv-channels.png'
import ServiceButton from './../common/buttons/ServiceButton/ServiceButton'
import signin_icon from '../../assets/images/signIn_icon.png'

const Home = (props) => {
    return (
        <div className={s.home}>
            <h1 className={s.home__title}>Welcome to <span className={s.highlight}>Live</span>stream service </h1>
            <img src={chanels} className={s.home__poster} alt="chanels"/>
            <div className={`${s.home__block} ${s.block}`}>
                <div className={s.block__photo}>
                    <img src={blockPhoto1} alt="photo"/>
                </div>
                <div className={s.block__content}>
                    <h2 className={s.block__title}>Enjoy on your <span className={s.highlight}>TV</span></h2>
                    <p className={s.block__text}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more</p>
                </div>
            </div>
            <div className={`${s.home__block} ${s.block}`}>
                <div className={s.block__photo}>
                    <img src={blockPhoto2} alt="photo"/>
                </div>
                <div className={s.block__content}>
                    <h2 className={s.block__title}>Download your <span className={s.highlight}>shows</span> to watch offline</h2>
                    <p className={s.block__text}>Save your favorites easily and always have something to watch</p>
                </div>
            </div>
            <div className={`${s.home__block} ${s.block}`}>
                <div className={s.block__photo}>
                    <img src={blockPhoto3} alt="photo"/>
                </div>
                <div className={s.block__content}>
                    <h2 className={s.block__title}>Watch <span className={s.highlight}>everywhere</span></h2>
                    <p className={s.block__text}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more</p>
                </div>
            </div>
            <div className={s.home__button}>
                <ServiceButton text="Get Started" icon={signin_icon} path="/register"/>
            </div>
        </div>
    )
}

export default Home