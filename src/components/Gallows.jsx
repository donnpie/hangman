import React from 'react';
import './Gallows.css';

class Gallows extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    

    
    
    render(props) {
        return (
            <div>
                <img src={this.props.image} id="logo" alt="hangman"/>
            </div>
        );
    }
}

export default Gallows;