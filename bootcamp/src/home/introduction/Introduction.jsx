import React from "react";
import styles from "./Introduction.module.css";
export default function Introduction() {
  return (
    <>
      <div className={styles.introduction}>
        <div className={styles.why}>
          Why <br /> SolveX?
        </div>
        <div className={styles.box1}>
          <div className={styles.content}>
            <h2> Superb mentors</h2>
            Best in class mentors from top Tech schools and Industry favourite
            Techies are here to teach you.
          </div>
        </div>
        <div className={styles.box1}>
          <div className={styles.content}>
            <h2> Industry-vetted curriculum</h2>
            Best in class content, aligned to the Tech industry is delivered to you to ensure you are a darling of the Tech industry.
          </div>
        </div>
        <div className={styles.box1}>
          <div className={styles.content}>
            <h2>Project based learning</h2>
            Hands on learning pedagogy with live projects to cover practical knowledge over theoretical one.
          </div>
        </div>
        <div className={styles.box1}>
          <div className={styles.content}>
            <h2>Superb placements</h2>
            Result oriented courses with placement across all genres, students as well as Working professionals.
          </div>
        </div>
      </div>
    </>
  );
}
