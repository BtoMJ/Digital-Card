import React from 'react';

import dependencia from '../../assets/ICN_DEPENDENCIA.png';
import telefono from '../../assets/telefono.png';
import mail from '../../assets/mensaje.png';
import identidad from '../../assets/identidad.png';
import adjunto from '../../assets/adjunto.png';
import ubicacion from '../../assets/ubicacion.png';
import logoMunicipio from '../../assets/ICN_LOGO_MPO.png';
import logoUnidos from '../../assets/ICN-UNIDOS.png';
import logoGobierna from '../../assets/ICN_GOBIERNA.png';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import './Icons.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85vw',
    height: '60vh',
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '10px',
    boxShadow: '0 5px 10px rgb(0,0,0,.5)',
    p: 4,
    textAlign: 'center',
    "@media (max-width: 399px) and (max-height: 699px)": {
        fontSize: 14,
        height: '90vh',
      },
  };

const styleForm = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    width: '70vw',
    height: '65vh',
    textAlign: 'center',
    
   
  };

export const Icons = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className="iconsContainer">
            <div className="dependenciaIMG">
                <img src={dependencia} alt="dependencia" />
            </div>
            <div className="dependenciaTitular">
                <h2>Ing. Carlos Osnaya Betancourt</h2>
                <h4>DIRECTOR OBRAS PUBLICAS</h4>
            </div>
            <div className="icons">
                <a href="tel:+524761037311">
                    <img className="iconTel" src={telefono} alt="Telefono"  />
                </a>
                <img src={mail} alt="Mail"  onClick={handleOpen}/>
                <img src={identidad} alt="Perfil"  />
                <img src={adjunto} alt="Ajuntos"  />
                <img src={ubicacion} alt="Ubicacion"  />
            </div>
            <div className="logosMunicipales">
                <img src={logoMunicipio} alt="logo Municipal" />
                <img src={logoUnidos} alt="logo Unidos" />
                <img src={logoGobierna} alt="logo Gobierna" />
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Ponte en contacto conmigo
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 14 }}>
                        Para nosotros es importante tu opinión, déjanos tus datos y 
                        nos pondremos en contacto a la brevedad contigo.
                    </Typography>
                    <Box sx={styleForm}>
                        <form>
                            <input className="input" type="text" placeholder="Nombre"/>
                            <input className="input" type="mail" placeholder="E-mail"/>
                            <input className="input" type="text" placeholder="Teléfono" maxlength="10"/>
                            <input className="input" type="text" placeholder="Asunto"/>
                            <textarea className="textArea" placeholder="Mensaje" />
                            <button type='submit' className="Submit">Enviar</button>
                        </form>
                    </Box>
                </Box>
            </Modal>

        </div>
    )
}