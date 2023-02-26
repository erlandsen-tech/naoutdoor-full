import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
const PamfHvem = () => {
    return (
        <div>
            <div className="pam" id="pam-hva">
                <div className="box-pam">
                    <h2>
                        Was bedeutet das Narcotics Anonymous Programm?
                    </h2>
                    
                    <p>
                        NA ist eine gemeinnützige Gemeinschaft von Männern und
                        Frauen, für die Drogen zum Hauptproblem geworden sind. Wir
                        sind Süchtige auf dem Weg der Genesung, die regelmäßig
                        zusammenkommen und sich gegenseitig helfen, clean zu bleiben.
                        Dies ist ein Programm völliger Abstinenz von allen Drogen.
                        Es gibt nur eine einzige Voraussetzung für die Zugehörigkeit:
                        das Verlangen mit Drogen aufzuhören. Wir empfehlen dir,
                        aufgeschlossen zu sein und Bereitschaft zu zeigen. Unser
                        Programm besteht aus bestimmten Grundsätzen, die so einfach
                        sind, dass wir ihnen in unserem täglichen Leben folgen können.
                        Das Wichtigste daran ist – sie funktionieren.<br /><br />

                        Mit NA sind keinerlei Verp flichtungen verbunden. Wir
                        sind unabhängig von anderen Organisationen, wir haben
                        keine Aufnahmegebühren oder Mitgliedsbeiträge, keine Verp
                        flichtungen zu unterschreiben, und niemandem müssen
                        Versprechen gemacht werden. Wir haben keine Verbindungen zu
                        Justizbehörden, politischen oder religiösen Gruppen und stehen
                        niemals unter Aufsicht. Mitmachen können alle, ohne Rücksicht
                        auf Alter, Rasse, sexuelle Identität, Glauben, Religion oder
                        fehlende Religionszugehörigkeit.<br /><br />

                        Uns interessiert weder, welche oder wie viel Drogen du
                        genommen hast, wie du dir deine Suchtmittel beschafft hast,
                        was du in der Vergangenheit getan hast, noch wie viel oder wie
                        wenig du besitzt. Uns interessiert einzig und allein, wie du dein
                        Problem angehen willst und wie wir dir dabei helfen können.
                        Die Neuankömmlinge sind die wichtigsten Personen bei jedem
                        Meeting, denn wir können nur bewahren, was wir haben, indem
                        wir es weitergeben. Aus unseren Gruppenerfahrungen haben wir
                        gelernt, dass diejenigen, die regelmäßig zu unseren Meetings
                        kommen, clean bleiben.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div className="row footer fixed-bottom mb-3">
                <div className="col">
                    <Link to="/pamflets/hvem">
                        <img className="mx-auto d-block mt-3" src="../img/left-arrow-black.png" id="back" alt="Hvem" />
                    </Link>
                </div>
                <div className="col text-center">
                    <Link to="/pamflets">
                        <FontAwesomeIcon size="4x" color="black" icon={faHome} alt="Innledning"/>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/pamflets/hvorfor">
                        <img className="mx-auto d-block mt-3" src="../img/right-arrow-black.png" id="back" alt="Hvorfor" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PamfHvem;