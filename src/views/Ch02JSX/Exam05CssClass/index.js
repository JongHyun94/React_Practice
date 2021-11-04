import "./style.css";
function Exam05CssClass(props) {
  //일반 자바스크립트 주석
  /*
    여러행에 걸쳐 주석 내용을 작성할때
     */
  const name = "React";
  return (
    <div className="card">
      {/* 해더내용 */}
      <div
        className="card-header" //부트스트랩의 Class적용
      >
        Exam05CssClass
      </div>
      <div className="card-body">
        <div
          className="react" //style class 
        >
          {name}
        </div>
      </div>
    </div>
  );
}
export default Exam05CssClass;
