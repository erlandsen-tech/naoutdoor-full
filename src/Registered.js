
import { Link } from 'react-router-dom';
const Registered = () => {
    return (
        <div style={{ height: "50vh" }}>
            <div className="position-absolute bottom-50  start-50 translate-middle h-25  w-100 d-inline-block text-center " style={{ width: "120px", backgroundColor: "rgba(5, 5, 5, .7)" }}>
                <br/>
            <h1 className="mt-5 text-white">DU ER REGISTRERT!</h1>
            <h4 className="mb-2 text-white">Trykk på magen til pikachu for å gå tilbake</h4>
            </div>

            <div className="footer fixed-bottom">
            <Link to="/">
                <img src="/img/piksuccess.gif"></img>
            </Link>
            </div>
        </div>
    )
}

export default Registered;