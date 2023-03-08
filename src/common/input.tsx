

import * as React from 'react';

interface InputProps {
    type: string,
    value: string,
    name: string,
    placeholder: string
}
 
interface InputState {
    
}
 
class Input extends React.Component<InputProps, InputState> {
    state = {}
    
    render() { 
        const {type, value, name, placeholder} = this.props;

        return (
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
            />
        );
    }
}
 
export default Input;