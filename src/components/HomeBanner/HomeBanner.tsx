import styles from './HomeBanner.module.css';
import swamiHomeImg from '../../assets/swami-reading.png';

function HomeBanner() {
  return (
    <section className={styles['home-content']}>
      <img src={swamiHomeImg} alt='Swami Reading Santhana Sarathi' />
      <div>
        <h1 className={styles.heading}>The Mission</h1>
        <p className={styles['heading-first-line']}>
          Devoted to the Moral and Spiritual Uplift of Humanity through
        </p>
        <p className={styles['human-values']}>
          SATHYA DHARMA SANTHI PREMA AHIMSA
        </p>
        <p className={styles['bhagwan-declaration']}>
          During the occasion of the launch of Sanathana Sarathi on Feb 16, Maha
          Sivarathri, 1958, Bhagawan declared:
        </p>
        <p className={styles['bhagwan-uvacha']}>
          "From this day, our Sanathana Sarathi will lead to victory the cohorts
          of Truth - the Vedas, the Sastras and similar scriptures of all
          faiths, against the forces of the ego such as injustice, falsehood,
          immorality and cruelty. This is the reason why it has emerged. This
          Sarathi will fight in order to establish world prosperity. It is bound
          to sound the paean of triumph when universal Ananda is achieved."
        </p>
      </div>
    </section>
  );
}

export default HomeBanner;
