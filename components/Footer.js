import Image from "next/image";


const Footer = () => {
    return ( 
        <footer>
        <Image src="/illustrations/contact_lt.svg" width={300} height={300} />
         <Image src="/icons/github.png" width={50} height={50} />
         <Image src="/icons/linkedin-logo.png" width={50} height={50} />
        </footer>
     );
}
 
export default Footer;