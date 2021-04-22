import React from 'react';
import './Letter.css';

//Style options for letters:
//blank: only shows a underscore. letter not shown
//normal: shows letter only
//underline: shows letter with underline
//wrong: shows letter with strikethrough
//correct: shows letter with green circle around it  

class Letter extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        //To return custom data elements:
        //https://www.pluralsight.com/guides/how-to-access-custom-attributes-from-aevent-object-in-react
        
        //console.log(e);
        //console.log(e.target.dataset.letter);
        this.props.handleAlphabetClick(e.target.dataset.letter, e.target.dataset.style);
    }

    getImage(letter, style) {
        //returns the image corresponding to a letter and style
        if (style === 'blank') return require('../img/alphabet/blank.jpg').default;
        
        //check for valid style and letter
        const l = letter.toLowerCase();
        const validLetters = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
            'j', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];
        const letterIsOk = validLetters.find((ltr)=>ltr===l);
        const styleIsOk = style === 'normal' || style === 'underline' || style === 'wrong' || style === 'correct'
        if (styleIsOk && letterIsOk) {
            return require('../img/alphabet/' + l + ' ' + style + '.jpg').default;
            //if (style === 'underline') return require('../img/alphabet/'+l+' '+style+'.jpg').default; //Does not work - why??
        } else {
            return require('../img/alphabet/error.jpg').default;
        }
    }
    
    render() {
        return (
            <img 
                src={this.getImage(this.props.letter, this.props.style)} 
                className="letter-image"
                onClick={this.handleClick}
                data-letter={this.props.letter}
                data-style={this.props.style}
                alt="letter" 
            />
        );
    }
}

export default Letter;