import { deleteBoard, downloadAttach, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BoardRead(props) {
  const bno = parseInt(props.match.params.bno);
  const queryString = qs.parse(props.location.search, { ignoreQueryPrefix: true });
  const pageNo = parseInt(queryString.pageNo);

  //비동기 호출
  //const board = readBoard(bno); //변수로 지정하면 상태가 변화가 되지않아서 재실행 되지않음 업데이트가 안됨.
  const [board, setBoard] = useState({});

  useEffect(() => {
    const work = async () => {
      try {
        //update될때 다 실행 되기 때문에 무한루프 됨
        const response = await readBoard(bno);
        setBoard(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    work();
  }, [bno]);

  const handleRemove = async (event) => {
    try {
      await deleteBoard(bno);
      props.history.goBack();
    } catch (error) {
      console.log(error);
      //history.push("/error");
    }
  };

  // 방법 1
  const [imgSrc, setImgSrc] = useState(null);
  const imgTag = useRef();

  useEffect(() => {
    if(board.battachoname) {
      const work = async () => {
        try {
          const response = await downloadAttach(board.bno);
          setImgSrc(URL.createObjectURL(response.data)); //img 데이터를 데이터로 바로 넣지말고 url 오브젝트로 만들어서 넘겨줘야함
          //imgTag.current.src = URL.createObjectURL(response.data); 
        } catch (error) {
          console.log(error);
        }
      };
      work();
    }
  },[board]);

  // 방법 2
  const authToken = useSelector(state => state.authReducer.authToken);

  return (
    <div className="card">
      <div className="card-header">BoardRead</div>
      <div className="card-body">
        {board && (
          <>
            <div className="row">
              <div className="col-md-6">
                <p>bno: {board.bno}</p>
                <p>btitle: {board.btitle}</p>
                <p>bcontent: {board.bcontent}</p>
                <p>bwriter: {board.bwriter}</p>
                <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
                <p>bhitcount: {board.bhitcount}</p>
                <p>battachoname: {board.battachoname}</p>
                <p>battachsname: {board.battachsname}</p>
                <p>battachtype: {board.battachtype}</p>
              </div>
              <div className="col-md-6">
                {board.battachoname && 
                  <div>
                    {/* 방법 1 axios */}
                    <img src={imgSrc} alt="" width= "200" ref={imgTag}/>
                    <hr/>
                    {/* 방법 2 direct 요청 헤더에 authToken이 들어가지않아요 */}
                    <img src={`http://localhost:8080/boards/battach/${board.bno}?authToken=${authToken}`} alt="" width= "200"/>
                  </div>
                }
              </div>
            </div>
            <div>
              <Link to={"/ch09/exam04?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">
                목록
              </Link>
              <Link to={`/ch09/exam04/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">
                수정
              </Link>
              <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>
                삭제
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default BoardRead;
