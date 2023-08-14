import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

// 1-) You can use next Image with width, height and alt.
/* 
<Image
  src={"https://picsum.photos/200/300"}
  alt={'Lorem Picsum Image'}
  width={96}
  height={96}
/>
*/
// 2-) You can also use with fill.Make sure to give the parent relative position bec fill give the image absolute position and width and height.

const BlogCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageParent}>
        <Image
          src={"https://picsum.photos/200/300"}
          fill
        />
      </div>
      <div className={styles.cardBody}>
        <h3>Title</h3>
        <p>Description</p>
      </div>
    </div>
  )
}

export default BlogCard
