'use client'

import { useEffect, useState } from 'react'
import {doctorsInformation} from '../../../data/doctorsInformation'
import Header from '../../../components/Header'
import style1 from '../../../components/components.module.css'
import style from '../../page.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image'
import { Checkbox } from '@mui/material'
import Modal from '../../../components/Modal'

export default function doctorDetails({params}){
    let [doctor, setDoctor] = useState({})
    let [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        setDoctor(doctorsInformation.find(doc => doc.id == params.id))
    }, [])


    return (<>
        {isOpen && <Modal doctor={doctor} setIsOpen={setIsOpen} isOpen={isOpen}/>}
        <div className={style.container}>
            <Header/>
        </div>

        <div className={style1.detailsContainer}>

            <div className={style1.personalDetails}>
                <div>
                    <Image style={{height:'200px',width:'200px'}} src={doctor.image}/>
                </div>
                <div>{doctor.name}</div>
                <div>{doctor.personalDetails}</div>
                <div>{doctor.speciality} <span style={{padding:"0px 5px"}}>{doctor.location}</span></div>
            </div>

            <div className={style1.information}>

                <div className={style1.informationA}>

                    
                    <div className={style1.informationA1}>
                        <div style={{
                            textAlign:'center',
                            fontSize:'23px',
                            backgroundColor:'#d55f13',
                            padding:'10px'
                        }}>The diseases that are treated</div>

                        {doctor?.treatedDiseases?.map(disease => (
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}> 
                                <Checkbox checked={true}/><div>{disease}</div>
                            </div>
                        ))}
                    </div>

                    
                    <div className={style1.informationA2}>
                        <div style={{
                            textAlign:'center',
                            fontSize:'23px',
                            backgroundColor:'#d55f13',
                            padding:'10px',
                            marginBottom:'20px'
                        }}>Doctor Consultation Fee</div>
                        <div style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>
                            <div>New Patient {doctor?.fee?.newPatient} TK</div>
                            <div>Old Patient {doctor?.fee?.oldPatient} TK</div>
                        </div>
                    </div>

                </div>

                <div className={style1.informationB}>
                    
                    <div className={style1.informationA1}>
                        <div style={{
                            textAlign:'center',
                            fontSize:'23px',
                            backgroundColor:'#d55f13',
                            padding:'10px',
                            marginBottom:'20px'
                        }}>Chamber Schedule</div>

                        <div style={{marginBottom:'10px'}}>Address: <span style={{padding:"0px 5px"}}>{doctor?.chamber}</span></div>
                        
                        <div>
                            {doctor?.schedule?.map(sche => (<>
                                <div style={{padding:'10px',border:'1px solid #dddd'}}>
                                    <div>{sche?.day}</div>
                                    <div><span>{sche?.startTime}</span>to <span>{sche?.endTime}</span></div>
                                </div>
                            </>))}
                        </div>
                    
                    </div>

                    <div style={{
                        textAlign:'center',
                        fontSize:'23px',
                        backgroundColor:'green',
                        padding:'10px',
                        cursor:'pointer'
                    }} onClick={() => setIsOpen(true)} className={style1.informationA2}>Book Appointment</div>

                </div>

            </div>

        </div>

        



        <div className={style.footerContainer}>
        <div className={style.footer}>
          <div className={style.footerBox}>
            <div className={style.footerTitle}>Hospital Management</div>
            <div className={style.footerDescription}>Hospital Management, the largest platform of Bangladesh for online doctors appointment, free consultations, diagnostic, hospital, ambulance service and blood donors</div>
          </div>

          <div className={style.footerBox}>
            <div className={style.footerTitle}>Help & Support</div>
            <div className={style.footerDescription}>Privacy Policy</div>
            <div className={style.footerDescription}>Terms & Conditions</div>
            <div className={style.footerDescription}>Contact</div>
            <div className={style.footerDescription}>Support</div>
            <div className={style.footerDescription}>Careers</div>
          </div>
          <div className={style.footerBox}>
            <div className={style.footerTitle}>About Us</div>
            <div className={style.footerDescription}>Our Blog</div>
            <div className={style.footerDescription}>FAQ</div>
            <div className={style.footerDescription}>Sitemap</div>
          </div>
          <div className={style.footerBox}>
            <div className={style.footerTitle}>Stay Connected with us</div>
            <div className={style.footerIcon}>
              <FacebookIcon fontSize='large'/>
              <TwitterIcon fontSize='large'/>
              <LinkedInIcon fontSize='large'/>
              <YouTubeIcon fontSize='large'/>
            </div>
          </div>
        </div>
      </div>
    
    </>)
}