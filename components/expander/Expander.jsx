import { useState, useEffect, useRef } from "react";
import smoothscroll from "smoothscroll-polyfill";
import useScroll from "../../hooks/use_scroll";
import css from "./styles.scss";

const Expander = ({ text, className, children }) => {
  const [expanded, setExpanded] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [padding, setPadding] = useState(0);

  const expanderRef = useRef();
  const headerRef = useRef();

  const toggleExpanded = () => {
    const expander = expanderRef.current;
    if (!expander) return;

    setExpanded(e => !e);
    setTimeout(() => window.scroll({ top: expander.offsetTop, behavior: "smooth" }), 10);
  };

  const headerHeight = () => {
    const header = headerRef.current;
    if (!header) return 0;

    return header.getBoundingClientRect().height;
  };

  const scrolledAbove = () => {
    const expander = expanderRef.current;
    if (!expander) return;

    return window.pageYOffset < expander.offsetTop;
  };

  const scrolledBelow = () => {
    const expander = expanderRef.current;
    if (!expander) return;

    return window.pageYOffset > expander.offsetTop + expander.offsetHeight;
  };

  useScroll(() => {
    if (scrolledAbove()) {
      setSticky(false);
      setPadding(0);
    } else {
      setPadding(headerHeight());

      if (!scrolledBelow()) {
        setSticky(true);
      }
    }
  });

  useEffect(() => { smoothscroll.polyfill(); }, []);

  return (
    <div ref={expanderRef} style={{ paddingTop: `${padding}px` }} className={`${css.expander} ${expanded && css.expanded} ${sticky && css.sticky} ${className}`}>
      <div ref={headerRef} className={css.header} onClick={toggleExpanded}>
        <div className={css.colored_bar} />

        <div className={css.text}>
          {text}
        </div>
      </div>

      <div className={css.inner}>
        {children}
      </div>
    </div>
  );
};

export default Expander;
