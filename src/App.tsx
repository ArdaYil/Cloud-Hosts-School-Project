

import * as React from 'react';
import { Component } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import MainNavbar from './common/mainNavbar';
import MainFooter from './common/mainFooter';
import Homepage from './Homepage/Homepage';
import AppContext from './AppContext';
import "../cssDist/style.css";
import { PlanInterface, ReviewInterface, CreateReviewInterface, CreateReviewErrorsInterface } from './Interfaces';
import { getPlans } from './services/planService';
import NotFound from './notFound';
import ReviewsPage from './reviewsPage';
import NewReview from './newReview';
import joi from "joi";
import { getReviews, getReviewsAsync, saveReview, setReview } from './services/reviewsService';
import { useNavigate } from "react-router-dom";

interface AppProps {
  
}
 
interface AppState {
  reviews: ReviewInterface[];
  plans: PlanInterface[];
  createReview: CreateReviewInterface;
  createReviewErrors: CreateReviewErrorsInterface;
  updateAuthor: Function;
  updateContent: Function;
  updateRating: Function;
  composeReview: Function;
  maxContent: number,
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
    reviewLimit: 3,
    reviews: [],
    navigationSidebarOpen: false,
    createReview: {author: "", content: "", rating: 1},
    createReviewErrors: {author: false, content: false},
    maxContent: 490,
    updateAuthor: (text: string) => this.updateAuthor(text),
    updateContent: (text: string) => this.updateContent(text),
    updateRating: (rating: number) => this.updateRating(rating),
    composeReview: () => this.composeReview(),
    mediumBreakpoint: window.innerWidth > 600,
    onNavigationOpen: () => {this.handleNavigationInput(true)},
    onNavigationClose: () => {this.handleNavigationInput(false)},
  }

  private shouldCloseSidebar = (): boolean => {
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    return scrollTop > this.state.maxContent;
  }

  componentDidMount = async (): Promise<void> => {
    const reviews = await getReviewsAsync();
    
    this.setState({plans: getPlans(), reviews: reviews});
  }

  handleNavigationInput = (value: boolean) => {
    this.setState({navigationSidebarOpen: value});
  }

  updateAuthor = (text: string) => {
    const createReview = {...this.state.createReview}
    createReview.author = text;

    this.setState({createReview})
  }

  updateContent = (text: string) => {
    const createReview = {...this.state.createReview}
    createReview.content = text;

    this.setState({createReview})
  }

  updateRating = (rating: number) => {
    const createReview = {...this.state.createReview}
    createReview.rating = rating;

    this.setState({createReview})
  }

  validateReview = () => {
    const schema = joi.object({
      author: joi.string().min(2).max(50).required(),
      content: joi.string().min(20).max(this.state.maxContent).required(),
      rating: joi.number().min(1).max(5).required()
    });

    return schema.validate(this.state.createReview)
  }

  composeReview = async () => {
    const { error } = this.validateReview()
    const errors = {...this.state.createReviewErrors}
    const currentState = this.state;

    errors.author = false;
    errors.content = false;

    if (error) {
      const { author, content } = this.state.createReview

      if (author.length < 2 || author.length > 50) errors.author = true
      if (content.length < 20 || content.length > this.state.maxContent) errors.content = true

      this.setState({createReviewErrors: errors})

      return;
    }

    const reviewData = {...this.state.createReview};
    const createReview = {...this.state.createReview};

    createReview.author = "";
    createReview.content = "";
    createReview.rating = 1;

    this.setState({
      createReviewErrors: errors, 
      reviews: getReviews(), 
      createReview
    });
    console.log(reviewData)
    const review = await saveReview(reviewData);

    console.log(review)

    if (!review) {
      this.setState(currentState);
      return;
    }

    setReview(review);

    this.setState({
      reviews: getReviews(), 
    });
  }

  render(): JSX.Element { 
    window.addEventListener("scroll", event => {
      if (!this.shouldCloseSidebar()) return;

      this.setState({navigationSidebarOpen: false});
    })

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        if (currentWidth > 600) {
          this.setState({mediumBreakpoint: false});
          currentWidth = window.innerWidth;
        }
      }

      else {
        if (currentWidth <= 600) {
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
          <Route path="/reviews/new" element={<AppContext.Provider value={this.state}><NewReview /></AppContext.Provider>}/>
          <Route path="/reviews" element={<AppContext.Provider value={this.state}><ReviewsPage /></AppContext.Provider>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MainFooter />
      </React.Fragment>
    );
  }
}
 
export default App;