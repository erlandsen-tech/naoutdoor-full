import React, { Component } from 'react';
class Table extends Component {
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

        if (error) {
            return <div>Error in loading</div>
        } else if (!isLoaded) {
            return <div>Loading ...</div>
        } else {
            return (
                <div className="container-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Navn</th>
                                <th>Clean-Dato</th>
                                <th>Område</th>
                                <th>Hjemmegruppe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                attendees.map(attendee => (
                                    <tr key={attendee.id}>
                                        <td>{attendee.name}</td>
                                        <td>{attendee.cleanDate}</td>
                                        <td>{attendee.area}</td>
                                        <td>{attendee.homeGroup}</td>
                                    </tr>
                                ))
                            }</tbody>
                    </table>
                </div>
            );
        }

    }
}

export default Table;