import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '2px 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginTop: 12,
    paddingTop: 15
  },
});

export default function HireCard(props) {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={`classes.card cardMUI hire`}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hiring
        </Typography>
        <Typography variant="h5" component="h2">
          {props.cardText}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        </Typography>
        <Typography variant="body2" component="p">
          All the best with your adventures.
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}