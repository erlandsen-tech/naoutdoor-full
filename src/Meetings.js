import { Link } from "react-router-dom";

const Meetings = () => {
    return (
        <div className="container-fluid bg-dark text-light d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <div className="container py-4">
                <h1 className="text-center">Program Bike 2 Basic</h1>
                <p className="text-center">Sted: Trysil Hyttegrend</p>
                <div className="mt-4">
                    <h3>Freadg 13.09</h3>
                    <ul>
                        <li>20:00 Kveldsmøte</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3>Lørday 14.09</h3>
                    <ul>
                        <li>09:00 Morgenmøte</li>
                        <li>18:00 Grilling</li>
                        <li>20:00 Kveldsmøte med innleder</li>
                        <li>21:00 NA Outdoor mesterskap i kubb</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3>Søndag 15.09</h3>
                    <ul>
                        <li>11:00 Morgenmlte</li>
                    </ul>
                </div>
            </div>
            <div className="fixed-bottom footer">
                <Link to="/">
                    <img className="mx-auto d-block" src="/img/left-arrow.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
}

export default Meetings;
