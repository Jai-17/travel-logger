import { createPortal } from "react-dom";
import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";

export default function SideDrawer(props) {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  return createPortal(content, document.getElementById("drawer-hook"));
}
