import React from 'react'
import { DataPoint, StatGrid} from "../styles/styledComponents";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
function About(){
    return(
        <div>
            <DataPoint>
            <p>All information is pulled from<a> <span href='https://covid19api.com/'>covid19api</span> </a>and<a> <span href="https://covidtracking.com/data/api">Covid Tracking Project</span></a></p>
            <p>Built using React, React-vis, and Material UI</p>
            <p>by Nelson D'Silva</p>
            </DataPoint>
            <StatGrid>
                <a href="http://github.com/nellyds" >
            <GitHubIcon fontSize="large" ></GitHubIcon></a>
            <a href="http://www.instagram.com/nellzymandias">
            <InstagramIcon fontSize="large" />
            </a>
</StatGrid>
        </div>
    )
}

export default About;