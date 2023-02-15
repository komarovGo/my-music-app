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
    return (
     <div className="bar">
        <div className="bar__content">
            <div className="bar__player-progress"/>
            <div className="bar__player-block">
                <div className="bar__player player">
                    <div className="player__controls">
                        <div className="player__btn-prev">
                            <svg className="player__btn-prev-svg" alt="prev">                                
                                <use xlinkHref={prev}/>
                            </svg>
                        </div>
                        <div className="player__btn-play _btn">
                            <svg className="player__btn-play-svg" alt="play">
                                <use xlinkHref={play}/>
                            </svg>
                        </div>
                        <div className="player__btn-next">
                            <svg className="player__btn-next-svg" alt="next">
                                <use xlinkHref={next}/>
                            </svg>
                        </div>
                        <div className="player__btn-repeat _btn-icon">
                            <svg className="player__btn-repeat-svg" alt="repeat">
                                <use xlinkHref={repeat}/>
                            </svg>
                        </div>
                        <div className="player__btn-shuffle _btn-icon">
                            <svg className="player__btn-shuffle-svg" alt="shuffle">
                                <use xlinkHref={shuffle}/>
                            </svg>
                        </div>
                    </div>
                    
                    <div className="player__track-play track-play">
                        <div className="track-play__contain">
                            <div className="track-play__image">
                                <svg className="track-play__svg" alt="music">
                                    <use xlinkHref={note}/>
                                </svg>
                            </div>
                            <div className="track-play__author">
                                <a className="track-play__author-link" href="http://">Ты та...</a>
                            </div>
                            <div className="track-play__album">
                                <a className="track-play__album-link" href="http://">Баста</a>
                            </div>
                        </div>

                        <div className="track-play__like-dis">
                            <div className="track-play__like _btn-icon">
                                <svg className="track-play__like-svg" alt="like">
                                    <use xlinkHref={like}/>
                                </svg>
                            </div>
                            <div className="track-play__dislike _btn-icon">
                                <svg className="track-play__dislike-svg" alt="dislike">
                                    <use xlinkHref={dislike}/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar__volume-block volume">
                    <div className="volume__content">
                        <div className="volume__image">
                            <svg className="volume__svg" alt="volume">
                                <use xlinkHref={volume}/>
                            </svg>
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
