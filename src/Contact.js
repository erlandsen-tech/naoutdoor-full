import { Link } from 'react-router-dom';
import Header from './Header';
const Contact = () => {
    return (
        <div className="container">
            <Header />
            <div className="kontakt-text footer fixed-bottom mb-5">
                <div className="kon-box-1 mb-5">
                    <h3>
                        Google your question first!<br />
                        Then ask your sponsor!<br />
                        If you haven't the answer.
                        </h3>
                </div>
                <div className="kon-box-2 mb-5">
                    <h3>
                        <br />
                        <strong><a href="mailto:naoutdoor@outlook.com">Contact us on mail</a></strong>
                    </h3>
                </div>
                <Link to="/">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="img/left-arrow.png" id="back" alt="Back" />
                </Link>

            </div>
        </div>
    );
}
export default Contact;