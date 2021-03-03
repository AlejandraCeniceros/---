import {React} from 'react';
import './Color.css';
import {Image} from 'react-bootstrap/';
import paleta1 from '../components/img/Rec1.png';
import paleta2 from '../components/img/Rec2.png';
import paleta3 from '../components/img/Rec3.png';

import linea1 from '../components/img/linea1.png';
import linea2 from '../components/img/linea2.png';
import linea3 from '../components/img/linea3.png';

import gato from '../components/img/gato.PNG';
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
                    
                    

                    <p className= "info">Colores Institucionales</p>
                    <Image className="paleta1"src= {paleta1} rounded /> 
                    <Image className="paleta2"src= {paleta2} rounded />
                    <Image className="paleta3"src= {paleta3} rounded />
                    <Image className="gato"src= {gato} rounded />
                   
                  
                    <p className= "infos">La paleta de colores institucionales está compuesta por dos colores pertenecientes al círculo cromático de los tonos fríos que, al encontrarse dentro de una misma gama de colores, 
                    permite generar una correcta armonía.<br></br> <br></br>  El uso del color azul en el lógotipo, el cual está asociados al conocimiento, la confianza y la amabilidad, y el uso del color aquamarino, el cual significa
                    calma, ralajación y confianza, acentuan a la perfección la visión de la empresa, dejando claro que su visión es ofrecer servicios de alto valor añadido y confiables, en los cuales los profesionistas que 
                    forman parte de la empresa, podrá ayudarle al cliente en cualquier momento.</p>
                    <h5 classname="infos2">Los degradados tambien forman partde de la identidad visual. Forman una escala de colores adyacentes</h5>

                    <Image classname ="linea1" src= {linea1} />
                    <Image classname ="linea2" src= {linea2} />
                    <Image classname ="linea3" src= {linea3} />
              </Grid>
            </Grid>
          </Paper>
          
        </div>
    );
    
}
  