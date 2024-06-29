import style from './components.module.css'
import Card from './Card'

export default function OurService({title, services}){
    return (<>
        
        
        <div className={style.serviceWrapper}>
            <div style={{fontSize:'25px', padding:'20px'}}>{title}</div>
            <div className={style.serviceContainer}>


                {services.map(service => <Card service={service}/>)}


            </div>
        </div>
        
    
    
    </>)
}