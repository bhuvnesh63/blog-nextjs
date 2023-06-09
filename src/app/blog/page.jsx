import React from 'react';
import styles from './blog.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
    return (
        <div className={styles.maincontainer}>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imagecontainer}>
                    <Image
                        src="https://images.pexels.com/photos/2403850/pexels-photo-2403850.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt='demo'
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imagecontainer}>
                    <Image
                        src="https://images.pexels.com/photos/2403850/pexels-photo-2403850.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt='demo'
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
            <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imagecontainer}>
                    <Image
                        src="https://images.pexels.com/photos/2403850/pexels-photo-2403850.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt='demo'
                        width={400}
                        height={250}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
        </div>
    )
}

export default Blog
