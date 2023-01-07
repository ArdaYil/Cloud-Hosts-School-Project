

import * as React from 'react';
import { Component } from 'react';
import { Routes, Route} from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import "../cssDist/style.css";
import AppContext from './AppContext';

interface AppProps {
  
}
 
interface AppState {
  reviews: number;
}
class App extends React.Component<AppProps, AppState> {
  state = {
    reviews: 8,
    plans: [
      {title: "regular", price: 10},
      {title: "basic", price: 25},
      {title: "premium", price: 50},
    ]
  }

  render() { 
    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<AppContext.Provider value={this.state}><Homepage /></AppContext.Provider>}/>
        </Routes>
      </React.Fragment>
    );
  }
}
 
export default App;