import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Projects.module.css"


const Projects = () => {
    return ( 
        <div className={styles.container}>
        <Head>
            <title>Laura | Projects</title>
            <meta name="keywords" content="projects" />
        </Head>
            <Image src="/illustrations/proj_lt.svg" width={350} height={350} />
            <div className={styles.projLeft}>
            <div className={styles.video}>
                <video width={500} height={300} controls>
                    <source src="/projects/helping.mp4" type="video/mp4" />
                </video>
                </div>
                <div className={styles.leftDescrip}>
                    <h1>Helping Hands</h1>
                    <h2>March 2022</h2>
                    <p>Built during the All-Women Virtual Hackathon - Break the Bias hosted by Nyna Caputi and The Expat Woman. The goal was to find solutions to the challenges faced by women.
                    Our group chose to create an app that connected refugees with items they needed.</p>
                    <p>Users would create an account and choose whether they were in need of items or if they wanted to donate items. Recipients are able to browse sub-categories and filter the items they are looking for and add them to their cart.</p>
                    <p>Upon checkout they will coordinate a pickup date and location. The idea was that the app would partner with local public places (i.e. libraries, police stations, etc.) to store items and be a safe exchange location. Perhaps there will be volunteers to deliver directly to recipients, since transportation may be a challenging factor for some.</p>
                    <h3>Placed 3rd out of 9 projects.</h3>
                    <button className={styles.button} onClick={() => window.open('https://hh2022.netlify.app/')}>Live Demo</button>
                    <button className={styles.button} onClick={() => window.open('https://github.com/lcmedina/helping-hands')}>Github Repo</button>
                </div>
            </div>
            <div className={styles.projRight}>
            <div className={styles.video}>
                <Image src="/projects/countries.gif" width={500} height={300} />
                </div>
                <div className={styles.rightDescrip}>
                    <h1>Countries API</h1>
                    <h2>March 2022</h2>
                    <p><a href="https://www.frontendmentor.io/profile/lcmedina" target="_blank">Frontend Mentor</a> challenge using the REST countries API. Built with React and MUI.</p>
                    <p>I used a context API to manage the light and dark themes. This project really allowed me to dive into customizing MUI components.</p>
                    <p>Users are able to see all countries from the API on the homepage, search for a country, filter countries by region, click on a country and view details on a separate page, click through border countries on the detail page and toggle between light and dark mode.</p>
                    <button className={styles.button} onClick={() => window.open('https://countries05.netlify.app/')}>Live Demo</button>
                    <button className={styles.button} onClick={() => window.open('https://github.com/lcmedina/countries')}>Github Repo</button>
                </div>
            </div>
            <div className={styles.projLeft}>
            <div className={styles.video}>
                <video width={500} height={300} controls>
                    <source src="/projects/pawfect.mp4" type="video/mp4" />
                </video>
                </div>
                <div className={styles.leftDescrip}>
                    <h1>Pawfect Dates</h1>
                    <h2>October 2021</h2>
                    <p>Pawfect Dates works very similar to Tinder, users can go through a database of potential matches and connect with those they think would be the best fit for their fur baby. This app is intended to help dog owners socialize their pups as well as connect with others in their community.</p>
                    <p>For this project I worked with React Native and Firebase. React Native felt like the natural choice to make a fully responsive and user friendly mobile app. For my database and authentication I went with Google Firebase. I chose this technology because of its noSQL structure that provides fast querying and allows for frequent application changes. I used Firestore as my main database for storing user profile information and potential matches, and Storage for user profile pictures.</p>
                    <button className={styles.button} onClick={() => window.open('https://github.com/lcmedina/PawfectDates')}>Github Repo</button>
                </div>
            </div>
            <div className={styles.projRight}>
            <div className={styles.video}>
                <Image src="/projects/keeper.gif" width={500} height={300} />
                </div>
                <div className={styles.rightDescrip}>
                    <h1>myKeeper</h1>
                    <h2>October 2021</h2>
                    <p>Solo React project built during my time at Digital Crafts.</p>
                    <p>Simple notes app that allows a user to write notes and render them to the page. Longer notes are cut short and you are directed to a new page to see the expanded note. Working PayPal sandbox donation page, as well as a light and dark toggle.</p>
                    <p>Recently switched databases from JSON server to Firebase in April 2022.</p>
                    <button className={styles.button} onClick={() => window.open('https://react-my-keeper.netlify.app/')}>Live Demo</button>
                    <button className={styles.button} onClick={() => window.open('https://github.com/lcmedina/mykeeper')}>Github Repo</button>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;