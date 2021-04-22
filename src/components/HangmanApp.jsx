import React from 'react';
import Header from './Header.jsx';
import Gallows from './Gallows.jsx';
import WordSpace from './WordSpace.jsx';
import Alphabet from './Alphabet.jsx';
import Button from './Button.jsx';
import {dictionary} from '../data/dictionary.js';
import {startAlphabet} from '../data/startAlphabet.js';
import './HangmanApp.css';

//state variables:
//targetWord: the word that the user must discover
//targetWordArray: an array containing objects that represent the letters and images of the targetWord
//record: Increments everytime the user wins
//triesLeft: number of attampts remaining before game over
//round: increments every time the user starts a new game, even if he did not finish the previous game
//gameComplete: true if the user guesed the word or ran out of tries
//gameWon: true if the user guesed the word
//alphabet: an array containing objects that represent the letters and images of the alphabet

class HangmanApp extends React.Component {
    constructor(){
        super();
        const tw = this.getRandomWord();
        const twa = this.getTargetWordArray(tw, 'blank');
        this.state = {
            targetWord: tw,
            targetWordArray: twa,
            record: 0,
            triesLeft: 10,
            round: 1,
            gameComplete: false,
            gameWon: false,
            alphabet: startAlphabet
        }
        this.handleAlphabetClick = this.handleAlphabetClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAlphabetClick(letter, style) {
        //When user clicks on a letter of the alphabet
        if (this.state.gameWon || this.state.triesLeft === 0) return; //Stop if game is over
        if (style === 'blank' || style === 'underline') return; //Don't allow clicking on word area
        if (style === 'wrong' || style === 'correct') return; //Don't allow clicking on letters already used
        //console.log('handleAlphabetClick');
        
        //Check if letter is in target word
        const positions = this.getLetterPositionsInArray(
            this.state.targetWord, 
            letter
        );
        //console.log('positions: ', positions);

        //The letter is in the word
        if (positions.length > 0) {

            //circle the letter in the alphabet
            this.updateLetterStyle('alphabet', letter, 'correct', -1);

            //update the word
            for (let i = 0; i < positions.length; i++) {
                this.updateLetterStyle('targetWordArray', letter, 'underline', positions[i]);
            }

            //check if the word is complete
            if (this.wordIsComplete()) {
                //Increment the record counter and show win message
                this.setState((prevState)=>{
                    return {
                        record: prevState.record + 1,
                        gameComplete: true,
                        gameWon: true,
                    }
                });
            } else {
                //console.log('word is not complete');
            }
        } 
        //The letter is not in the word
        else {

            //Decrement triesLeft
            this.setState((prevState)=>{
                const oneTryLeft = prevState.triesLeft === 1; 
                return {
                    triesLeft: prevState.triesLeft - 1,
                    gameComplete: oneTryLeft
                }
            });

            //cross out the letter in the alphabet
            this.updateLetterStyle('alphabet', letter, 'wrong', -1);

            //update gallows image
            //Done automatically by up looking up image from number of tries
        }
    }

    handleReset() {
        //When user clicks on play again
        const tw = this.getRandomWord();
        const twa = this.getTargetWordArray(tw, 'blank');
        this.setState((prevState)=>{
            return {alphabet: [
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
            ],
            targetWord: tw,
            targetWordArray: twa,
            triesLeft: 10,
            gameComplete: false,
            gameWon: false,
            round: prevState.round + 1,
        }
        });
        //The set statement above works, but thy this doesn't work:
        // this.setState(()=>{
        //     return {alphabet: startAlphabet}
        // });
    }

    getRandomWord() {
        //fetch a random word from dictionary and convert to lowercase
        const len = dictionary.length;
        const randomNum = Math.floor(Math.random()*len);
        return dictionary[randomNum].toLowerCase();
    }

    getTargetWordArray(word, style) {
        //convert the targetWord into an array
        let array = [];
        for (let i = 0; i < word.length; i++) {
            array.push({
                letter: word[i].toLowerCase(),
                style: style
            });
        }
        return array;
    }

    getLetterPositionsInArray(word, letter) {
        //Returns an array with index positions of all occurences of letter
        //console.log("Letter to match: ", letter);
        let positions = [];
        for (let i = 0; i < word.length; i++) {
            //if (word[i].letter === letter) { //Does not work
            if (word[i].localeCompare(letter.toLowerCase()) === 0) {
                //console.log("is a match: ", word[i]);
                positions.push(i);
            } else {
                //console.log("Not a match: ", word[i]);
            }
        }
        return positions;
    }

    updateLetterStyle(arrayName, letter, style, position) {
        //Update the style of the letter in the specified array to the specified style
        //array is either 'alphabet' or 'targetWordArray'
        //style is a valid style - see Letter.jsx
        //if position is -1, only the first occurence of letter is updated - use this if you want to update a letter from the Alphabet component
        //if position is a non-negative integer, then the letter at that position is updated - use this if you want to update a letter from the WordSpace component

        let array;
        if (arrayName.localeCompare('alphabet') === 0) {
            array = this.state.alphabet;
        }
        else if (arrayName.localeCompare('targetWordArray') === 0) {
            array = this.state.targetWordArray;
        } else {
            throw new Error("The 'arrayName' parameter passed to function 'updateLetterStyle' is invalid. Expected 'alphabet' or 'targetWordArray' but got '" + arrayName + "'");
        }

        let idx;
        if (position >= 0) {
            //position is specified by caller
            idx = position;
        }
        else {
            //find first instance
            for (let i = 0; i < array.length; i++) {
                if (letter === array[i].letter) {
                    idx = i;
                    break;
                }
            }
        }
        let element = array[idx];
        element.style = style;
        array[idx] = element;

        if (arrayName.localeCompare('alphabet') === 0) {
            this.setState(()=>{
                return {alphabet: array}
            });
        }
        else if (arrayName.localeCompare('targetWordArray') === 0) {
            this.setState(()=>{
                return {targetWordArray: array}
            });
        }
    }

    wordIsComplete() {
        //returns true if all the letters in the word is complete
        const n = this.state.targetWord.length;
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (this.state.targetWordArray[i].style === 'underline') {
                count++;
                //console.log(i, count);
            }
        }
        return n === count;
    }
    
