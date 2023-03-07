import React from 'react'
import {
    Link
} from "react-router-dom";
function Header() {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth,
    })
    React.useEffect(() => {
        function handleResize() {
            console.log(window.location.pathname);
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })

        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })
    if (dimensions.width < dimensions.height && !(window.location.pathname).match('/pamflets/')) {
        return (
            <div className="logotext-img" id="header">
                <Link to="/">
                    <img src="/img/logotext.png" className="img-fluid mt-20" alt="Ski & Recovery" />
                </Link>
            </div>
        )
    }
    return null;
}
export default Header;