import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { createSetColorAction } from "redux/color-reducer";

function ComBFun(props) {
  //상태 정보를 가져오겟다. state (store의) 에서 colorReducer의 color 를 가져옴
  const color = useSelector((state) => state.colorReducer.color);

  //store의 dispatch 함수를 얻어낸다.
  const dispatch = useDispatch();

  // const store = useStore();

  // const [color, setColor] = useState(store.getState().colorReducer.color);
  // const dispatch = store.dispatch;

  // useEffect(() => {
  //   console.log(store.getState())
  // }, []);

  //console.log(color);

  const handleChange = (event) => {
    // setColor('green');
    
    dispatch(createSetColorAction('green'));

    // dispatch(createSetColorAction("green"));
  };
  return (
    <div className="card">
      <div className="card-header">ComBFun</div>
      <div className="card-body">
      <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>
          색깔 변경
        </button>
        <div style={{ backgroundColor: color }}>내용:</div>
      </div>
    </div>
  );
}
export default ComBFun;
