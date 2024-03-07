import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


import 'react18-json-view/src/style.css'
import axios from 'axios';

const cardStyle = {margin: "0"};

const textStyle = {fontSize: "1.2rem", fontWeight: "bold"};


function Analytics() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Edit this as per your needs
    useEffect(() => {
        axios.get("https://q6dbqs0q30.execute-api.eu-north-1.amazonaws.com/listMembers")
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <Row xs={1} md={2} lg={4} className="g-1">
                <Col>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title as={"h5"}>Just for Today</Card.Title>
                            <Card.Text style={textStyle}>{data.total_days} days</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title as={"h5"}>Miracles</Card.Title>
                            <Card.Text style={textStyle}>{data.members_total} addicts</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>Average Recovery</Card.Title>
                            <Card.Text style={textStyle}>{(data.average_days / 365.3).toFixed(2)} years</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title as={"h5"}>Countries Represented</Card.Title>
                            <ListGroup variant="flush">
                                {
                                    Object.keys(data.country_stats).map((key, i) => (
                                        <ListGroup.Item key={i}>{key}</ListGroup.Item>
                                    ))
                                }
                            </ListGroup> </Card.Body>
                    </Card>
                </Col>


            </Row>
        </div>
    );
}

export default Analytics;
