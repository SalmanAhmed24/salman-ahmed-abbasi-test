import React from 'react'
import './singleEventComponent.scss'
const SingleEventComponent = (props)=>{
    const {venue,date} = props
    return( 
            <div className="event-card">
                <p className="event-h">Event Details</p>
                <div className="sub-info-wrap">
                    <div className="sub-info">
                        <p className="sub-h">Country</p>
                        <p className="sub-p">{venue.country}</p>
                    </div>
                    <div className="sub-info">
                        <p className="sub-h">City</p>
                        <p className="sub-p">{venue.city}</p>
                    </div>
                </div>
                <div className="sub-info-wrap">
                    <div className="sub-info">
                        <p className="sub-h">Venue</p>
                        <p className="sub-p">{venue.name}</p>
                    </div>
                    <div className="sub-info">
                        <p className="sub-h">Date</p>
                        <p className="sub-p">{date.toString()}</p>
                    </div>
                </div>
            </div> 
    );
}
export default SingleEventComponent;