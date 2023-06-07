import React from 'react';
import styles from './pagecategory.module.css'
import Button from '@/components/Button/Button';
import Image from 'next/image';

const Category = ({ params }) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/12993530/pexels-photo-12993530.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=''
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/12993530/pexels-photo-12993530.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=''
          />
        </div>
      </div>

    </div>
  )
}

export default Category
