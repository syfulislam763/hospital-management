import {doctorsInformation} from '../../data/doctorsInformation'
import DoctorCard from '@/components/DoctorCard'
import style1 from '../../components/components.module.css'
import style from '../page.module.css'
import Header from '../../components/Header'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function allDoctors(){
    return (<div style={{backgroundColor: '#eef6fa'}}>
        
        <div className={style.container}>
            <Header/>
        </div>

        <div className={style1.doctorCardContainer}>
            {doctorsInformation.map(doctor => (<DoctorCard doctor={doctor}/>))}
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

    </div>)
}