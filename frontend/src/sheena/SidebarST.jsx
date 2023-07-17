import { useEffect, useState } from "react";
import styles from "./SidebarST.module.css";

export default function SidebarST({ handleFilterChange }) {
    const [subscriptionType, setSubscriptionType] = useState([]);
    const [activityType, setActivityType] = useState([]);

    const handleSubChange = (e) => {
        const selectedSubscription = e.target.value;
        setSubscriptionType((prevSubscriptionType) => {
            if (prevSubscriptionType.includes(selectedSubscription.toLowerCase())) {
                return prevSubscriptionType.filter(
                    (type) => type !== selectedSubscription.toLowerCase()
                );
            } else {
                return [...prevSubscriptionType, selectedSubscription.toLowerCase()];
            }
        });
    };

    const handleActivityChange = (e) => {
        const selectedActivity = e.target.value;
        setActivityType((prevActivityType) => {
            if (prevActivityType.includes(selectedActivity.toLowerCase())) {
                return prevActivityType.filter(
                    (type) => type !== selectedActivity.toLowerCase()
                );
            } else {
                return [...prevActivityType, selectedActivity.toLowerCase()];
            }
        });
    };

    useEffect(() => {
        handleFilterChange(subscriptionType, activityType);
    }, [subscriptionType, activityType, handleFilterChange]);

    return (
        <div>
            <div className={styles.sidebar}>
                <div>
                    <h2 className={styles.heading}>SUBSCRIPTION</h2>
                    <div className={styles.border}></div>
                    <div className={styles.checkbox}>
                        <input
                            type="checkbox"
                            id="free"
                            name="free"
                            value="Free"
                            onChange={handleSubChange}
                            checked={subscriptionType.includes("free")}
                        />
                        <label htmlFor="free">Free</label>
                        <br />
                        <input
                            type="checkbox"
                            id="premium"
                            name="premium"
                            value="Premium"
                            onChange={handleSubChange}
                            checked={subscriptionType.includes("premium")}
                        />
                        <label htmlFor="premium">Premium</label>
                    </div>
                </div>

                <div>
                    <h2 className={styles.heading}>ACTIVITY TYPE</h2>
                    <div className={styles.border}></div>
                    <div className={styles.checkbox}>
                        <input
                            type="checkbox"
                            id="animation"
                            name="animation"
                            value="Animation"
                            onChange={handleActivityChange}
                            checked={activityType.includes("animation")}
                        />
                        <label htmlFor="animation">Animation</label>
                        <br />
                        <input
                            type="checkbox"
                            id="game"
                            name="game"
                            value="Game"
                            onChange={handleActivityChange}
                            checked={activityType.includes("game")}
                        />
                        <label htmlFor="game">Game</label>
                        <br />
                        <input
                            type="checkbox"
                            id="chatbot"
                            name="chatbot"
                            value="Chatbot"
                            onChange={handleActivityChange}
                            checked={activityType.includes("chatbot")}
                        />
                        <label htmlFor="chatbot">Chatbot</label>
                        <br />
                        <input
                            type="checkbox"
                            id="augmented-reality"
                            name="augmented-reality"
                            value="Augmented Reality"
                            onChange={handleActivityChange}
                            checked={activityType.includes("augmented reality")}
                        />
                        <label htmlFor="augmented-reality">Augmented Reality</label>
                    </div>
                </div>
            </div>
        </div>
    );
}
