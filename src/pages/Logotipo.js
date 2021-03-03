import {React} from 'react';
import './Logotipo.css';
import {Image} from 'react-bootstrap/';
import linea1 from '../components/img/linea1.png';
import linea2 from '../components/img/linea2.png';
import linea3 from '../components/img/linea3.png';

import gato from '../components/img/gato.PNG';
import 'semantic-ui-css/semantic.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import icono from './icono.png';




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
            <Grid background-color="black" container wrap="nowrap" spacing={15}>
              <Grid item xs zeroMinWidth>
                    
                    <p className= "info">Logotipo</p>
                    
                    <Image className="icono"src= {icono} rounded />
                    
                  
                    <p className= "infos">El logotipo como representación gráfica de la marca esta formado por la construcción tipográfica de los carácteres que componen las palabras “Inno” y “Soluciones”, y que busca transmitir y proyectar las características principales de la empresa que es su integridad y el trabajo en equipo.<br></br> <br></br> Este logotipo es una clasificación de imagotipo ya que contiene una imagen representativa y por otro lado esta el nombre de la organización, el cual es importante señalar y recordar para generar mayor posicionaminto dentro del campo de la industria tecnológica.</p>

                   
              </Grid>
            </Grid>
          </Paper>
          
        </div>
    );
    
}
  