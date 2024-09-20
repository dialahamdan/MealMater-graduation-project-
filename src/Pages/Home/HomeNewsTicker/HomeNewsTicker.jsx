import styles from "./HomeNewsTicker.module.css";

function HomeNewsTicker() {
  return (
    <>
      <div className={styles.tickerContainer}>
        <div className={styles.tickerRibbon}></div> {/* Ribbon overlay */}
        <div className={styles.tickerContent}>
          {[
            "New Recipes Every Week",
            "Meet Our Chefs",
            "Live Cooking Sessions",
            "New Episodes Weekly",
            "Quick Cooking Tips",
            "Unlock Exclusive Recipe Secrets!",
            "Daily Cooking Inspiration",
            "New Flavors to Savor",
            "Cooking Hacks Revealed",
            "Top Recipe Picks—See What’s Trending!",
          ].map((text, index) => (
            <div className={styles.tickerItem} key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={styles.icon}
              >
                <path d="M152.2 236.4c-7.7-8.2-19.7-7.7-24.8 2.8L1.6 490.2c-5 10 2.4 21.7 13.4 21.7h175c5.8 .1 11-3.2 13.4-8.4 37.9-77.8 15.1-196.3-51.2-267.1zM244.4 8.1c-122.3 193.4-8.5 348.6 65 495.5 2.5 5.1 7.7 8.4 13.4 8.4H497c11.2 0 18.4-11.8 13.4-21.7 0 0-234.5-470.6-240.4-482.3-5.3-10.6-18.8-10.8-25.6 .1z" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeNewsTicker;
