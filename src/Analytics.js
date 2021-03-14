import { Link } from 'react-router-dom';
import { React, Component } from 'react';
import Header from './Header';
import moment from 'moment';

function calculateTimeInDays(date){
    const daysSince = moment().diff(moment(date, "YYYY-MM-DD"), 'days');
    return daysSince;
}
function calculateTimeInDaysForArrayOfDates(dates) {
    var days = 0;
    for(let date of dates) {
        if(date.cleanDate){
        days += calculateTimeInDays(date.cleanDate);
        }
    }
    return days;
}

function getYearsDays(days){
    const years = Math.floor((days / 365.3));
    const daysLeft = Math.floor((days%365));
    return [years,daysLeft];
}

function calculateAverageTime(attendeeArray) {
    const days = calculateTimeInDaysForArrayOfDates(attendeeArray);
    const average = days / attendeeArray.length;
    return average;
}

class Analytics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            attendees: []
        };
    }
    componentDidMount() {
        fetch(`${window.location.origin}/attendees`)
        //fetch(`http://localhost:5000/attendees`)
            .then(response => response.json())
            .then(
                // handle the result
                (result) => {
                    this.setState({
                        isLoaded: true,
                        attendees: result.resources
                    });
                },

                // Handle error 
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            )
    }
    render() {
        const { error, isLoaded, attendees } = this.state;
        const days = calculateTimeInDaysForArrayOfDates(attendees);
        const total = getYearsDays(days);
        const yearsDays = getYearsDays(calculateAverageTime(attendees));
        return (
            <>
                <Header />
                <div className="container-fluid bg-dark mt-4 justify-content-center text-center">
                    <br/>
                    <h3 style={{color: "royalblue"}}>{attendees.length} registrerte</h3>
                    <br/>
                    <h3 style={{color: "royalblue"}}>{total[0]} år og {total[1]} dager rusfri totalt</h3>
                    <br/>
                    <h4 style={{color: "royalblue"}}> {yearsDays[0]} år og {yearsDays[1]} dager rusfri per deltager</h4>
                    <br/>
                    </div>
                    <div>¨
                    <Link to="/">
                        <img className="mx-auto d-block footer fixed-bottom mb-3" src="img/left-arrow.png" id="back" alt="Back" />
                    </Link>
                </div>
            </>
        )
    }
}

export default Analytics;