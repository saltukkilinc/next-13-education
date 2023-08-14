import Image from 'next/image';
import {notFound} from 'next/navigation'
import React from 'react'

import styles from './styles.module.css'

const fetchIndividualPost = async (id) => {
 const res = await fetch(`https://dummyjson.com/post/${id}`);
 return await res.json();
}

const Post = async ({params}) => {
  const fetchedData = await fetchIndividualPost(params.id);

  // console.log(fetchedData)

  const {title, body} = fetchedData

  if(!title) {
    notFound()
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={`https://picsum.photos/200/300?random=${params.id}`} alt="lorem picsum image" fill/>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Post
