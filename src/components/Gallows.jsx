import React from 'react';
import './Gallows.css';

class Gallows extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    getImage(triesLeft) {
        //returns the gallow image corresponding to the number of tries left
        
        switch (triesLeft) {
            case 0:
                return require('../img/gallows/state11.GIF').default;
            case 1:
                return require('../img/gallows/state10.GIF').default;
            case 2:
                return require('../img/gallows/state9.GIF').default;
            case 3:
                return require('../img/gallows/state8.GIF').default;
            case 4:
                return require('../img/gallows/state7.GIF').default;
            case 5:
                return require('../img/gallows/state6.GIF').default;
            case 6:
                return require('../img/gallows/state5.GIF').default;
            case 7:
                return require('../img/gallows/state4.GIF').default;
            case 8:
                return require('../img/gallows/state3.GIF').default;
            case 9:
                return require('../img/gallows/state2.GIF').default;
            case 10:
                return require('../img/gallows/state1.GIF').default;
            default:
                return require('../img/gallows/state1.GIF').default;
        }
    }
    
    
    render(props) {
        return (
            <div>
                <img src={this.getImage(this.props.triesLeft)} id="logo" alt="hangman"/>
            </div>
        );
    }
}

export default Gallows;