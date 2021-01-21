import './App.css';
import React from 'react';
import Tweet from './components/Tweet';

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {items: {films: []}}
  };

  componentDidMount(){
    this.fetchItems();
  };

  // function to send request and set state = response
  fetchItems = async () => {
    const data = await fetch(
      'https://swapi.dev/api/starships/2/'
    );
    const items = await data.json();
    this.setState({items});
  };

  render(){
    return (
      <div onClick={this.fetchItems}>
        {/* {
          this.state.items.films.map(element => {
            return (
              <h2 key={element}> {element} </h2>
            )
         })
        } */}
        <Tweet 
          username = 'hamideshoun'
          img = 'https://en.wikipedia.org/wiki/File:Gutenberg_Bible,_Lenox_Copy,_New_York_Public_Library,_2009._Pic_01.jpg'
          tweet = 'first tweet !!!'
        />
      </div>
    );
  }
}

export default Home;
