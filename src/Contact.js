import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div class="kontakt-text footer fixed-bottom mb-5">
            <div class="kon-box-1 mb-5">
                <h3>
                    Google det du lurer på først!<br />
                            Spørr sponsorn i andre hand!<br />
                            Om du ikke fått svar.
                        </h3>
            </div>
            <div class="kon-box-2 mb-5">
                <h3>
                    <br />
                    <strong><a href="mailto:naoutdoor@outlook.com">Kontakt oss på mail</a></strong>
                </h3>
            </div>
            <Link to="/">
                <img class="mx-auto d-block footer fixed-bottom mb-3" src="img/left-arrow.png" id="back" alt="Back" />
            </Link>

        </div>
    );
}
export default Contact;