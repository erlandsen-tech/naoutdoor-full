import React from "react";
import {MemberCreateForm} from "./ui-components";
import {Link} from "react-router-dom";
import {ThemeProvider, createTheme} from "@aws-amplify/ui-react";
import {studioTheme} from './ui-components';

const updatedTheme = createTheme({
    // Extend the theme to update the button color
    name: "my-theme-updates",
    tokens: {
        components: {
            button: {
                primary: {
                    backgroundColor: {
                        value: "#006400"
                    },
                },
            }
        },
        colors: {
            font: {
                primary: {
                    value: "royalblue"
                }
            }
        }
    },
}, studioTheme)


const Registration = () => {
    return (
        <ThemeProvider theme={updatedTheme}>
            <div className="container registration-page">
                <div className="container-fluid fixed-bottom" style={{backgroundColor: 'rgba(5, 5, 5, 0.5)'}}>
                    <MemberCreateForm/>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Registration;