import BlogCard from "@/components/blogCard"
import styles from './styles.module.css'

const fetchDataFromDummyJson = async () => {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  return await res.json()
}

export default async function Home() {

  const {posts} = await fetchDataFromDummyJson()
  

  return (
    <main className={styles.blogContainer}>
     {posts.map(blog => (
      <BlogCard key={blog.id} {...blog}/>
     ))}
    </main>
  )
}
