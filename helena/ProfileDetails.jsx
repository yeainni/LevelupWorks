import styles from './ProfileDetails.module.css'


export default function profileDetails({ teacherUsers }) {
    return (
        <div>
            <div className={styles.profileDetailBox}>
                <h1 className={styles.profileName}>{teacherUsers.name}</h1>
                <div className={styles.profileList}>
                    <div className={styles.profileTitles}>
                        <p>School</p>
                        <p>Date of Birth</p>
                        <p>Contact No</p>
                        <p>Email Address</p>
                    </div>
                    {teacherUsers.map((teacherUser) => (
                        <div key={teacherUser.id}>
                            <div className={styles.profileContents}>
                                <p>{teacherUser.school}</p>
                                <p>{teacherUser.date_of_birth}</p>
                                <p>{teacherUser.contact_number}</p>
                                <p>{teacherUser.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}








