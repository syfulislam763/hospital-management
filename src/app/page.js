import OurService from '@/components/OurService';
import Header from '../components/Header'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from './page.module.css'
import {services, hospital, ambulance, specializedDoctor, bloodDoner} from '../data/data'

import Image from 'next/image';

export default function Home() {
  return (
    <div style={{backgroundColor:'#ffff'}}>
      <div className={style.container}>
        <Header/>
      </div>

      <div className={style.serviceContainer}>
        <div style={{height:'50px'}}></div>

        <OurService title='Our Services' services={services}/>
        <div style={{height:'50px'}}></div>

        <OurService title="Specialized Doctor's" services={specializedDoctor}/>
        <div style={{height:'50px'}}></div>

        <OurService title='Hospital & Diagnostic' services={hospital}/>
        <div style={{height:'50px'}}></div>

        <OurService title='Blood Donor' services={bloodDoner}/>
        <div style={{height:'50px'}}></div>

        <OurService title='Ambulance' services={ambulance}/>
        <div style={{height:'50px'}}></div>

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

      
      
    </div>
  );
}
