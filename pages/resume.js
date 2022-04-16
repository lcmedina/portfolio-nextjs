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
                        <Image alt="proud coder" src="/illustrations/res_lt.svg" width={300} height={300} />
                    <div className={styles.info}>
                        <h3 className={styles.heading}>Laura Medina</h3>
                        <div className={styles.details}><Image alt="small icon" src="/icons/coding.png" width={20} height={20} /><p>Web Developer</p></div>
                        <div className={styles.details}><Image alt="small icon" src="/icons/home.png" width={20} height={20} /><p>Houston, TX</p></div>
                        <div className={styles.details}><Image alt="small icon" src="/icons/email.png" width={20} height={20} /><p>lauracodes42@gmail.com</p></div>
                        <div className={styles.details}><Image alt="small icon" src="/icons/phone.png" width={20} height={20} /><p>+1 (713) 320-2249</p></div>

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
                     {/* WORK EXPERIENCE */}
                    <div className={styles.experience}>
                        <div className={styles.expHeading}>
                            <Image alt="work icon" src="/icons/suitcase_lt.png" width={50} height={50} />
                            <h1 className={styles.heading}>Work Experience</h1>
                        </div>
                        <div className={styles.expDetails}>
                            <h2>Front Desk Admin | School of the Woods</h2>
                            <div className={styles.dates}>
                                <Image alt="calendar icon" src="/icons/calendar_lt.png" width={25} height={25} />
                                <h3>August 2013 - <span>Current</span></h3>
                            </div>
                            <p>I am the first point of contact for those calling and visiting the school campus. I provide information on rules, disciplinary measures, and day-to-day operations. I am responsible for maintaining records of school operations, such as class schedules, medical release forms, extracurricular registrations, and parent contact information. This also includes preparing necessary trip paperwork and medical kits in a timely manner. I share information broadly with 100+ administrators, teachers, and student families, as well as manage administrator and teacher schedules for conferences and meetings with 60+ high school families.</p>
                        </div>
                        <div className={styles.expDetails}>
                            <h2>Event Planning Intern | eEvents</h2>
                            <div className={styles.dates}>
                                <Image alt="calendar icon" src="/icons/calendar_lt.png" width={25} height={25} />
                                <h3>June 2012 - August 2013</h3>
                            </div>
                            <p>I was involved in the planning, execution and breakdown for corporate functions, seminars, conferences, meetings, and fundraisers. I assisted with on-site coordination for our vendors and clients, including managing the timeline of the event, set up and breakdown flow, and task delegation when necessary. I managed client databases and membership lists, observed board meetings and communicated minutes and key information to board members in a follow up. I answered phone calls and emails regarding event inquiries, updates, and general questions, as well as coordinating event mass mailings with little to no supervision.</p>
                        </div>
                    </div>
                    {/* EDUCATION */}
                    <div className={styles.experience}>
                        <div className={styles.expHeading}>
                            <Image alt="education icon" src="/icons/education_lt.png" width={50} height={50} />
                            <h1 className={styles.heading}>Education</h1>
                        </div>
                        <div className={styles.expDetails}>
                            <h2>DigitalCrafts | Certificate in Software Engineering</h2>
                            <div className={styles.dates}>
                                <Image alt="calendar icon" src="/icons/calendar_lt.png" width={25} height={25} />
                                <h3>April 2021 - October 2021</h3>
                            </div>
                            <p>Software engineering training program covering full-stack development including, but not limited to JavaScript, HTML and CSS, including an emphasis on cutting-edge frameworks like React/Redux and server-side technologies including Node.js, Express, and PostgreSQL.</p>
                        </div>
                        <div className={styles.expDetails}>
                            <h2>University of Houston | B.S. in Hotel and Restaurant Management</h2>
                            <div className={styles.dates}>
                                <Image alt="calendar icon" src="/icons/calendar_lt.png" width={25} height={25} />
                                <h3>August 2008 - May 2013</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className={styles.float} href="/LauraMedinaResume22.pdf" download><Image alt="download icon" src="/icons/file_lt.png" width={60} height={60} /></a>
        </>
     );
}
 
export default Resume;