

import * as React from 'react';
import { Component } from 'react';
import { Routes, Route} from 'react-router-dom';
import MainNavbar from './common/mainNavbar';
import MainFooter from './common/mainFooter';
import Homepage from './Homepage/Homepage';
import AppContext from './AppContext';
import "../cssDist/style.css";
import { PlanInterface, ReviewInterface } from './Interfaces';
import { getReviews } from './services/reviewsService';
import { getPlans } from './services/planService';

interface AppProps {
  
}
 
interface AppState {
  reviews: ReviewInterface[];
  plans: PlanInterface[];
  reviewLimit: number;
  navigationSidebarOpen: boolean;
  onNavigationOpen(): void;
  onNavigationClose(): void;
}
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    plans: [],
    reviewLimit: 4,
    reviews: [],
    navigationSidebarOpen: false,
    onNavigationOpen: () => {this.handleNavigationInput(true)},
    onNavigationClose: () => {this.handleNavigationInput(false)}
  }

  componentDidMount = (): void => {
    this.setState({plans: getPlans(), reviews: getReviews()});
  }

  handleNavigationInput = (value: boolean) => {
    this.setState({navigationSidebarOpen: value});
  }

  render(): JSX.Element { 
    return (
      <React.Fragment>
        <AppContext.Provider value={this.state}><MainNavbar /></AppContext.Provider>

        <Routes>
          <Route path="/" element={<AppContext.Provider value={this.state}><Homepage /></AppContext.Provider>}/>
        </Routes>
        <MainFooter />
      </React.Fragment>
    );
  }
}
 
export default App;