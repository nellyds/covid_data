import React from 'react'
import Number from './Number'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function StatCard(props){
return (
    <ScrollAnimation animateIn="fadeInLeft" >
    <Card class="statCard" variant="outlined">
      <CardContent>
        <Typography class="statField" color="textSecondary" gutterBottom>
          {props.name}
        </Typography>
      </CardContent>
      <Number field={props.name} number={props.number} />
      <CardActions>
    <CardContent>
        <p class="statAverage">7 day average</p>
        <Typography>
            {props.average}
            </Typography>
    </CardContent>
    
      </CardActions>
    </Card>
    </ScrollAnimation>
  );
}
export default StatCard;