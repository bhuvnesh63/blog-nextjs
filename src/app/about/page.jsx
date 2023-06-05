import React from 'react';
import styles from './about.module.css'
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=600" fill={true} alt='about-hero' className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Lorem ipsum dolor sit amet consectetur.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum obcaecati sit nihil atque magni suscipit amet delectus perferendis <br/><br/> dolore, sapiente, aperiam vero voluptate. Iusto optio dolorem adipisci ullam nostrum? Ipsa veritatis quas perferendis quo amet consequuntur aut nostrum cupiditate!</p>
        </div >
        <div className={styles.item}>
        <h1 className={styles.title}>What we Do?</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati nobis sed deleniti debitis voluptatibus cum odit! Illum, esse dolore vero assumenda provident voluptate, quis quas commodi a, harum hic. Corporis.</p>
        </div>

      </div>
      <Button className={styles.aboutbutton} url="/contact" text="Contact"/>
    </div>
  )
}

export default About
