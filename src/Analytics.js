import React, { useEffect, useState } from "react";
import axios from 'axios';

function Analytics() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get("https://q6dbqs0q30.execute-api.eu-north-1.amazonaws.com/listMembers"
            )
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
        <div>
            <h1>Hello, React!</h1>
            {data.map((item, index) => (
                <div key={index}>
                    <p>HomeGroup: {item.HomeGroup}</p>
                    <p>DaysSinceClean: {item.DaysSinceClean}</p>
                    <p>Country: {item.Country}</p>
                </div>
            ))}
        </div>
    );
}

export default Analytics;
