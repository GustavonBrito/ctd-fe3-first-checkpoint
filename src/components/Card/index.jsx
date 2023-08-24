import styles from "./card.module.css";
export default function Card({ color }) {
  const hexColor = {
    fontSize: "2rem",
    backgroundColor: color.colorHex,
  };

  return (
    <>
      <div className={styles.blockControlImages}>
        <div className={styles.colorCard} style={hexColor}>
          {color.name}
          {color.colorHex}
        </div>
      </div>
    </>
  );
}
// style={{fontSize='2rem', backgroundColor: colorHex}
// styles = { fontSize: "2rem", backgroundColor: colorHex }
