import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";


const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [router])
    return ( 
        <div className="not-found">
        <Image alt="page does not exist" src="/illustrations/404_lt.svg" width={400} height={300} />
            <h1>Page cannot be found.</h1>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;