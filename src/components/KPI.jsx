import './KPI.css';

const KPI = (props) => {
    return (
        <div className="KPI-container">
            <h4>{props.lable}</h4>
            <p>{props.value}</p>
        </div>

    );
}

export default KPI;