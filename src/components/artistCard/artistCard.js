import React from 'react';
import './artistCard.scss';

const ArtistCard = (props)=>{
    const {thumb_url,name,facebook} = props;
    return(
        <div className="main-card">
                        <div className="img-wrap">
                            <img className="img-card" src={thumb_url} alt=""/>
                        </div>
                        <div className="card-info-wrap">
                            <div className="card-name">
                                <p>{name}</p>
                            </div>
                            <div className="social-link-wrap">
                                {
                                    (facebook === "")?<p>Facebook not found</p>
                                
                                :<p>Facebook: <span>{facebook}</span></p>
                                }
                            </div>
                        </div>
        </div>
    );
}
export default ArtistCard;