

import * as React from 'react';
import Input from "../common/input";

interface FormProps {
    
}
 
interface FormState {
    
}
 
class Form extends React.Component<FormProps, FormState> {
    state = {}

    public renderInput(value: string, name: string, placeholder: string, type: string = "text") {
        <Input 
            value={value}
            name={name}
            placeholder={placeholder}
            type={type}
        />
    }

    render() { 
        return (
            <React.Fragment>

            </React.Fragment>
        );
    }
}
 
export default Form;