import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div id="landing">
            <div id="landing-img">
                <div class="container-1">
                    <div class="logotext-img">
                        <img src="img/logotext.png" class="img-fluid" alt="Ski & Recovery"/>
                    </div>    
                </div>  
                <div class="kontakt-text">
                    <div class="kon-box-1">
                        <h3>
                            Google det du lurer på først!<br/>
                            Spørr sponsorn i andre hand!<br/>
                            Om du ikke fått svar. 
                        </h3>
                    </div>    
                    <div class="kon-box-2">
                        <h3>
                            <br/>
                            <strong><a href="mailto:naoutdoor@outlook.com">Kontakt oss på mail</a></strong>
                        </h3>  
                    </div> 
                    
                </div>
            </div>
        </div>    
        );
}
export default Contact;