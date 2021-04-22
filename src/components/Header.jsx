import './Header.css';
import KPI from './KPI.jsx';
import Link from './Link.jsx';

const Header = (props) => {
    return (
        <div className="header-container">
            <Link title="Home" href="/" />
            <Link title="Help" href="/help" />
            <div className="kpis">
                <KPI lable="Record:" value={props.record}/>
                <KPI lable="Tries left:" value={props.triesLeft} />
                <KPI lable="Round:" value={props.round} />
            </div>
        </div>

    );
}

export default Header;