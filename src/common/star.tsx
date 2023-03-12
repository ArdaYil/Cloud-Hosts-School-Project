

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface StarProps {
    active: boolean;
    onClick: Function;
    value: number;
}
 
interface StarState {
    
}
 
class Star extends React.Component<StarProps, StarState> {
    state = {}

    render() { 
        const {active, onClick, value} = this.props;
        const color: string = (active) ? "#7098FF" : "white"
        
        return (
            <FontAwesomeIcon onClick={() => onClick(value)} color={color} icon="star" />
        );
    }
}
 
export default Star;