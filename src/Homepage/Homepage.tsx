

import * as React from 'react';
import Reviews from './reviews';
import MainNavbar from '../common/mainNavbar';
import MainFooter from '../common/mainFooter';
import Hero from "./hero";
import Plans from './plans';

interface HomepageProps {
    
}
 
interface HomepageState {
    
}
 
class Homepage extends React.Component<HomepageProps, HomepageState> {
    state = {}

    componentDidMount = () => {
        document.title = "Cloud Hosts | Homepage"
    }

    render() { 
        return (
            <React.Fragment>
                <header>
                    <MainNavbar />
                    <Hero />
                </header>
                <aside>
                    
                </aside>
                <main>
                    <header>
                        <Plans />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Minima a vitae totam facilis, modi placeat dolorum blanditiis 
                            ratione quisquam aliquam!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Minima a vitae totam facilis, modi placeat dolorum blanditiis 
                            ratione quisquam aliquam!
                        </p>
                    </header>
                    <footer>
                        <Reviews />
                    </footer>
                </main>
                <MainFooter />
            </React.Fragment>
        );
    }
}
 
export default Homepage;