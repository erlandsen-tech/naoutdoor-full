import React from 'react'
import {
    Link,
    useLocation
} from "react-router-dom";
function Header() {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth,
    })
    const location = useLocation()
    const excludedPaths = ['/how', '/jft', '/trad', '/wdr', '/what', '/who', '/why', '/manspe', '/manjft', '/meetings', '/slope'];
    React.useEffect(() => {
        function handleResize() {
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
    if (dimensions.width < dimensions.height && !excludedPaths.some(path => location.pathname.toLowerCase().includes(path)))
    {
        return (
                <Link to="/">
                    <img src="/img/logotext.png" className="img-fluid mt-2" alt="Ski & Recovery" />
                </Link>
        )
    }
    return null;
}
export default Header;