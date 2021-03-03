import {React} from 'react';
import './Home.css';
import {Image} from 'react-bootstrap/'
import icono from './icono.png';
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
                    
                    <Image className="icono"src= {icono} rounded />

                    <p className= "info">
                    Manual de identidad
                    </p>

                    <p className= "infos">El manual describe los signos gráficos escogidos por la compañía para mostrar su imagen así como todas sus posibles variaciones: forma, color, tamaño, etc. En el mismo, se explica su forma, oportunidad y lugar de utilización mediante la inclusión de ejemplos gráficos. Se muestran también las normas prohibitivas de sus aplicaciones. También se incluyen los colores y las tipografías corporativas, incluyendo cada familia tipográfica y los tamaños admitidos así como su empleo en cursiva y negrita.</p>


              </Grid>
            </Grid>
          </Paper>
          
        </div>
    );
    
}
  