import React, {useEffect, useState} from "react";
import JsonView from 'react18-json-view'
import {Pie} from 'react-chartjs-2'
import { ArcElement, Chart } from 'chart.js';
import 'react18-json-view/src/style.css'
import axios from 'axios';

Chart.register(ArcElement);

function Analytics() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Edit this as per your needs.
    const COLORS = [
        '#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#2FDE00', '#40E0D0', '#3C40C6', '#0FBCF9',
        '#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#6495ED', '#CCCCFF',
        '#1C2833', '#8395A7', '#BDC581', '#05C46B', '#ffa6b7', '#6B4226', '#0652DD', '#9980FA'
    ];
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

    // Create separate arrays for labels and data
    const countryNames = Object.keys(data.country_stats);
    const countryData = Object.values(data.country_stats).map(value => value.total_days);

    const pieData = {
        labels: countryNames,
        datasets: [
            {
                data: countryData,
                backgroundColor: COLORS,
                hoverBackgroundColor: COLORS
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                callbacks: {
                    // Return first character of the country name
                    title: (context) => {
                        const index = context[0].dataIndex;
                        return countryNames[index].charAt(0);
                    }
                }
            }
        }
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <Pie data={pieData} options={options} />

            <JsonView src={{
                TotalDays: data.total_days,
                MembersTotal: data.members_total,
                AverageDays: data.average_days
            }}/>
        </div>
    );
}
export default Analytics;
