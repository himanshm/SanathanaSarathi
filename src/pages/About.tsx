import styles from './About.module.css';
import storyFirstImg from '../assets/story_01.jpg';
import storySecondImg from '../assets/story_02.jpg';
import { aboutContent } from '../utils/the-story-content';

function About() {
  return (
    <>
      <section>
        <h1 className={styles['main-heading']}>
          {aboutContent.hisStoryHeader}
        </h1>
        <header className={styles['main-header']}>
          <img src={storyFirstImg} alt='Swami looking down with a smile' />
          <div>
            <h3 className={styles['swami-declaration']}>
              {aboutContent.theStoryContent[0].subtitle}
            </h3>
            {aboutContent.theStoryContent[0].swamiSays.map((para) => (
              <p className={styles['bhagwan-uvacha']} key={para}>
                {para}
              </p>
            ))}
          </div>
        </header>
      </section>

      <section className={styles['history-section']}>
        {aboutContent.theHistoryContent.map((para) => (
          <p key={para} className={styles['history-section']}>
            {para}
          </p>
        ))}

        <br />
        <br />
        <p className={styles['genesis-intro']}>{aboutContent.genesisIntro}</p>
      </section>

      <section>
        <h1 className={styles['main-heading']}>{aboutContent.genesisHeader}</h1>
        <div className={`${styles['genesis-header']} clearfix`}>
          <img
            src={storySecondImg}
            alt='Kasturi ji With Swami'
            className={styles['story-img']}
          />
          <div>
            <h3 className={styles['genesis-heading']}>
              {aboutContent.genesisContent[0].subtitle}
            </h3>

            {aboutContent.genesisContent[0].profKasturiSays.map((para) => (
              <p key={para} className={styles['kasturiji-says']}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
