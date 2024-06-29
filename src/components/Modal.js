'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRouter } from 'next/navigation';
import { IM_Fell_French_Canon_SC } from 'next/font/google';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({doctor, isOpen, setIsOpen}) {
  const [open, setOpen] = React.useState(false);
  const [patientType, setPatientType] = React.useState('');
  const router = useRouter()
  const [payload, setPayload] = React.useState({
    patientType:'',
    patientName: '',
    patientAge: '',
    doctorId: doctor?.id,
    doctorName: doctor?.name,
    problemDetails: '',
  })


  React.useEffect(() => {
    setPayload({
        patientType:'',
        patientName: '',
        patientAge: '',
        doctorId: doctor.id,
        doctorName: doctor.name,
        problemDetails: '',
      })
  }, [])

  const handlePayload = (field, event) => {
    let obj = {...payload}
    obj[field] = event.target.value;
    setPayload(obj);
  }

  const handleChange = (event) => {
    setPatientType(event.target.value);
  };

  const submitAppiontment = (formData) => {
    let appiontment = localStorage.getItem("appointment")

    
    if(appiontment != null){
      let data = JSON.parse(appiontment)
      data.push({...formData})
      localStorage.setItem("appointment", JSON.stringify(data))
    }else{
      let data = []
      data.push({...formData})
      localStorage.setItem("appointment", JSON.stringify(data))
    }
    setIsOpen(false)
    router.push("/account")


  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        scroll='body'
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{backgroundColor:'#fcfcfc'}}>
            <DialogTitle style={{textAlign:'center', borderBlock:'1px solid #dddd', marginBottom:'20px'}}>{"Book Appointment"}</DialogTitle>
            <DialogContent>
            
                <div>
                    <TextField value={payload.patientName} onChange={e => handlePayload("patientName", e)} style={{margin:'10px 0px'}} fullWidth={true} id="outlined-basic" label="Patient Name" variant="outlined" />

                    <TextField value={payload.patientAge} onChange={e => handlePayload("patientAge", e)} style={{margin:'10px 0px'}} fullWidth={true} id="outlined-basic" label="Patient 
                    Age" variant="outlined" />

                    <FormControl fullWidth={true}>
                        <InputLabel id="demo-simple-select-helper-label">Select Patient Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={payload.patientType}
                        label="Select Patient Type"
                        onChange={e => handlePayload("patientType", e)}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"New Patient"}>New Patient</MenuItem>
                        <MenuItem value={"Old Patient"}>Old Patient</MenuItem>
                        <MenuItem value={"For Report"}>For Report</MenuItem>
                        </Select>
                    </FormControl>


                    <TextField disabled={true} value={doctor?.name} style={{margin:'10px 0px'}} fullWidth={true} id="outlined-basic" label="Doctor Name" variant="outlined" />

                    <TextField disabled={true} value={doctor?.chamber} style={{margin:'10px 0px'}} fullWidth={true} id="outlined-basic" label="Chamber" variant="outlined" />

                    <div>
                        <div>Patient's problem details</div>
                        <textarea value={payload.problemDeatils} onChange={e => handlePayload("problemDetails", e)} style={{border:'1px solid #ddd', minWidth:'100%', padding:'10px'}}/>
                    </div>


                    <div style={{
                        marginTop:'20px',
                        textAlign:'center',
                        fontSize:'23px',
                        backgroundColor:'green',
                        padding:'10px',
                        cursor:'pointer'
                    }} onClick={() => submitAppiontment(payload)}>Book Appointment</div>

                </div>

            </DialogContent>
            <DialogActions>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            </DialogActions>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
