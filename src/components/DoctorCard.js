import Link from "next/link"
import Image from "next/image"
import style from '../components/components.module.css'

export default function DoctorCard({doctor}){

    return (<>

        <Link className={style.doctorCard} href={`doctorDetails/${doctor.id}`}>
            <div className={style.doctorCardImage}>
                <Image style={{height:'200px',width:'200px'}} src={doctor.image}/>
            </div>
            <div className={style.doctorCardText}>
                <div style={{fontSize:'23px', color:'Highlight'}}>{doctor.name}</div>
                <div style={{padding: '5px 0px'}}>{doctor.speciality}<span style={{padding:'0px 5px', color:'hotpink'}}>{doctor.location}</span></div>
                <div style={{borderTop:'1px solid grey',fontSize:'15px', padding:'5px 0px'}}>{doctor.personalDetails}</div>
            </div>
            
        </Link>
    
    
    </>)
}