import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const HowEng = () => {
    return (
        <div>
            <div className="pam" id="pam-hvordan">
                <div className="box-pam">
                    <h2>
                        How It Works
                    </h2>
                    <p>
                        If you want what we have to offer, and are willing to make the
                        effort to get it, then you are ready to take certain steps. These
                        are the principles that made our recovery possible:<br /><br />

                        1. We admitted that we were powerless over our addiction, that our lives had become unmanageable.<br /><br />
                        
                        2. We came to believe that a Power greater than ourselves could restore us to sanity.<br /><br />
                        
                        3. We made a decision to turn our will and our lives over to the care of God as we understood Him.<br /><br />
                        
                        4. We made a searching and fearless moral inventory of ourselves.<br /><br />
                        
                        5. We admitted to God, to ourselves, and to another human being the exact nature of our wrongs.<br /><br />
                        
                        6. We were entirely ready to have God remove all these defects of character.<br /><br />
                        
                        7. We humbly asked Him to remove our shortcomings.<br /><br />
                        
                        8. We made a list of all persons we had harmed and became willing to make amends to them all.<br /><br />
                        
                        9. We made direct amends to such people wherever possible, except when to do so would injure them or others.<br /><br />
                        
                        10. We continued to take personal inventory and when we were wrong promptly admitted it.<br /><br />

                        11. We sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His will for us and the power to carry that out.<br /><br />

                        12. Having had a spiritual awakening as a result of these steps, we tried to carry this message to addicts, and to practice these principles in all our affairs.<br /><br />

                        This sounds like a big order, and we can’t do it all at once. 
                        We didn’t become addicted in one day, so remember—easy does it.<br /><br />
                        
                        There is one thing more than anything else that will defeat
                        us in our recovery; this is an attitude of indifference or
                        intolerance toward spiritual principles. Three of these that are
                        indispensable are honesty, open-mindedness, and willingness.
                        With these we are well on our way.<br /><br />
                        
                        We feel that our approach to the disease of addiction is
                        completely realistic, for the therapeutic value of one addict
                        helping another is without parallel. We feel that our way is
                        practical, for one addict can best understand and help another
                        addict. We believe that the sooner we face our problems within
                        our society, in everyday living, just that much faster do we
                        become acceptable, responsible, and productive members
                        of that society.<br /><br />
                        
                        The only way to keep from returning to active addiction is
                        not to take that first drug. If you are like us you know that
                        one is too many and a thousand never enough. We put great
                        emphasis on this, for we know that when we use drugs in any
                        form, or substitute one for another, we release our addiction
                        all over again.<br /><br />
                        
                        Thinking of alcohol as different from other drugs has caused
                        a great many addicts to relapse. Before we came to NA, many
                        of us viewed alcohol separately, but we cannot afford to be
                        confused about this. Alcohol is a drug. We are people with the
                        disease of addiction who must abstain from all drugs in order
                        to recover.<br s/><br /><br />
                    
                    </p>
                </div>
            </div>
            <div>
                <Link to="/English/PamEng">
                    <img className="mx-auto d-block footer fixed-bottom mb-3" src="/img/left-arrow-black.png" id="back" alt="Back" />
                </Link>
            </div>
        </div>
    );
};
export default HowEng;