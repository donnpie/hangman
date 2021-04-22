import './Welcome.css';
import Link from './Link.jsx';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <div className="image-container">
                <img src={require('../img/gallows/state11.GIF').default} id="logo" alt="hangman"/>
            </div>
            <div className="welcome-buttons">
                <Link title="Play!" href="/game" />
                <Link title="Help" href="/help" />
            </div>
        </div>


    );
}

export default Welcome;