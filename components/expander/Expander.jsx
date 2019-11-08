import { useState } from "react";
import css from "./styles.scss";

const Expander = ({ text, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${css.expander} ${expanded && css.expanded}`}>
      <div className={css.header} onClick={() => setExpanded(e => !e)}>
        {text}
      </div>

      <div className={css.inner}>
        {children}
      </div>
    </div>
  );
};

export default Expander;
