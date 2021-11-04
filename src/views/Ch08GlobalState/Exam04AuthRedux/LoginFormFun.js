import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSetUidAction } from "redux/auth-reducer";

function LoginFormFun(props) {
  const [uid, setUid] = useState("");
  
  //상태값 받아옴
  const globalUid = useSelector(state => state.authReducer.uid);
  const dispatch = useDispatch();

  const login = (event) => {
    dispatch(createSetUidAction(uid));
    //액션 생성 함수 
    //직접해도 되지만 유지보수를 위해 위와 같이 함수 형태로 선언함
    //dispatch({type:"auth/setUid", uid});
  };

  const logout = (event) => {
    dispatch(createSetUidAction(""));
  };

  const handleChange = (event) => {
    setUid(event.target.value);
  };
  return (
    <div className="card">
      <div className="card-header">LoginFormFun</div>
      <div className="card-body">
        <div className="form-group row">
          <label htmlFor="uid" className="col-sm-2 col-form-label">
            User ID
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="uid" value={uid} onChange={handleChange} />
          </div>
        </div>
        {globalUid === "" ? (
          <button className="btn btn-success btn-sm" onClick={login}>
            로그인
          </button>
        ) : (
          <button className="btn btn-success btn-sm" onClick={logout}>
            로그아웃
          </button>
        )}
      </div>
    </div>
  );
}
export default LoginFormFun;
