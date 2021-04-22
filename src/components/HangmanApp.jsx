import React from 'react';
import Header from './Header.jsx';
import Gallows from './Gallows.jsx';
import WordSpace from './WordSpace.jsx';
import Alphabet from './Alphabet.jsx';
import Button from './Button.jsx';
import './HangmanApp.css';

class HangmanApp extends React.Component {
    constructor(){
        super();
        this.state = {
            alphabet: [
                { letter: 'a', style: 'normal' },
                { letter: 'b', style: 'normal' },
                { letter: 'c', style: 'normal' },
                { letter: 'd', style: 'normal' },
                { letter: 'e', style: 'normal' },
                { letter: 'f', style: 'normal' },
                { letter: 'g', style: 'normal' },
                { letter: 'h', style: 'normal' },
                { letter: 'i', style: 'normal' },
                { letter: 'j', style: 'normal' },
                { letter: 'k', style: 'normal' },
                { letter: 'l', style: 'normal' },
                { letter: 'm', style: 'normal' },
                { letter: 'n', style: 'normal' },
                { letter: 'o', style: 'normal' },
                { letter: 'p', style: 'normal' },
                { letter: 'q', style: 'normal' },
                { letter: 'r', style: 'normal' },
                { letter: 's', style: 'normal' },
                { letter: 't', style: 'normal' },
                { letter: 'u', style: 'normal' },
                { letter: 'v', style: 'normal' },
                { letter: 'w', style: 'normal' },
                { letter: 'x', style: 'normal' },
                { letter: 'y', style: 'normal' },
                { letter: 'z', style: 'normal' }
            ]
        }
    }
    
    
    
    
    render() {
        const letterArray = [
            {
                letter: 'a',
                style: 'blank'
            },
            {
                letter: 'a',
                style: 'normal'
            },
            {
                letter: 'a',
                style: 'underline'
            },
            {
                letter: 'a',
                style: 'wrong'
            },
            {
                letter: 'a',
                style: 'correct'
            },
            {
                letter: 'b',
                style: 'under'
            },
        ];
        return (
            <div>
                <Header />
                <Gallows image={require('../img/gallows/state11.GIF').default} />
                <WordSpace letterArray={letterArray}/>
                <Alphabet letterArray={this.state.alphabet}/>
                <Button label="Play again!" handler={"someEventHandler"}/>
            </div>
        );
    }
}

export default HangmanApp;