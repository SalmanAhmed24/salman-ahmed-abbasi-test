import React from 'react';
import './search.scss';
import Artist from '../artist/artist';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            searchField:"",
            artist:"",
        }
    }
    searchHandler=(event)=>{
        this.setState({
            searchField:event.target.value
        })
    }
    onFormSubmit = (event)=>{
        event.preventDefault();
        fetch(`https://rest.bandsintown.com/artists/${this.state.searchField}?app_id=test`)
        .then(response => response.json())
        .then((data) =>{ 
            this.setState({artist:data})
                       
        })
        .catch(error=>{
                console.log(error)
            })
    }
    render(){
        console.log(this.state.error);
        return(
            <div className="container-fluid pr-0 pl-0">
            <div className="container-fluid pr-0 pl-0 main-head-wrap">
                <h1 className="main-h">Your <span>Favourite Band</span> is one</h1>
                <h1 className="main-h">Search away</h1>
                <div className="main-wraper">
                <form onSubmit={this.onFormSubmit}>
                <div className="input-group mb-3 cus-group">
                <input 
                    onChange={this.searchHandler}
                    type="text"
                    name="search" 
                    className="cus-inp" 
                    placeholder="Artist's Name" 
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn-cus" type="submit">
                        <img className="cus-search-img" src={require('../../assets/img/search.png')} alt=""/>
                    </button>
                </div>
                </div>
                </form>                
            </div>
            
            </div>
            <div className="container">
            {(this.state.artist.error)?<p className="not-found">Not Found</p>
                    :<Artist 
                    name={this.state.artist.name}
                    thumb_url={this.state.artist.thumb_url}
                    facebook = {this.state.artist.facebook_page_url}
                    />
                    }
            </div>
      </div>
    );
    }
}
export default Search;