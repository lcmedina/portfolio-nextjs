import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Laura | Web Developer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.about}>

        <div className={styles.profile}>
          <Image src="/me.png" width={300} height={300} />
        </div>
        <div className={styles.bio}>
          <h1 className="heading">Welcome!</h1>
          <p>Hi, I’m Laura and welcome to my portfolio! I’m a graduate of the Digital Crafts bootcamp and currently live in Houston, TX.

          I consider myself a creative problem-solver with years of hospitality experience that allow me to work with teams of all different backgrounds. Currently I am working as front desk admin at a local high school, looking to transfer into the tech field and apply all that I’ve learned!

          When I’m not coding you can find me hanging out with my dog and hunting down the best cold brew in Houston. Occasionally I run long distances and hike up mountains for fun. I’ve been to 26 countries and can’t wait to explore some more!

          Let’s connect and build something cool, swap travel stories, or grab a coffee!</p>
        </div>
      </div>
      <div className={styles.skills}>
        <h1 className="heading">My Skills</h1>
        <div className={styles.skillimgs}>
          <Image src="/illustrations/big3_lt.svg" width={200} height={200} />
          <Image src="/illustrations/nextjs_lt.svg" width={200} height={200} />
          <Image src="/illustrations/react_lt.svg" width={200} height={200} />
        </div>
      </div>
    </div>
  )
}
