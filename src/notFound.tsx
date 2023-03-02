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
                <div className="not-found">
                    <h2>Error 404, Not Found</h2>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NotFound;