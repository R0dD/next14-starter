import PostCard from "@/components/postCard/PostCard";
import styles from "./Blog.module.css";

const BlogPage = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
};

export default BlogPage;