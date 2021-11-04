import React from "react";
import ColorContext from "./ColorContext";
class ComAClass extends React.Component {
  //정적 속성
  static contextType = ColorContext;

  //생성자
  constructor(props){
    super(props);
    this.state = {};
    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.context.setColor("red");
  }
  //인스턴스 메서드

  render() {
    return (
      <div className="card">
        <div className="card-header">ComAClass</div>
        <div className="card-body">
          <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
          <div style={{backgroundColor:this.context.color}}>
            내용:
          </div>
        </div>
      </div>
    );
  }
}
export default ComAClass;
