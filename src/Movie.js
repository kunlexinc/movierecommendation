import React, {Component} from 'react'

class Movie extends Component{
  render(){
    
     console.log(this.props.profile)
    console.log(this.props.movie)
    console.log(this.props.user)
  
  return(
    
    <div>
    {this.props.profile.map( watchers => {
     
    
   
     
     
     
    }
    )}</div>

 ) }
}

export default Movie; 