import style from "./style.module.css";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(style);

function Exam01Css(props) {
  //const [state, setState] = useState(false);
  const [state, setState] = useState({
    userId: null,
  });
  

  return (
    <div className="card">
      <div className="card-header">Exam01Css</div>
      <div className="card-body">
        <div className={style.wrapper}>
          Hello, <span className="something">React1</span>.
        </div>

        <div className={`${style.wrapper} ${style.inverted} mt-3`}>
          Hello, <span className="something">React2</span>.
        </div>

        <div className={style.wrapper + " " + style.inverted + " mt-3"}>
          Hello, <span className="something">React3</span>.
        </div>

        {/* 로그인 시 */}
        {state.userId ? (
          <div className={classNames(style.wrapper, "mt-3")}>
            Hello, <span className="something">React4</span>.
          </div>
        ) : (
          <div className={classNames(style.wrapper, style.inverted, "mt-3")}>
            Hello, <span className="something">React4</span>.
          </div>
        )}
        <div className={classNames(style.wrapper, { [style.inverted]: state.userId === null }, "mt-3")}>
          Hello, <span className="something">React5</span>.
        </div>
        <div className={cx("wrapper",  {inverted:state.userId === null }, "mt-3")}>
          Hello, <span className="something">React6</span>.
        </div>
      </div>
    </div>
  );
}
export default Exam01Css;
