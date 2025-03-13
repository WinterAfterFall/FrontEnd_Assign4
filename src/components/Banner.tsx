import Image from "next/image";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h1>where every event finds its venue</h1>
        <p>
          Finding the perfect venue has never been easier. Whether it’s a
          wedding, corporate event, or private party, we connect people to the
          perfect place.
        </p>
      </div>
      <Image 
        src="/Banner.png" 
        alt="Event Venue" 
        layout="fill" 
        objectFit="cover" 
        className={styles.image} 
      />
    </div>
  );
};

export default Banner;
