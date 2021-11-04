import { Link, useHistory } from "react-router-dom";
import { getBoard, deleteBoard } from "./data";
import qs from "qs";

function BoardRead(props) {
  const bno = parseInt(props.match.params.bno);
  console.log("hi1");
  const board = getBoard(bno);
  console.log("board1",board);
  console.log("bhit",board.bhitcount);
  console.log("hi2");

  const queryString = qs.parse(props.location.search, {ignoreQueryPrefix: true});
  const pageNo = parseInt(queryString.pageNo);

  //브라우저가 가지는 history 객체를 이용하겠다.
  const history = useHistory();

  //console.log(pageNo);
  const handleRemove = (event) => {
    deleteBoard(bno);
    //history.push("/ch06?pageNo="+pageNo); // URL 변경 배열에 추가하면 변경효과 남
    //props.history.goBack();
    history.goBack();
  };

  console.log("bhitcount",board.bhitcount);
  console.log("board2",board);
  
  return (
    <div className="card">
      <div className="card-header">BoardRead</div>
      <div className="card-body">
        <div>
          <p>bno: {board.bno}</p>
          <p>btitle: {board.btitle}</p>
          <p>bcontent: {board.bcontent}</p>
          <p>bwriter: {board.bwriter}</p>
          <p>bdate: {board.bdate}</p>
          <p>bhitcount: {board.bhitcount}</p>
        </div>
        <div>
          <Link to={"/ch06?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">
            목록
          </Link>
          <Link to={`/ch06/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">
            수정
          </Link>
          <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
export default BoardRead;
