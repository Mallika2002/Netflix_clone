import React from 'react'
import './featured.css'
import { InfoOutlined } from '@material-ui/icons'
import { PlayArrow } from '@material-ui/icons'
import Image from './76.jpg'
import Vincenzo from './Vincenzo.mp4'
import V1 from './V1.mp4'

function Featured({type}){
    return(
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span className='c'>{type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select name='genre' id='genre'>
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
        <img width="100%" class='image'
        src="https://m.media-amazon.com/images/M/MV5BNjZlY2MzYzgtODJlOC00YmYwLWE4MjUtODUxMTIyNmIzZmY2XkEyXkFqcGdeQXVyMTE2MDU0NzAw._V1_.jpg"
        alt=""
        />
        {/* <div className="background-video">
        <video autoPlay loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={Vincenzo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div>   */}
        <div className = 'info'>
            <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZ5tYd36L3J0mPUd-ctUGGnwLH_5xohiuZ9sSlOkIaEjbDTolCk7DcipScOIHWh330PikbM2-rTs7tnlQgyFbUrawrsluTTohuvL.png"
         alt=""/>
         {/* <span className='k'>Guardian</span>
        <div className='k2'>The
         <div className='k1'>Lonely</div>     
         <div className='k2'>and</div>
         </div>
         <div className='k3'>Great God</div> */}
            <span className='desc'>
                <h2>Watch Now</h2>
                During a visit to his motherland, a Korean-Italian mafia lawyer gives an unrivaled conglomerate a taste of its own medicine with a side of justice.
           </span>
        <div className='buttons'>
            <button className='play'>
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className='more'>
                {/* <InfoOutlined/> */}
                <span>More Info</span>
            </button>
        </div>
        </div>
        </div>
    )
}

export default Featured