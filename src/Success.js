import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


const GifPage = ({history}) => {
    const navigate = useNavigate();
    const gifDuration = 3000; // Duration of your GIF in milliseconds

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, gifDuration);

        // Cleanup function to clear the timeout when the component unmounts
        return () => clearTimeout(timer);
    });

    return (
        <div style={{position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden'}}>
            <img src="/img/successki.gif" alt="Success!"
                 style={{position: 'absolute', height: '100%', width: '100%', objectFit: 'cover'}}/>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                fontSize: '2em',
                padding: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                border: '2px solid #fff',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.5)',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                You are registered! <br></br>
                Go out and ski!
            </div>
        </div>
    )
        ;
};

export default GifPage;