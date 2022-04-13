import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return ( 
        <nav>
            <button className="toggle">
            <Image src="/icons/toggle.png" width={40} height={40}/>
            </button>
            <Link href="/"><a>Home</a></Link>
            <Link href="/#contact" scroll={false}><a>Contact</a></Link>
            <Link href="/projects"><a>Projects</a></Link>
            <Link href="/resume"><a>Resume</a></Link>
        </nav>
     );
}
 
export default Navbar;