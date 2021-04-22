import './Header.css';
import KPI from './KPI.jsx';
import Link from './Link.jsx';

const Header = (props) => {
    return (
        <div className="header-container">
            <Link title="Home" href="/" />
            <div className="kpis">
                <KPI lable="Record:" value="100"/>
                <KPI lable="Tries left:" value="10" />
                <KPI lable="Round:" value="5" />
            </div>
        </div>

    );
}

export default Header;