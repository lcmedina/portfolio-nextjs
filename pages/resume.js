import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Resume.module.css"

const Resume = () => {
    return ( 
        <>
            <Head>
                <title>Laura | Resume</title>
                <meta name="keywords" content="resume" />
            </Head>
            <div className={styles.container}>
                <div className={styles.left}>
                        <Image src="/illustrations/res_lt.svg" width={300} height={300} />
                    <div className={styles.info}>
                        <h3 className={styles.heading}>Laura Medina</h3>
                        <div className={styles.details}><Image src="/icons/coding.png" width={20} height={20} /><p>Web Developer</p></div>
                        <div className={styles.details}><Image src="/icons/home.png" width={20} height={20} /><p>Houston, TX</p></div>
                        <div className={styles.details}><Image src="/icons/email.png" width={20} height={20} /><p>lauracodes42@gmail.com</p></div>
                        <div className={styles.details}><Image src="/icons/phone.png" width={20} height={20} /><p>+1 (713) 320-2249</p></div>

                    </div>
                    <div className={styles.skills}>
                        <h2 className={styles.heading}>Skills</h2>
                        <p>JavaScript</p>
                        <p>React/Redux</p>
                        <p>Next.js</p>
                        <p>Google Firebase</p>
                        <p>MongoDB</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Debugging</p>
                        <p>Agile Methodologies</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.work}>WORK EXPERIENCE</div>
                    <div className={styles.work}>EDUCATION</div>
                </div>
            </div>
        </>
     );
}
 
export default Resume;