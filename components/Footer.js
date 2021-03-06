import Image from "next/image";


const Footer = () => {
    return ( 
        <footer>
        <div>
            <Image alt="contact" src="/illustrations/contact_lt.svg" width={300} height={300} />
        </div>
        <div id="contact">
            <div className="socials">
                <div className="github" 
                onClick={() => window.open('https://www.github.com/lcmedina')}>
                <Image alt="github" src="/icons/github.png" width={30} height={30} />
                </div>
                <div className="linkedin" 
                onClick={() => window.open('https://www.linkedin.com/in/laura-medina-90b8bb25/')}>
                <Image alt="linkedin" src="/icons/linkedin.png" width={30} height={30} />
                </div>
            </div>
            <div className="phone">
                <Image alt="phone" src="/icons/phone.png" width={30} height={30} />
                <p>+1 (713) 320-2249</p>
            </div>
            <div className="email">
                <Image alt="email" src="/icons/email.png" width={30} height={30} />
                <p>lauracodes42@gmail.com</p>
            </div>
        </div>
        </footer>
     );
}
 
export default Footer;