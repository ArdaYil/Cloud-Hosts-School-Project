

import * as React from 'react';
import Reviews from './reviews';
import Hero from "./hero";
import Plans from './plans';
import GeneralText from './generalText';

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
                    <Hero />
                </header>
                <aside>
                    
                </aside>
                <main>
                    <header>
                        <Plans />
                        <GeneralText />
                    </header>
                    <footer>
                        <Reviews />
                    </footer>
                </main>
            </React.Fragment>
        );
    }
}
 
export default Homepage;