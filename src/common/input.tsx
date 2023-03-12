

import * as React from 'react';

interface InputProps {
    type: string,
    value: string,
    name: string,
    placeholder: string,
    onChange: Function,
}
 
interface InputState {
    
}
 
class Input extends React.Component<InputProps, InputState> {
    state = {}
    
    render() { 
        const {type, value, name, placeholder, onChange} = this.props;

        return (
            <input
                style={{width: "100%"}}
                className={name}
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={input => onChange(input.target.value)}
            />
        );
    }
}
 
export default Input;