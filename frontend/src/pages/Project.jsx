import { useState, useEffect } from 'react';

export default function Project() {
    const [subscriptionType, setSubscriptionType] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [activityType, setActivityType] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/project')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setFilteredProjects(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    useEffect(() => {
        filterProjects();
    }, [subscriptionType, activityType]);

    const filterProjects = () => {
        const filtered = projects.filter((project) => {
            const matchesSubscription =
                subscriptionType.length === 0 || subscriptionType.includes(project.subscription);
            const matchesActivity =
                activityType.length === 0 || activityType.includes(project.activity_type);
            return matchesSubscription && matchesActivity;
        });
        setFilteredProjects(filtered);
    };

    const handleSubscriptionChange = (e) => {
        const selectedSubscription = e.target.value;
        if (subscriptionType.includes(selectedSubscription)) {
            setSubscriptionType(subscriptionType.filter((type) => type !== selectedSubscription));
        } else {
            setSubscriptionType([...subscriptionType, selectedSubscription]);
        }
    };

    const handleActivityChange = (e) => {
        const selectedActivity = e.target.value;
        if (activityType.includes(selectedActivity)) {
            setActivityType(activityType.filter((type) => type !== selectedActivity));
        } else {
            setActivityType([...activityType, selectedActivity]);
        }
    };

    return (
        <div style={{ display: "flex", padding: "100px" }}>
            <div>
                <div style={{ display: "flex", flexDirection: "column", padding: "30px" }}>
                    <label htmlFor="subscriptionType">
                        Subscription Type:
                    </label>

                    <label htmlFor="free">
                        <input
                            type="checkbox"
                            id="free"
                            value="free"
                            onChange={handleSubscriptionChange}
                            checked={subscriptionType.includes('free')}
                        />
                        Free
                    </label>

                    <label htmlFor="premium">
                        <input
                            type="checkbox"
                            id="premium"
                            value="premium"
                            onChange={handleSubscriptionChange}
                            checked={subscriptionType.includes('premium')}
                        />
                        Premium
                    </label>

                    <label htmlFor="activityType">Activity Type:</label>

                    <label htmlFor="game"
                    >
                        <input
                            type="checkbox"
                            id="game"
                            value="game"
                            onChange={handleActivityChange}
                            checked={activityType.includes('game')}
                        />
                        Game
                    </label>


                    <label htmlFor="chatbot">
                        <input
                            type="checkbox"
                            id="chatbot"
                            value="chatbot"
                            onChange={handleActivityChange}
                            checked={activityType.includes('chatbot')}
                        />
                        Chatbot
                    </label>

                    <label htmlFor="animation">
                        <input
                            type="checkbox"
                            id="animation"
                            value="animation"
                            onChange={handleActivityChange}
                            checked={activityType.includes('animation')}
                        /> Animation
                    </label>
                </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", padding: "30px" }}>
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: '10px',
                            border: "1px solid gray",
                            borderRadius: "25px",
                            alignItems: 'center',
                            margin: "0 20px 40px 20px",
                            width: "320px"
                        }}
                    >
                        <h2>{project.name}</h2>
                        <img src={project.project_pic} />
                    </div>
                ))}
            </div>
        </div>
    );
}
