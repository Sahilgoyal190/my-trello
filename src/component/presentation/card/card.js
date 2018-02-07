import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import './main.css';
import { Link } from 'react-router-dom';
const mapper = {
    'doing': 'yellow',
    'done': '#00ff00',
    'backlog': '#ff0000',
}



const Card = ({ data }) => {
    const cardData = [];
    let counter = 1;
    for (let keys in mapper) {
        cardData.push({
            value: data[keys],
            color: mapper[keys],
            key: counter
        })
        counter++;
    }
    return (
        <div className="col-md-4">
            <Link to={`/board/${data.id}`} >
                <div className={`card green-${data.status}`}>
                    <h2>{data.project_name}</h2>
                    <div className="row">
                        <div className="col-md-6 pull-left">
                            <div className="row red block">Backlog: {data.backlog}</div>
                            <div className="row yellow block">Doing: {data.doing} </div>
                            <div className="row green block">Done: {data.done}</div>
                        </div>
                        <div className="col-md-6 chart">
                            <PieChart data={cardData} />
                        </div>
                    </div>
                    <div className="desc">{data.description}</div>
                </div>
            </Link>
        </div>
    )
};

export default Card;
