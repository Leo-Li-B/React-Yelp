import React, { Component } from 'react';

import Form from "./components/Form";
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

import './App.css';

const API_KEY = "99mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx";

class App extends Component {

  state = {
    term: "",
    category: null,
    location: null,
    sortBy: null,
    openAt: null,
    openNow: true,
    error: null
  }

  getYelp = async (event) => {
    event.preventDefault()

    const { category, location } = event.target.elements
    const url = "{'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=vancouver"
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }).then(res => {
      console.log(res);
    })
    
  }
  render() {
    return (
      <div className="wrapper">
      <div className="main">
      <header> 
        <h1>Yelp Search</h1>
      </header>
        <Grid container direction="row" justify="center">
          <Form getYelp={this.getYelp}/>
          <Checkbox
            checked={this.state.openNow}
            >Open Now</Checkbox>
        </Grid>
      </div>
      </div>
    );
  }
}



export default App;
