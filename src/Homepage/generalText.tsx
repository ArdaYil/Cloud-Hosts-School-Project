

import * as React from 'react';

interface GeneralTextProps {
    
}
 
interface GeneralTextState {
    
}
 
class GeneralText extends React.Component<GeneralTextProps, GeneralTextState> {
    state = {};

    getClassName = (): string => {
        if (window.innerWidth < 600) return "text-container";

        return "general-text";
    }

    render() { 
        return (
            <article className={this.getClassName()}>
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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima a vitae totam facilis, modi placeat dolorum blanditiis
                    ratione quisquam aliquam!
                </p>
            </article>
        );
    }
}
 
export default GeneralText;