import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

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

const BlogCard = ({title, body, id}) => {
  return (
    <Link className={styles.card} href={`/${id}`}>
      <div className={styles.imageParent}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt='Blog Card Image'
          fill
        />
      </div>
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </Link>
  )
}

export default BlogCard
