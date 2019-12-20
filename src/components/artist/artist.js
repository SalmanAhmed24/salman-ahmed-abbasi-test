import React from 'react';
import {Link} from 'react-router-dom';
import './artist.scss';
import ArtistCard from '../artistCard/artistCard';

const Artist = (props)=>{
    
        const {name,thumb_url,facebook} = props;
        
        return(
            
            <div className="artist-main-wrap">
                {
                    (name) ?
                    <Link className="card-link" to={`/events/${name}`}> 
                        <ArtistCard name={name} thumb_url={thumb_url} facebook={facebook} />
                    </Link>
                    :   <div>
                            <p></p>
                        </div>
                }
               
            </div>
        )
    }
export default Artist;