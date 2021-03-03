import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './Tipografia.css';
import {Image} from 'react-bootstrap/';
import familia from '../components/img/familia.jpg';

import 'semantic-ui-css/semantic.min.css';

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

const message = `Roberto Villanueva, `;

 

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>

            <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={15}>
                          <Grid item xs zeroMinWidth>
                                
                                

                                <p className= "info">Familia Inno Soluciones</p>

                                <Image className="familia" src= {familia} rounded /> 
                                

                                <p className ="oki" >Somos una empresa líder en soluciones tecnológicas orientadas al cliente, ayudando a que sus procesos sean más eficientes,
                                 económicos, de clase mundial y con la mejor tecnología disponible <br></br><br></br><br></br>Más que empresa nos consideramos una familia, 
                                 una comunidad unida que tiene como misión ofrecer servicios de alto valor añadido y confiables, en los que estamos la entera 
                                 disposición del cliente para ayudarle en todo momento. </p>


                                 <p className= "info">Empleados del mes de marzo</p>


                                 <Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={5}>
                                  <Grid item>
                                    <Avatar ralt="Remy Sharp" src="./dude.jpg" />
                                     </Grid>
                                  <Grid item xs zeroMinWidth>
                                    <Typography noWrap>{message} <p className= "oki">Reconocemos su trabajo a lo largo de su estadia en la compañia, <br></br> por su gran desarrollo laboral dentro de la empresa, y su profesionalismo con los clientes</p>
                                 </Typography>
                                  </Grid>
                                </Grid>
                              </Paper><Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={5}>
                                  <Grid item>
                                    <Avatar ralt="Remy Sharp" src="./dude.jpg" />
                                     </Grid>
                                  <Grid item xs zeroMinWidth>
                                    <Typography noWrap>{message} <p className= "oki">Reconocemos su trabajo a lo largo de su estadia en la compañia, <br></br> por su gran desarrollo laboral dentro de la empresa, y su profesionalismo con los clientes</p>
                                 </Typography>
                                  </Grid>
                                </Grid>
                              </Paper><Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={5}>
                                  <Grid item>
                                    <Avatar ralt="Remy Sharp" src="./dude.jpg" />
                                     </Grid>
                                  <Grid item xs zeroMinWidth>
                                    <Typography noWrap>{message} <p className= "oki">Reconocemos su trabajo a lo largo de su estadia en la compañia, <br></br> por su gran desarrollo laboral dentro de la empresa, y su profesionalismo con los clientes</p>
                                 </Typography>
                                  </Grid>
                                </Grid>
                              </Paper><Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={5}>
                                  <Grid item>
                                    <Avatar ralt="Remy Sharp" src="./dude.jpg" />
                                     </Grid>
                                  <Grid item xs zeroMinWidth>
                                    <Typography noWrap>{message} <p className= "oki">Reconocemos su trabajo a lo largo de su estadia en la compañia, <br></br> por su gran desarrollo laboral dentro de la empresa, y su profesionalismo con los clientes</p>
                                 </Typography>
                                  </Grid>
                                </Grid>
                              </Paper><Paper className={classes.paper}>
                                <Grid container wrap="nowrap" spacing={5}>
                                  <Grid item>
                                    <Avatar ralt="Remy Sharp" src="./dude.jpg" />
                                     </Grid>
                                  <Grid item xs zeroMinWidth>
                                    <Typography noWrap>{message} <p className= "oki">Reconocemos su trabajo a lo largo de su estadia en la compañia, <br></br> por su gran desarrollo laboral dentro de la empresa, y su profesionalismo con los clientes</p>
                                 </Typography>
                                  </Grid>
                                </Grid>
                              </Paper>

                  
              </Grid>
            </Grid>
          </Paper>
          
        </div>
    );
    
}












