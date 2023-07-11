import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslations } from "next-intl";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'min(80vw, 500px)',
    bgcolor: 'background.paper',
    boxShadow: 24,
  
};
  

interface MyConfirmModalProps {
    title: string,
    message: string,
    onDelete: any;
    onCancel: () => void;
    show: boolean,
    setShow: any,
}

export function MyConfirmModal(props: MyConfirmModalProps){
    const t = useTranslations();

    const handleOpen = () => props.setShow(true);
    const handleClose = () => props.setShow(false);
  
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={props.show}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={props.show}>
            <Box sx={style}>
              <Typography style={{color: 'white', padding: '10px 20px', backgroundColor: '#1976d2'}} id="transition-modal-title" variant="h6" component="h2">
                {props.title}
              </Typography>
              <Typography style={{color: 'black', padding: '10px 20px'}} id="transition-modal-description" sx={{ mt: 2 }}>
                {props.message}
              </Typography>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding: '10px 20px'}}>
                <Button color="error" variant="contained" onClick={()=> {props.onDelete();}}>{t("common.delete-btn")}</Button>
                <Button variant="outlined" onClick={()=> props.onCancel()}>{t("common.cancel-btn")}</Button>
              </div>

            </Box>
          </Fade>
        </Modal>
      </div>
    );

}