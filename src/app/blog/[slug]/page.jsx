import Image from "next/image";
import styles from "./SinglePost.module.css";

const SinglePostPage = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/10255583/pexels-photo-10255583.jpeg"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/users/avatars/589022975/marta-nogueira-585.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ispum dolor sit amet, consectetur adipisicing elit
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
