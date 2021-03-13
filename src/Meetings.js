import {
    Link
} from "react-router-dom";
import { mapsSelector } from './js/main';
const Meetings = () => {
    return (
        <div>
            <h1>
                PROGRAMMET
            </h1>
            <Link to="/">
                <img class="mx-auto d-block footer fixed-bottom mb-3" src="img/left-arrow.png" id="back" alt="Back" />
            </Link>
        </div>
    );
}
export default Meetings;