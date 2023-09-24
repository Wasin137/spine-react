import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Result = (props)=>{
  const {data, onClose} = props
  
  const [open, setOpen] = React.useState(true);

  const handleClose = () =>{
    setOpen(false)
    onClose()
  }
// calculation
  const hn = data.hn
  const weight = data.weight
  const height = data.height
  const hct = data.hct
  const asa = data.asa
  const lamineclevel = data.lamineclevel
  const tlif = data.tlif
  const sacral = data.sacral

  const score = (weight, height, hct, asa, lamineclevel, tlif, sacral) =>{
    let score = 0
    let bmi = weight/((height/100)**2)
    if (bmi > 25) {
      score = score + 2
    }
    if (asa > 2) {
      score = score + 1
    }
    if (hct > 38){
      score = score - 3.5
    }
    if (lamineclevel === 3){
      score = score + 10
    } else if(lamineclevel === 2){
      score = score + 4
    }
    if (tlif === 2){
      score = score + 3
    }
    if (sacral === 'yes'){
      score = score + 3
    }
    return score
  }

  const sum_score = score(weight, height, hct, asa, lamineclevel, tlif, sacral)

  return (
    <div className='container'>
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          HN :{hn}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {sum_score <=6 ? (
            <div>
              <p className='fs-5'>Suggest Crossmatching <span className='text-danger fs-4 fw-bold'>1</span> unit</p>
              <p className='fst-italic'>Calculated Score = <span className='text-primarty fw-bold'>{sum_score}</span></p>
            </div>
          ) : (
            <div>
              <p className='fs-5'>Suggest Crossmatching <span className='text-danger fs-4 fw-bold'>2</span> unit</p>
              <p className='fst-italic'>Calculated Score = <span className='text-primarty fw-bold'>{sum_score}</span></p>
          </div>
          )}
          <div className='row'>
            <p className='fs-6 fst-italic text-center text-decoration-underline'>Patient's Detail (HN: <span className='fw-bold'>{hn}</span>)</p>
            <div className='row'>
              <div className='col-12 col-sm-6'>
                <p>BMI: <span className='fw-bold'>{(weight/((height/100)**2)).toFixed(2)}</span> kg/m²</p>
                <p>Pre-Op Hct: <span className='fw-bold'>{hct}</span>%</p>
                <p>ASA Classification: <span className='fw-bold'>{asa}</span></p>
              </div>
              <div className='col-12 col-sm-6'>
                <p>Level of Laminectomy: <span className='fw-bold'>{lamineclevel >= 3 ? "more than 3": lamineclevel}</span></p>
                <p>TLIF Level: <span className='fw-bold'>{tlif >= 2 ? "more than 2": tlif}</span></p>
                <p>Sacral inclusion: <span className='fw-bold'>{sacral}</span></p>
              </div>
            </div>
          </div>
          <p className='text-center text-danger'>*if user need more than suggestion advice type-screening PRC</p>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default Result