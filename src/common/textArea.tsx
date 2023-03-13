

import * as React from 'react';
import AppContext from '../AppContext';

interface TextAreaProps {
    name: string;
    placeholder: string;
    value: string;
    onChange: Function;
}
 
interface TextAreaState {
    
}
 
class TextArea extends React.Component<TextAreaProps, TextAreaState> {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>

    state = {}

    render() {
        const {name, placeholder, value, onChange} = this.props;
        const { length } = value;
        const color = (length < 20 || length > this.context.maxContent) ? "red" : "black"
        const textAmountStyle = { color }

        return (
            <div className="text-field">
                <textarea 
                    name={name} 
                    className={name} 
                    value={value}
                    placeholder={placeholder}
                    onChange={input => onChange(input.target.value)}
                    style={{width: "100%"}}>
                </textarea>
                <p 
                    className="textAmount" 
                    style={textAmountStyle}>
                    {length + "/" + this.context.maxContent}
                </p>
            </div>
        );
    }
}
 
export default TextArea;