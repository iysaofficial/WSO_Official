import Link from 'next/link'
import '../assets/css/Footer.css'

const FooterComp = () =>{
    return(
    <>
    <footer>
      <div className="container">
        <div className="wrapper">
          <div className="footer-widget">
            <h6 className='logo'>International Youth Economy Olympiad</h6>
            <p className="desc">
             
            </p>
            <ul className="socials">
                <li>
                    <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'>
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                </li>
                <li>
                    <a href="https://www.instagram.com/wso.officiall?utm_source=ig_web_button_share_sheet&igsh=MTV0dWVqOHJ2YjJ4NA==" target='_blank'>
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'>
                        <i className="fab fa-youtube"></i>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.tiktok.com/@iysa.official" target='_blank'>
                        <i className="fab fa-tiktok"></i>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'>
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Information Links</h6>
            <ul className="links">
                <li><Link href="/#contact">Contact</Link></li>
                <li><Link href="https://iysa.or.id" target='_blank'>IYSA Main Website</Link></li>
                <li><Link href="https://iysaolympiad.or.id" target='_blank'>IYSA Olympiad Website</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Navigation</h6>
            <ul className="links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/#category-section">Category</Link></li>
                {/* <li><a href="#">Guide Book</a></li> */}
                <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-widget">
            <h6>Office</h6>
            <ul className="links">
                <li><Link href="https://wa.me/+6288213248890">+6288213248890</Link></li>
                {/* <br /> */}  
                <li><Link href="mailto:iysa.olympiad@gmail.com">iysa.olympiad@gmail.com</Link></li>
                {/* <br /> */}
                <li><Link href="https://goo.gl/maps/9x18coXGCmSscKec6">Jl. Kemang No. 63 RT 03 RW 06</Link></li>
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
    <div className="copyright-wrapper">
        <p>
            Copyright © 2024 WSO Official. All rights reserved
        </p>
    </div>
    </>
    )
}

export default FooterComp