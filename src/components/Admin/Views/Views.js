import React, { Component, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Progress, Badge } from 'reactstrap';

import "./Views.css";

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, RadialBarChart, RadialBar, PieChart, Pie, Sector, Cell
} from 'recharts';

const data = [
    {
        date: '2000-01', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        date: '2000-02', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        date: '2000-03', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        date: '2000-04', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        date: '2000-05', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        date: '2000-06', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        date: '2000-07', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        date: '2000-08', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        date: '2000-09', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        date: '2000-10', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        date: '2000-11', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        date: '2000-12', uv: 1890, pv: 4800, amt: 2181,
    },
];


const monthTickFormatter = (tick) => {
    const date = new Date(tick);

    return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const date = new Date(value);
    const month = date.getMonth();
    const quarterNo = Math.floor(month / 3) + 1;
    const isMidMonth = month % 3 === 1;

    if (month % 3 === 1) {
        return <text x={x + offset} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
    }

    const isLast = month === 11;

    if (month % 3 === 0 || isLast) {
        const pathX = Math.floor(isLast ? x + offset * 2 : x) + 0.5;

        return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
    }
    return null;
};

const dataAge = [
    {
        name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
    },
    {
        name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed',
    },
    {
        name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1',
    },
    {
        name: '35-39', uv: 28.22, pv: 9800, fill: '#82ca9d',
    },
    {
        name: '40-49', uv: 28.63, pv: 3908, fill: '#a4de6c',
    },
    {
        name: '50+', uv: 25.63, pv: 4800, fill: '#d0ed57',
    },
    {
        name: 'unknow', uv: 20.67, pv: 4800, fill: '#ffc658',
    },
];;

const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];

class Views extends Component {
    render() {
        return (
            <Fragment>
                <Row className="dash__new">
                    <Col xs="3" sm="3" md="3" lg="3" xl="3">
                        <div className="dash__detail info">
                            <div className="dash__name">
                                <i className="fas fa-comments"></i>
                                <div className="dash__number">
                                    <h3>160</h3>
                                    <h6>New Comments</h6>
                                </div>
                            </div>
                            <div className="dash__more">
                                <h6>View Details</h6>
                                <span><i className="fas fa-arrow-circle-right"></i></span>
                            </div>
                        </div>
                    </Col>

                    <Col xs="3" sm="3" md="3" lg="3" xl="3">
                        <div className="dash__detail danger">
                            <div className="dash__name">
                                <i className="fas fa-server"></i>
                                <div className="dash__number">
                                    <h3>28</h3>
                                    <h6>New Users</h6>
                                </div>
                            </div>
                            <div className="dash__more">
                                <h6>View Details</h6>
                                <span><i className="fas fa-arrow-circle-right"></i></span>
                            </div>
                        </div>
                    </Col>

                    <Col xs="3" sm="3" md="3" lg="3" xl="3">
                        <div className="dash__detail success">
                            <div className="dash__name">
                                <i className="fas fa-film"></i>
                                <div className="dash__number">
                                    <h3>35</h3>
                                    <h6>New Anime</h6>
                                </div>

                            </div>
                            <div className="dash__more">
                                <h6>View Details</h6>
                                <span><i className="fas fa-arrow-circle-right"></i></span>
                            </div>
                        </div>
                    </Col>

                    <Col xs="3" sm="3" md="3" lg="3" xl="3">
                        <div className="dash__detail warning">
                            <div className="dash__name">
                                <i className="fas fa-life-ring"></i>
                                <div className="dash__number">
                                    <h3>10</h3>
                                    <h6>New Live</h6>
                                </div>

                            </div>
                            <div className="dash__more">
                                <h6>View Details</h6>
                                <span><i className="fas fa-arrow-circle-right"></i></span>
                            </div>
                        </div>
                    </Col>

                </Row>

                <Row className="dash__charts">
                    <Col xs="9" sm="9" md="9" lg="9" xl="9">
                        <div className="barChart">
                            <BarChart
                                width={1270}
                                height={730}
                                data={data}
                                margin={{
                                    top: 50, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
                                <XAxis dataKey="date" axisLine={false} tickLine={false} interval={0} tick={renderQuarterTick} height={1} scale="band" xAxisId="quarter" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </div>
                    </Col>

                    <Col xs="3" sm="3" md="3" lg="3" xl="3">
                        <div className="radial__chart">
                            <RadialBarChart width={500} height={300} cx={200} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={dataAge}>
                                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
                            </RadialBarChart>
                        </div>

                        <div className="pie__chart">
                            <PieChart width={400} height={400}>
                                <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                                <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                            </PieChart>
                        </div>

                    </Col>

                </Row>

                <Row className="dash__views">

                    <Col xs="3" sm="3" md="3" lg="3" xl="3">
                        <div className="views__detail">
                            <h3>Daily Views</h3>
                            <div className="views__percent">
                                <Badge href="#" color="success">30% <i className="fas fa-level-up-alt"></i></Badge>
                                <h4>5000</h4>
                            </div>
                            <Progress animated color="success" value="30" />
                        </div>
                    </Col>

                    <Col xs="3" sm="3" md="3" lg="3" xl="3">
                        <div className="views__detail">
                            <h3>Weekly Views</h3>
                            <div className="views__percent">
                                <Badge href="#" color="danger">15% <i className="fas fa-level-down-alt"></i></Badge>
                                <h4>10000</h4>
                            </div>
                            <Progress animated color="danger" value="15" />
                        </div>
                    </Col>

                    <Col xs="3" sm="3" md="3" lg="3" xl="3">
                        <div className="views__detail">
                            <h3>Monthly Views</h3>
                            <div className="views__percent">
                                <Badge href="#" color="info">50% <i className="fas fa-level-up-alt"></i></Badge>
                                <h4>20000</h4>
                            </div>
                            <Progress animated color="info" value="50" />
                        </div>
                    </Col>

                    <Col xs="3" sm="3" md="3" lg="3" xl="3">
                        <div className="views__detail">
                            <h3>Yearly Views</h3>
                            <div className="views__percent">
                                <Badge href="#" color="warning">80% <i className="fas fa-level-up-alt"></i></Badge>
                                <h4>50000</h4>
                            </div>
                            <Progress animated color="warning" value="80" />
                        </div>
                    </Col>

                </Row>

            </Fragment>
        );
    }
};

export default Views;