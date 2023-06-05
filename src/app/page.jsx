import Image from "next/image"
import Hero from 'public/Hero.png'
import styles from './page.module.css'
import Button from "@/components/Button/Button"
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your website</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vero animi quam similique aperiam dolore et voluptatibus dolor rerum deleniti.</p>
        <Button url="/portfolio" text="See our works"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="home-banner" className={styles.img} />
      </div>
      {/* <Image width={500 } height={500}  src="https://images.pexels.com/photos/16986076/pexels-photo-16986076/free-photo-of-venice-gondola.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/> */}
    </div>
  )
}
