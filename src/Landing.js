import React from 'react'
import {Link} from "react-router-dom";
import './Landing.css';

function Landing() {
    return (
        <div>
            <div className="landing-page">
            <div className="sidebars">
                <header>CureCheck</header>
                <ul>
                    <li><a href="https://www.unicef.org/lac/en/impact-covid-19-mental-health-adolescents-and-youth"><i className="fa fa-globe"></i>News</a></li>
                    <li><a href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders">
                    <i className="fa fa-viruses"></i>Types</a></li>
                    <li><a href="https://www.mhanational.org/31-tips-boost-your-mental-health"><i className="fa fa-hands-wash"></i>Healthcare Tips</a></li>                    
                    <li><a href="https://www.nami.org/mhstats"><i className="fa fa-database"></i>Statistics</a></li>
                </ul>
            </div>
            <div className="navbar">
                <ul>
                <Link to={`/login`}>
                    <li><a href="#">Login</a></li>
                </Link>
                </ul>
            </div>
            <div className="contentt">
                <h1 className="zoom">CureCheck</h1>
                <p><br/>
                CureCheck is an app to help you meet and greet and talk to people about all the problems that you think is affecting your mental health. 
Login and meet people all over the world like you and doctors whose assistance might even help you. 
<br/>
WE'RE WITH YOU WITH EVERY STEP OF YOUR JOURNEY!
                </p>
                <h1 className="zoom">Our Goals/Objective</h1>
                <p><br/>Our goal is to prevent everyone from not facing things that young children, adults and even the senior citizens face which might ruin the rest of their life.
In tough times and at a time like the recent global pandemic where everyone had a major drawback in their lives, we believe CureCheck will help everyone out there who are in need.
</p>
                    
            </div>
        </div>
    
        </div>
    )
}

export default Landing
