'use client'

import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import style1 from '../../components/components.module.css'
import style from '../page.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { StorefrontOutlined } from '@mui/icons-material'


export default function Account(){
    let [formData, setFormData] = useState([])

    useEffect(() => {
        let data = localStorage.getItem('appointment')
        if(data != null){
            setFormData(JSON.parse(data))
        }else{
            setFormData([])
        }
    }, [])

    return (<>
       
        <div className={style.container}>
            <Header/>
        </div>

        

        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:"center",
            margin: '30px 0px'
        }}>

            <div style={{
                minHeight:"400px",
                width:"80%",
                boxShadow: "5px 3px 7px 5px #dddd",
                padding:'20px'
            }}>
                <div style={{fontSize:'23px', textAlign:'center'}}>Appointment List</div>

                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:"center",
                    rowGap:'20px',
                    marginTop:'20px',
                    fontSize:'18px'
                }}>
                    <div>Status</div>
                    <div>Doctor</div>
                    <div>Patient</div>
                </div>

                {formData.map((data, i) => (<div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:"center",
                    rowGap:'20px',
                    marginTop:'10px',
                    fontSize:'15px'
                }}>
                    <div>{i%3 == 0?"Pending":i%3==1?"Confirmed":"Canceled"}</div>
                    <div>{data.doctorName}</div>
                    <div>{data.patientName}</div>
                </div>))}

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