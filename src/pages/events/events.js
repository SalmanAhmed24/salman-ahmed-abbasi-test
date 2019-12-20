import React from 'react';
import './events.scss';
import { Link } from 'react-router-dom';
import ArtistCard from '../../components/artistCard/artistCard';
import SingleEventComponent from '../../components/singleEventComponent/singleEventComponent';

class Events extends React.Component{
    constructor(){
        super();
        this.state={
            error:"",
            events:[],
            artist:null
        }
    }
    componentDidMount(){
        const artistName = this.props.match.params.artistName;
        
        fetch(`https://rest.bandsintown.com/artists/${artistName}/events?app_id=test&date=upcoming`)
        .then(response=>response.json()
        )
        .then((data)=>{
            if(data.length === 0){
                this.setState({error:'No Upcoming Events Found'})
            }
            else{

                this.setState({events:data})
            }
        });
        fetch(`https://rest.bandsintown.com/artists/${artistName}?app_id=test`)
        .then(response=>response.json()
        )
        .then((data)=>{
            // console.log(data);
            this.setState({artist:data})
        })
    }
    render(){
        const event = this.state.events[0];
        console.log("this is single event >>>>",event);
        const singleEvent = this.state.events.map((items)=>{
        return <SingleEventComponent key={items.id} venue={items.venue} artist={items.artist} date={items.datetime}/>    
        })
        return(
            <div className="container">
                <Link className="back-wrap" to="/">
                    <p className="go-back">/Home</p>
                </Link>
                <div className="card-link-event">
                {
                    (this.state.artist)?
                    <ArtistCard 
                    name={this.state.artist.name} 
                    thumb_url={this.state.artist.thumb_url} 
                    facebook={this.state.artist.facebook_page_url}/>
                    :   <div>
                            <p>Loading</p>
                        </div>
                }
                </div>
                <div className="upcoming-wrap">
                {(event)?
                    <h1 className="event-count"><span>{event.artist.upcoming_event_count}</span> upcoming events</h1>
                    :
                <p className="no-event">{this.state.error}</p>
                }
                </div>
                <div className="event-card-wrap">
                {singleEvent}
                </div>
            </div>
        )
    }
}
export default Events;