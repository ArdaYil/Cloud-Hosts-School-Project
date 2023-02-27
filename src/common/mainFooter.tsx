

import * as React from 'react';
import { Link } from 'react-router-dom';

interface MainFooterProps {
    
}
 
interface MainFooterState {
    
}
 
class MainFooter extends React.Component<MainFooterProps, MainFooterState> {
    state = {}

    render() { 
        return (
            <React.Fragment>
                {/* <div className="spacer" style={{height: "15em"}}>

                </div> */}
                <footer className="footer">
                    <h2 className="title capitalize">cloud hosts</h2>
                    <article className="footer__link-container">
                        <Link to="/" className="capitalize">for business</Link>
                        <Link to="/" className="capitalize">contact us</Link>
                        <Link to="/" className="capitalize">about us</Link>
                    </article>
                    <article className="footer__social-container">
                        <img src="../public/icons/facebook.png" alt="" />
                        <img src="../public/icons/snapchat.png" alt="" />
                        <img src="../public/icons/facebook.png" alt="" />
                    </article>
                    <article className="footer__bottom-links">
                        <p className="capitalize footer__link-item">cloud hosts - 2023 &copy;</p>
                        <Link className="capitalize footer__link-item" to="/">privacy policy</Link>
                        <Link className="capitalize footer__link-item" to="/">refund policy</Link>
                    </article>
                </footer>
            </React.Fragment>
        );
    }
}
 
export default MainFooter;