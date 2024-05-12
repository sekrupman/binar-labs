"use client";

import styles from "./styles.module.css";


const Banner = ({sources}) => {
  const hotNews = sources.slice(0, 3);
  console.log('hotNews', hotNews)
  return (
    <div className={styles.banner}>
      <img src="https://source.unsplash.com/random?news"></img>
      <div className={styles.portalContent}>
        <h1>Portal Berita Binar Academy</h1>
        <h3 className={styles.hotNewsTitle}>HOT NEWS</h3>
        <ul className={styles.hotNewsList}>
  {hotNews.map((source, index) => (
    <li key={index}><a href={source.url}>{source.title}</a></li>
  ))}
</ul>
      </div>
    </div>
  );
};

export default Banner;
