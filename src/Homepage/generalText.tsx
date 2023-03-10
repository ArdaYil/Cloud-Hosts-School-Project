

import * as React from 'react';
import AppContext from '../AppContext';

interface GeneralTextProps {
    
}
 
interface GeneralTextState {
    
}
 
class GeneralText extends React.Component<GeneralTextProps, GeneralTextState> {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>;

    state = {};

    getClassName = (): string => {
        if (this.context.mediumBreakpoint == false) return "text-container";

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