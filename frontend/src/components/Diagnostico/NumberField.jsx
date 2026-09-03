import styles from "../../Pages/Diagnostico/Diagnostico.module.css";

export function NumberField({ label, hint, prefix, value, onChange }) {
  return (
    <div className={styles.field}>
      <div className={styles.lab}>
        <b>{label}</b>
        {hint && <span>{hint}</span>}
      </div>
      <div className={styles.inp}>
        {prefix && <span className={styles.pre}>{prefix}</span>}
        <input
          name={label}
          type="text"
          minLength="1"
          maxLength="10"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
