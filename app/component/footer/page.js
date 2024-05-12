import { BsFacebook, BsTwitterX, BsInstagram,BsYoutube, BsTiktok, BsCCircle } from "react-icons/bs";
import styles from './styles.module.css'

const Footer =() =>{
    return(
        <div className={styles.footer}>
        <div>
            <hr style={{width:'300%'}}></hr>
        <h3>PORTAL BERITA BINAR ACADEMY</h3>
        <div className={styles.footerSocmed}>
           <a href="https://www.facebook.com/BinarAcademy/"><BsFacebook /> </a> 
           <a href="https://twitter.com/academybinar"><BsTwitterX /> </a> 
           <a href="https://www.instagram.com/academybinar/"><BsInstagram /> </a> 
           <a href="https://www.youtube.com/@BinarAcademy"><BsYoutube  /> </a> 
           <a href="https://www.tiktok.com/@academybinar"><BsTiktok /></a> 
        </div>
        </div>
        <div style={{ marginTop: "2rem" }}>
            <p> <BsCCircle /> Copyright 2024 Ignatius Kurniawan Pranajaya</p>
        </div>
    </div>
    )
}

export default Footer