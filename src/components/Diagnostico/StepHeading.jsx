import styles from "../../Pages/Diagnostico/Diagnostico.module.css";

export function StepHeading({ number: step, title, tag }) {
  return (
    <div className={styles.stepH}>
      <div className={styles.stepN}>{step}</div>
      <h2>{title}</h2>
      {tag && <span className={styles.stepTag}>{tag}</span>}
    </div>
  );
}
