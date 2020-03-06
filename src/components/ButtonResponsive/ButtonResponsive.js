import React from 'react';
import { Button, Hidden, Tooltip, Icon, Fab } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useStyles from './styles';



function ButtonResponsive(props) {
  const classes = useStyles(props);
  const { className, description, icon, visibled = true,  ...other } = props; 
  return (
    <>
      {visibled && (
        <>
          <Hidden only={['sm', 'md', 'lg', 'xl']} >
            <Tooltip title={description} >
              <Fab size="small" className={classes.button}>
                <Icon>{icon}</Icon>
              </Fab>
            </Tooltip>
          </Hidden>
          <Hidden only="xs">
            <Button variant="outlined" className={classNames(classes.button, className)} {...other} >
              {description}
            </Button>
          </Hidden>
        </>
      )}
    </>
  )
}

ButtonResponsive.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default ButtonResponsive;