import axios from 'axios'
import React, { Component } from 'react'

export class WelcomeComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       datapost:[],
       erromessage:''
    }
  }

  componentDidMount(){
    axios.get('https://rickandmortyapi.com/api/character/?page=19')
    .then(response =>{
      console.log(response)
      this.setState({datapost:response.data.results})
    })

    .catch(error=>{
      console.log(error)
      this.setState({errormessage:"Error Identified"})
    })
  }


  render() {
    const {datapost,errormessage}=this.state
    return (
      <React.Fragment>
        <div><b>Rick and Morty</b></div>
        <div>
          {datapost.length?datapost.map(a => <div key={a.id}>{a.name}<br></br><img src={a.image} alt='loading..'></img></div>): null}
          {errormessage?<div>{errormessage}</div>:null}
        </div>
      </React.Fragment>
    )
  }
}

export default WelcomeComponent