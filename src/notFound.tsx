import * as React from 'react';

interface NotFoundProps {
    
}
 
interface NotFoundState {
    
}
 
class NotFound extends React.Component<NotFoundProps, NotFoundState> {
    state: NotFoundState = {};

    render() { 
        return (
            <React.Fragment>
                <h1>Not Found</h1>
            </React.Fragment>
        );
    }
}
 
export default NotFound;