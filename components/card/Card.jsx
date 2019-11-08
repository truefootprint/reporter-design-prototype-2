import css from "./styles.scss";

const Card = ({ children }) => (
  <div className={css.card}>
    <div className={css.colored_bar} />

    <div className={css.inner}>
      {children}
    </div>
  </div>
);

export default Card;
