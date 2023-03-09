import { useState, useEffect} from 'react';

import search from '../img/icon/search.svg';
import watch from '../img/icon/watch.svg';
import note from '../img/icon/note.svg';
import like from '../img/icon/like.svg';

import RenderClickMenuAuthor from './clickMenuAuthor';
import RenderClickMenuYuar from './clickMenuYuar';
import RenderClickMenuGenre from './clickMenuGenre';
import LoadingBlockGrey from './loadingGreyBlock';

function CentrBlock (){
    // открытие-скрытие filter-title
    const [isVisibleFilter, setVisibleFilter] = useState(null)

    const toggleVisibleFilter = (filter) => {   
        setVisibleFilter(isVisibleFilter === filter ? null : filter)
    }

    // Эмуляция загрузки
    const [isMainLoading, setMainLoading] = useState(true)
    
    useEffect(() => {
        const time = setTimeout(() => {
            setMainLoading(false)
        }, 3000)
            return () => clearTimeout(time)
    }, [])

    return(
    <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
            <svg className="search__svg" src={search} alt="search">
                <use xlinkHref={search}/>
            </svg>
            <input className="search__text" type="search" placeholder="Поиск" name="search"/>
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div 
                className="filter__button button-author _btn-text" 
                onClick={() => toggleVisibleFilter('author')} 
                role="presentation"
                >
                    исполнителю
            </div>
            <div 
                className="filter__button button-year _btn-text" 
                onClick={() => toggleVisibleFilter('year')} 
                role="presentation"
                >
                    году выпуска
            </div>
            <div  
                onClick={() => toggleVisibleFilter("gener")} 
                className="filter__button button-genre _btn-text" 
                role="presentation"
                >                
                    жанру
            </div>
        </div>               
            <div className="click-filter-menu">
                {isVisibleFilter === 'author' && (<RenderClickMenuAuthor/>)}
                {isVisibleFilter === 'year' && (<RenderClickMenuYuar/>)}
                {isVisibleFilter === 'gener' && (<RenderClickMenuGenre/>)}
            </div>
        <div className="centerblock__content">
            <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                    <img className="playlist-title__svg"  src={watch} alt="asd" />
                </div>
            </div>
            <div className="content__playlist playlist">
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <img className="track__title-svg" src={note} alt="asd" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Guilt <span className="track__title-span"/></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Nero</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Welcome Reality</a>
                        </div>
                        <div className="track__time">
                                <img className="track__time-svg" src={like} alt="asd" />                           
                            <span className="track__time-text">4:44</span>
                        </div>
                    </div>
                </div>         
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <img className="track__title-svg" src={note} alt="asd" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Elektro <span className="track__title-span"/></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Dynoro, Outwork, Mr. Gee</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Elektro</a>
                        </div>
                        <div className="track__time">
                                <img className="track__time-svg" src={like} alt="asd" />
                            <span className="track__time-text">2:22</span>
                        </div>
                    </div>
                </div>               
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <img className="track__title-svg" src={note} alt="asd" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">I’m Fire <span className="track__title-span"/></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Ali Bakgor</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">I’m Fire</a>
                        </div>
                        <div className="track__time">
                                <img className="track__time-svg" src={like} alt="asd" />
                            <span className="track__time-text">2:22</span>
                        </div>
                    </div>
                </div>  
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <img className="track__title-svg"  src={note} alt="music" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Non Stop <span className="track__title-span">(Remix)</span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Стоункат, Psychopath</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Non Stop</a>
                        </div>
                        <div className="track__time">
                                <img className="track__time-svg" src={like} alt="atimesd" />
                            <span className="track__time-text">4:12</span>
                        </div>
                    </div>
                </div>
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <img className="track__title-svg" src={note} alt="asd" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Run Run <span className="track__title-span">(feat. AR/CO)</span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Jaded, Will Clarke, AR/CO</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Run Run</a>
                        </div>
                        <div className="track__time">
                            <img className="track__time-svg" src={like} alt="asd" />
                            <span className="track__time-text">2:54</span>
                        </div>
                    </div>
                </div>
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <img className="track__title-svg"  src={note} alt="asd" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Eyes on Fire <span className="track__title-span">(Zeds Dead Remix)</span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Blue Foundation, Zeds Dead</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Eyes on Fire</a>
                        </div>
                        <div className="track__time">
                            <img className="track__time-svg" src={like} alt="asd" />
                            <span className="track__time-text">5:20</span>
                        </div>
                    </div>
                </div>
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                               <img className="track__title-svg"  src={note} alt="asd" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Mucho Bien <span className="track__title-span">(Hi Profile Remix)</span></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">HYBIT, Mr. Black, Offer Nissim, Hi Profile</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Mucho Bien</a>
                        </div>
                        <div className="track__time">
                               <img className="track__time-svg" src={like} alt="atimesd" />
                            <span className="track__time-text">3:41</span>
                        </div>
                    </div>
                </div>
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <img className="track__title-svg"  src={note} alt="asd" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Knives n Cherries <span className="track__title-span"/></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">minthaze</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Captivating</a>
                        </div>
                        <div className="track__time">
                                <img className="track__time-svg" src={like} alt="atimesd" />
                            <span className="track__time-text">1:48</span>
                        </div>
                    </div>
                </div>
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                               <img className="track__title-svg"  src={note} alt="asd" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">How Deep Is Your Love <span className="track__title-span"/></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Calvin Harris, Disciples</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">How Deep Is Your Love</a>
                        </div>
                        <div className="track__time">
                            <img className="track__time-svg" src={like} alt="atimesd" />
                            <span className="track__time-text">3:32</span>
                        </div>
                    </div>
                </div>
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <img className="track__title-svg"  src={note} alt="asd" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://">Morena <span className="track__title-span"/></a>
                            </div>
                        </div>
                        <div className="track__author">
                            <a className="track__author-link" href="http://">Tom Boxer</a>
                        </div>
                        <div className="track__album">
                            <a className="track__album-link" href="http://">Soundz Made in Romania</a>
                        </div>
                        <div className="track__time">
                            <img className="track__time-svg" src={like} alt="atimesd" />
                            <span className="track__time-text">3:36</span>
                        </div>
                    </div>
                </div>
                <div className="playlist__item">
                    {isMainLoading && <LoadingBlockGrey/>}
                    <div className="playlist__track track">
                        <div className="track__title">
                            <div className="track__title-image">
                                <img className="track__title-svg"  src={note} alt="asd" />
                            </div>
                            <div className="track__title-text">
                                <a className="track__title-link" href="http://"> <span className="track__title-span"/></a>
                            </div>
                        </div>
                        <div className="track__time">
                            <span className="track__time-text"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CentrBlock;