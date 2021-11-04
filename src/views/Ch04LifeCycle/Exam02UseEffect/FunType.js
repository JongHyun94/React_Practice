import { useEffect, useState } from "react";

function FunType(props) {
  const [state, setState] = useState({
    startNum: 0,
    number: 0,
  });

  //너무 많은 리렌더링이 발생함 따지면 상태변경되서 리렌더링 작업 반복되서
  // setState({
  //   startNum: props.startNum,
  //   number: props.startNum
  // })
  useEffect(() => {
    console.log("마운트, 업데이트후에 실행");
    return(()=>{
      console.log("업데이트전, 언마운트시 실행");
    });
  });

  useEffect(() => {
    console.log("마운트 실행");
    return (() => {
      console.log("언마운트시 실행");
    });
  }, []);

  useEffect(() => {
    console.log("props:마운트 실행");
    setState({
      startNum: props.startNum,
      number: props.startNum,
    });
    return (() => {
      console.log("props:언마운트시 실행");
    });
  }, [props]);

  useEffect(() => {
    console.log("state:마운트 실행");
    return (() => {
      console.log("state:언마운트시 실행");
    });
  }, [state]);

  const handleIncrement = (event) => {
    setState({
      ...state,
      number: state.number + 1,
    });
  };
  return (
    <div className="card">
      <div className="card-header">FunType</div>
      <div className="card-body">
        <div>number: {state.number}</div>
        <button className="btn btn-info btn-sm mt-2" onClick={handleIncrement}>
          증가
        </button>
      </div>
    </div>
  );
}
export default FunType;
