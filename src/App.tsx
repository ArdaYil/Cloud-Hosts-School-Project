

import * as React from 'react';
import { Component } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import MainNavbar from './common/mainNavbar';
import MainFooter from './common/mainFooter';
import Homepage from './Homepage/Homepage';
import AppContext from './AppContext';
import "../cssDist/style.css";
import { PlanInterface, ReviewInterface } from './Interfaces';
import { getReviews } from './services/reviewsService';
import { getPlans } from './services/planService';
import NotFound from './notFound';

interface AppProps {
  
}
 
interface AppState {
  reviews: ReviewInterface[];
  plans: PlanInterface[];
  reviewLimit: number;
  navigationSidebarOpen: boolean;
  mediumBreakpoint: boolean;
  onNavigationOpen(): void;
  onNavigationClose(): void;
}

let currentWidth = window.innerWidth;
let currentWidth1 = window.innerWidth;
let smallPage = false;
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    plans: [],
    reviewLimit: 4,
    reviews: [],
    navigationSidebarOpen: false,
    mediumBreakpoint: window.innerWidth > 600,
    onNavigationOpen: () => {this.handleNavigationInput(true)},
    onNavigationClose: () => {this.handleNavigationInput(false)},
  }

  private shouldCloseSidebar = (): boolean => {
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    return scrollTop > 200;
  }

  private getBodyHeight(body: HTMLElement) {
    const clientHeight = body.clientHeight;
    let paddingBottom = parseInt(body.style.paddingBottom);
    
    paddingBottom = (Number.isNaN(paddingBottom)) ? 0 : paddingBottom;
    console.log(paddingBottom)
    return clientHeight - paddingBottom * 16;
  }

  private footerRendering = () => {
    const body = document.querySelector("body");
    const footer: any = document.querySelector(".footer");
    const html: any = document.querySelector("html");

    if (!body?.clientHeight) return;
    if (!footer) return;
    if (!html) return;
    
    if (window.innerHeight - (this.getBodyHeight(body) - 100) > 0) {
      footer.style.position = "absolute";
      footer.style.width = "100%";

      if (window.innerWidth < 700) {
        let padding = 30

        body.style.paddingBottom = padding + "em";
        footer.style.bottom = -padding + "em";
        html.style.overflowY = "scroll";
      }

      else {
        body.style.paddingBottom = "0";
        html.style.overflowY = "hidden";
        footer.style.position = "absolute";
        footer.style.width = "100%";
        footer.style.bottom = "30px";
        console.log("here")
      }
    }

    else {
      html.style.overflowY = "scroll";
      footer.style.position = "initial";
    }
  }

  componentDidMount = (): void => {
    this.setState({plans: getPlans(), reviews: getReviews()});
    this.footerRendering();
  }

  handleNavigationInput = (value: boolean) => {
    this.setState({navigationSidebarOpen: value});
  }

  render(): JSX.Element { 
    window.addEventListener("scroll", event => {
      if (!this.shouldCloseSidebar()) return;

      this.setState({navigationSidebarOpen: false});
    })

    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        if (currentWidth1 >= 700) {

          currentWidth1 = window.innerWidth;

          this.footerRendering();
        }
      }

      else {
        console.log("Width greater than 700")
        if (currentWidth1 < 700) {
          console.log(currentWidth);
          currentWidth1 = window.innerWidth;
          this.footerRendering();
        }
      }

      if (window.innerWidth <= 600) {
        if (currentWidth > 600) {
          console.log("Change false");
          this.setState({mediumBreakpoint: false});
          currentWidth = window.innerWidth;
        }
      }

      else {
        if (currentWidth <= 600) {
          console.log("Change true");
          this.setState({mediumBreakpoint: true});
          currentWidth = window.innerWidth;
        }
      }
    })

    return (
      <React.Fragment>
        <AppContext.Provider value={this.state}><MainNavbar /></AppContext.Provider>

        <Routes>
          <Route path="/" element={<AppContext.Provider value={this.state}><Homepage /></AppContext.Provider>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MainFooter />
      </React.Fragment>
    );
  }
}
 
export default App;