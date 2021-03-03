import {React} from 'react';
import './Tipografia.css';
import {Image} from 'react-bootstrap/';
import letrasJost from '../components/img/letrasjost.png';
import letrasOpen from '../components/img/letrasOpen.png';


import 'semantic-ui-css/semantic.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
        
      maxWidth: 1000,
      margin: `${theme.spacing(15)}px auto`,
      padding: theme.spacing(2),
    },
  }));
  

export default function AutoGridNoWrap() {
    const classes = useStyles();

    return (
    
        <div className={classes.root}>

          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={15}>
              <Grid item xs zeroMinWidth>
                    
                    

                    <p className= "info">Nuestra tipografía</p>
                    <Image className="letrasJost"src= {letrasJost} rounded /> 
                    <Image className="letrasOpen"src= {letrasOpen} rounded /> 
                    
                    <p className ="porfi">Informacion de la fuente: Jost</p>

                    <p className ="oki">Diseñada por Heinrich Jost <br></br>
Jost es una tipografía de palo seco.<br></br> Esta fuente está optimizada para composiciones de impresión,  web y móviles, y tiene excelentes características de legibilidad.
<br></br>

Uso principal
Para títulos.Se recomienda usar en la primera línea de los títulos. </p>

            <p className="porfi"> Informacion de la fuente: Open Sans</p>
            <p className ="oki">Diseñada por Steve Matesson
Open Sans es una tipografía humanista
de palo seco. Esta fuente está optimizada
para composiciones de impresión, web y móviles, y tiene excelentes características de legibilidad.
<br></br>
Uso principal
Para títulos y textos. Se recomienda comprimir el interletraje y el interlineado, también usar negrilla en la primera palabra o en la primera línea de los títulos.</p>


                  
              </Grid>
            </Grid>
          </Paper>
          
        </div>
    );
    
}
  