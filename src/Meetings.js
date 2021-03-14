import {
    Link
} from "react-router-dom";
const Meetings = () => {
    return (
        <div className="container-fluid bg-dark px-0">
                <div className="container col">
                    <img className="img-fluid w-100" src="img/program.png" alt="Programmet" />
            </div>
                <div className="fixed-bottom footer">
                    <Link to="/">
                        <img className="mx-auto d-block" src="img/left-arrow.png" id="back" alt="Back" />
                    </Link>
            </div>
        </div>
    );
}
export default Meetings;