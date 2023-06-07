import React from 'react';
import styles from './blogid.module.css'
import Image from 'next/image';

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quisquam eveniet quod, non dolore ex, eaque assumenda architecto fugiat quam excepturi totam corrupti, impedit unde veritatis est corporis quidem labore dignissimos ut accusantium in laboriosam!</p>
          <div className={styles.author}>
            <Image src="https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=600" alt="author-image" width={40} height={40} className={styles.avatar} />
          <span className={styles.username}>John Demo</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600" alt='blog-image' fill={true} className={styles.image}/>
        </div>
      </div>
   <div className={styles.content}>
    <div className={styles.text}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia, earum asperiores corporis ea doloribus eveniet! Tempore maxime laboriosam recusandae ea. Aspernatur, omnis nobis obcaecati consequuntur ipsam labore modi quod temporibus? Vel et cumque consequatur omnis id ipsam possimus harum repudiandae adipisci perferendis perspiciatis quia, delectus rerum pariatur voluptatibus iure.<br/><br/>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente beatae facere dicta debitis similique incidunt fugiat, nam exercitationem impedit, repellat commodi ut suscipit totam iste aspernatur quaerat aliquam. Atque, esse.
    </div>
   </div>
    </div>
  )
}

export default BlogPost


// className={styles.}