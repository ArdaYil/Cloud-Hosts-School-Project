

import * as React from 'react';
import AppContext from '../AppContext';
import Input from "./input";
import TextArea from './textArea';

interface FormProps {
    
}
 
interface FormState {
    
}
 
class Form extends React.Component<FormProps, FormState> {
    static contextType = AppContext;
    declare context: React.ContextType<typeof AppContext>

    state = {}

    renderInputError = (error: boolean) => error ? <p className="error">Author has to be between 2 and 50 characters</p> : null
    renderContentError = (error: boolean) => error ? <p className="error">Content has to be between 20 and 100 characters</p> : null;

    renderInput = (name: string, value: string, placeholder: string, onChange: Function, type: string = "text"): JSX.Element => {
        const error = this.context.createReviewErrors[name]

        return (
            <div className="input-wrapper">
                <Input
                    type={type}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {this.renderInputError(error)}
            </div>
        )
    }

    renderTextArea = (name: string, value: string, placeholder: string, onChange: Function) => {
        const error = this.context.createReviewErrors[name]
        
        return (
            <div className="text-field-wrapper">
                <TextArea 
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {this.renderContentError(error)}
            </div>
        )
    }
}
 
export default Form;