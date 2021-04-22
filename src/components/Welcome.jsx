import './Welcome.css';
import Link from './Link.jsx';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <div className="image-container">
                <img src={require('../img/gallows/state11.GIF').default} id="logo" alt="hangman"/>
            </div>
            <Link title="Play!" href="/game" />
        </div>


    );
}

export default Welcome;