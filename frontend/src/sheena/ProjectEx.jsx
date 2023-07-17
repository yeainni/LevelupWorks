import SidebarST from "./SidebarST";
import MainPageST from "./MainPageST";
import styles from "./ProjectEx.module.css";
import { useState } from "react";

export default function ProjectEx() {
    const [selectedFilter, setSelectedFilter] = useState({
        subscriptionType: [],
        activityType: [],
        courseType: "",
    });


    const handleFilterChange = (subscriptionType, activityType, courseType) => {
        setSelectedFilter({ subscriptionType, activityType, courseType });
    };


    return (
        <div>
            <div className={styles.bothComponents}>
                <SidebarST handleFilterChange={handleFilterChange} />
                <MainPageST selectedFilter={selectedFilter} />
            </div>
            <div>
                <div id={styles.scrolltop}>
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={styles.bottomButton}
                    >
                        BACK TO TOP
                    </button>
                </div>
            </div>
        </div>
    );
}
