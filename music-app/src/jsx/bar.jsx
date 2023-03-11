import { useState, useEffect} from 'react';
 

import prev from '../img/icon/prev.svg';
import play from '../img/icon/play.svg';
import next from '../img/icon/next.svg';
import repeat from '../img/icon/repeat.svg';
import shuffle from '../img/icon/shuffle.svg';
import note from '../img/icon/note.svg';
import like from '../img/icon/like.svg';
import dislike from '../img/icon/dislike.svg';
import volume from '../img/icon/volume.svg';



function Bar(){
    // Эмуляция загрузки
    const [isBarLoading, setBarLoading] = useState(true)

    useEffect(() => {
        const time = setTimeout(() => {
            setBarLoading(false)
        }, 3000)
            return () => clearTimeout(time)
    }, [])

    return (
     <div className="bar">
        <div className="bar__content">
            <div className="bar__player-progress"/>
            <div className="bar__player-block">
                <div className="bar__player player">
                    <div className="player__controls">
                        <div className="player__btn-prev">                             
                            <img className="player__btn-prev-svg" src={prev} alt="prev" />
                        </div>
                        <div className="player__btn-play _btn">
                            <img className="player__btn-play-svg" src={play} alt="pley" />
                        </div>
                        <div className="player__btn-next">
                            <img className="player__btn-next-svg" src={next} alt="next" />
                        </div>
                        <div className="player__btn-repeat _btn-icon">
                            <img className="player__btn-repeat-svg" src={repeat} alt="repeat" />
                        </div>
                        <div className="player__btn-shuffle _btn-icon">
                            <img className="player__btn-shuffle-svg" src={shuffle} alt="shuffle" />
                        </div>
                    </div>
                    <div className="player__track-play track-play">
                        <div className="track-play__contain">
                            <div className="track-play__image">
                                <img className="track-play__svg" src={note} alt="music" />
                            </div>
                            {isBarLoading && <div className="imeg-loading"/>}
                            <div className="track-play__author">
                                <a className="track-play__author-link" href="http://">Ты та...</a>
                            </div>
                            {isBarLoading && <div className="author-loading"/>}
                            <div className="track-play__album">
                                <a className="track-play__album-link" href="http://">Баста</a>
                            </div>
                            {isBarLoading && <div className="albom-loading"/>}
                        </div>
                        <div className="loading-track-pley">
                            <div className="image-loading-bar"/>
                            <div className="author-loading-bar"/>
                            <div className="album-loading-bar"/>
                        </div>
                        <div className="track-play__like-dis">
                            <div className="track-play__like _btn-icon">
                                <img className="track-play__like-svg" src={like} alt="like" />
                            </div>
                            <div className="track-play__dislike _btn-icon">
                                <img className="track-play__like-svg" src={dislike} alt="dislike" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar__volume-block volume">
                    <div className="volume__content">
                        <div className="volume__image">
                            <img className="volume__svg" src={volume} alt="volume" />
                        </div>
                        <div className="volume__progress _btn">
                            <input className="volume__progress-line _btn" type="range" name="range"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Bar;
