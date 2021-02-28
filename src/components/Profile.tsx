import styles from '../styles/components/Profile.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';
import {useContext} from "react";

export function Profile () {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/brunos1.png" alt="Bruno Silveira"/>
            <div>
                <strong>Bruno Silveira</strong>
                <p>
                    <img src="icons/level.svg"  alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}
