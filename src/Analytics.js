import React, { useEffect, useState } from "react";

function Analytics() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://jo6pgm4yp9.execute-api.eu-north-1.amazonaws.com/main/listmembers")
            .then(response => response.json())
            .then(result => {
                setData(result);
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
                    <p>Id: {item.id}</p>
                </div>
            ))}
        </div>
    );
}

export default Analytics;
