

import style from './components.module.css'
import Image from 'next/image'
export default function Card({service}){


    return (
        <div className={style.cardContainer}>
            <div style={{
                backgroundColor:'#04aa6d',
                height: '100px',
                width: '100%',
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                boxShadow: '2px 1px 2px 1px #ddd',
                padding: '10px 0px',
                marginBottom: '20px'
            }}>
                <Image src={service.image}/>
            </div>
            <div style={{fontSize:'18px'}}>{service.title}</div>
            <div style={{fontSize:'15px', padding:'10px'}}>
                {service.description}
            </div>
        </div>
    )


}