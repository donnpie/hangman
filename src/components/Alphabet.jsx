import React from 'react';
import Letter from './Letter.jsx';
import './Alphabet.css';

class Alphabet extends React.Component {
    render() {
        return (
            <div>
                 {this.props.letterArray.map((item, idx)=>{
                    return (
                        <Letter key={idx} letter={item.letter} style={item.style}/>
                    );
                })}
            </div>
        );
    }
}

export default Alphabet;