import React from 'react';
import ButtonResponsive from './components/ButtonResponsive/ButtonResponsive';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';


const useStyles = makeStyles(theme => ({
    color: {
        color: 'red',
    },
    button: {
      margin: theme.spacing(10),
  },
}));


function App(props) {
  const classes = useStyles(props);
  function show(){
    alert('oiii')
  }  
  return (    
        <ButtonResponsive description="Salvar"   
        variant="contained"   className={classNames(classes.color, classes.button)}
        onClick={()=>show()}  />
  );
}

export default App;
