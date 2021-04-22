import './Help.css';
import Link from './Link.jsx';

const Help = () => {
    return (
        <div className="help-container">
            <div className="welcome-buttons">
                <Link title="Home" href="/" />
                <Link title="Play!" href="/game" />
            </div>
            <div className="image-container">
                <h1>Welcome to hangman!</h1>
                <h2>Summary</h2>
                <p>Hangman is easy to play. The goal is to guess the letters of a hidden word before the man get hung! To guess a letter, simply click on the letters show on the bottom of the screen.</p>
                <p>If you guess correctly, the corresponding letters of the hidden word will be revealed.</p>
                <p>If you get it wrong, you lose one try. If you have lost all your tries before you guesed the woed correctly, the man hangs and you lose?</p>
                <p>To restart the game, just click on the "Play again button at the bottom of the screen".</p>
                <h2>Game information</h2>
                <p>The game information is shown in the top right corner. It works as follows:</p>
                <ul>
                    <li>Record: Shows the number of times you have won the game</li>
                    <li>Tries left: Shows the number of tries you have remaining</li>
                    <li>Round: Shows the total number of games you have played</li>
                </ul>
            </div>
        </div>


    );
}

export default Help;