    render() {
        const winMessage = 'Congratulations, you won!';
        const loseMessage = 'Awh, you failed. Have another go!';
        const showWinMessage = this.state.gameComplete && this.state.gameWon;
        const showLoseMessage = this.state.gameComplete && !this.state.gameWon;
        const debugMode = false;
        return (
            <div className="hangman-app">
                <Header 
                    record={this.state.record}
                    triesLeft={this.state.triesLeft}
                    round={this.state.round}
                />
                {debugMode && this.state.targetWord}
                {showWinMessage && <h1 className="victory">{winMessage}</h1>}
                {showLoseMessage && <h1 className="defeat">{loseMessage}</h1>}
                <Gallows triesLeft={this.state.triesLeft} />
                <WordSpace 
                    letterArray={this.state.targetWordArray}
                    handleAlphabetClick={this.handleAlphabetClick}
                />
                <Alphabet 
                    letterArray={this.state.alphabet}
                    handleAlphabetClick={this.handleAlphabetClick}
                />
                <Button label="Play again!" handler={this.handleReset}/>
                {debugMode && this.state.alphabet.map((item, idx)=>{
                    return <p key={idx}>{item.letter}: {item.style}</p>
                })}
                {debugMode && <div>targetWord: <ul>
                    {this.state.targetWordArray.map((item, idx)=>{
                        return (
                            <p key={idx}>{item.letter}: {item.style}</p>
                        );
                    })}
                </ul></div>}
            </div>
        );
    }
}

export default HangmanApp;
