import { useState, useRef } from "react";
import useScroll from "../../hooks/use_scroll";
import css from "./styles.scss";

const Expander = ({ text, children }) => {
  const [expanded, setExpanded] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [padding, setPadding] = useState(0);

  const expanderRef = useRef();
  const headerRef = useRef();

  const headerHeight = () => {
    const header = headerRef.current;
    if (!header) return 0;

    return header.getBoundingClientRect().height;
  };

  const scrolledPast = () => {
    const expander = expanderRef.current;
    if (!expander) return;

    return window.pageYOffset > expander.offsetTop;
  };

  useScroll(() => {
    if (scrolledPast()) {
      setSticky(true);
      setPadding(headerHeight());
    } else {
      setSticky(false);
      setPadding(0);
    }
  });

  return (
    <div ref={expanderRef} className={`${css.expander} ${expanded && css.expanded} ${sticky && css.sticky}`}>
      <div ref={headerRef} className={css.header} onClick={() => setExpanded(e => !e)}>
        {text}
      </div>

      <div className={css.inner} style={{ paddingTop: `${padding}px` }}>
        {children}
      </div>
    </div>
  );
};

export default Expander;
