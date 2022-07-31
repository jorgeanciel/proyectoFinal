import React from "react";
import { Link,Outlet } from "react-router-dom";
import { Container, Grid} from "@mui/material";
import "./Header.css";


const Inicio=()=>{
    return(
        <div>
            <Container >
               <Grid container alignItems="center" className="nav">
            <Grid item md={1} xs={6} sx={{display:"flex", justifyContent:"center"}}>
                    <Link to="/">
                       <img className="img-logo" src="./img/ghost.jpg"/>
                    </Link>
                    </Grid>
                    
                    <Grid item md={2}>

                    </Grid>
                    <Grid item md={5} xs={12}>
                        <ul className="ul-header">
                         <li>
                            <Link className="titulos" to="#">Inicio</Link>
                         </li>
                         <li>
                            <Link className="titulos" to="#">Nosotros</Link>
                         </li>
                         <li>
                            <Link className="titulos" to="#">Servicios</Link>
                         </li>
                         <li>
                            <Link className="titulos" to="#">Contacto</Link>
                         </li>
                        </ul>
                    </Grid>
                    <Grid item md={3}>

                    
                    </Grid>
                    </Grid>
            </Container>
         </div>
    )
};
export default Inicio;