import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const Pamf12Trad = () => {
    return (
        <div>

            <div className="pam" id="pam-trad">
                <div className="box-pam">
                    
                    <h2>
                        The Twelve Traditions of NA
                    </h2>

                    <p>

                        We keep what we have only with vigilance, and just as
                        freedom for the individual comes from the Twelve Steps, so
                        freedom for the group springs from our Traditions.<br />

                        As long as the ties that bind us together are stronger than
                        those that would tear us apart, all will be well.<br /><br />

                        1. Our common welfare should come first; personal recovery depends on NA unity.<br /><br />

                        2. For our group purpose there is but one ultimate authority— a loving God as He may express Himself in our group conscience. Our leaders are but trusted servants; they do not govern.<br /><br />
                        
                        3. The only requirement for membership is a desire to stop using.<br /><br />

                        4. Each group should be autonomous except in matters affecting other groups or NA as a whole.<br /><br />

                        5. Each group has but one primary purpose—to carry the message to the addict who still suffers.<br /><br />

                        6. An NA group ought never endorse, finance, or lend the NA name to any related facility or outside enterprise, lest problems of money, property, or prestige divert us from our primary purpose.<br /><br />

                        7. Every NA group ought to be fully self-supporting, declining outside contributions.<br /><br />

                        8. Narcotics Anonymous should remain forever nonprofessional, but our service centers may employ special workers.<br /><br />

                        9. NA, as such, ought never be organized, but we may create service boards or committees directly responsible to those they serve.<br /><br />

                        10. Narcotics Anonymous has no opinion on outside issues; hence the NA name ought never be drawn into public controversy.<br /><br />

                        11. Our public relations policy is based on attraction rather than promotion; we need always maintain personal anonymity at the level of press, radio, and films.<br /><br />

                        12. Anonymity is the spiritual foundation of all our Traditions, ever reminding us to place principles before personalities.<br /><br />

                        Understanding these Traditions comes slowly over a period
                        of time. We pick up information as we talk to members and 
                        visit various groups. It usually isn’t until we get involved 
                        with service that someone points out that “personal recovery 
                        depends on NA unity,” and that unity depends on how well we 
                        follow our Traditions. The Twelve Traditions of NA are not 
                        negotiable. They are the guidelines that keep our Fellowship alive and free.<br /><br />

                        By following these guidelines in our dealings with others,
                        and society at large, we avoid many problems. That is not to
                        say that our Traditions eliminate all problems. We still have to
                        face difficulties as they arise: communication problems,
                        differences of opinion, internal controversies, and troubles
                        with individuals and groups outside the Fellowship. However,
                        when we apply these principles, we avoid some of the pitfalls.<br /><br />

                        Many of our problems are like those that our predecessors
                        had to face. Their hard won experience gave birth to the
                        Traditions, and our own experience has shown that these
                        principles are just as valid today as they were when these
                        Traditions were formulated. Our Traditions protect us from the
                        internal and external forces that could destroy us. They are
                        truly the ties that bind us together. It is only through
                        understanding and application that they work.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div className="row footer fixed-bottom mb-3">
                <div className="col">
                    <Link to="/pamflets/hvordan">
                        <img className="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Hvordan det virker" />
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning" />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/pamflets/bareforidag">
                        <img className="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Bare for i dag" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Pamf12Trad;