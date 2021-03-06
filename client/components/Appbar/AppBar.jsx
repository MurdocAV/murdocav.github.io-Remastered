import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { red, indigo } from '@material-ui/core/colors'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Badge from '@material-ui/core/Badge';
import MouseOverPopover from './Popover';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: indigo,
  },
})

export default function ButtonAppBar(props) {
  const classes = useStyles()
  return (
    <div className='appBar'>
      <AppBar position="static" className='appBarStart' color='inherit'>
        <Toolbar className='toolBar'>
          <IconButton onClick={props.launchDrawer} edge="start" className={`${classes.menuButton} appBarText`} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={`${classes.title} `}>
              <MouseOverPopover></MouseOverPopover>
          </Typography>
          <Badge className={classes.margin} badgeContent={9001} max={9000} color="primary">
          <Link className="noDecoration" to={'/Documentation'} key={'Documentation'} replace={true}>
            <Button className='appBarText'>
                Documentation
            </Button>
          </Link>
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  )
}
