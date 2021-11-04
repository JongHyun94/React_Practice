import React from "react";
import { connect } from "react-redux";
import { createSetColorAction } from "redux/color-reducer";
class ComAClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setColor("red");
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">ComAClass</div>
        <div className="card-body">
        <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
          <div style={{backgroundColor:this.props.color}}>
            내용:
          </div>
        </div>
      </div>
    );
  }
}

//상태를 props로 전달한다 <- store에서 state가져옴
const mapStateToProps = (state) => {
  return {color: state.colorReducer.color};
};
//디스패치를 props로 전달한다 <- store에서 dispatch가져옴
const mapDispatchToProps = (dispatch) => {
  return {
    setColor: (color) => dispatch(createSetColorAction(color))
  };
};
//ComAClass에서 사용하는 이름이 color, setColor 이다.

//connect가 호출하는게 함수여서 함수를 호출
//store와 component를 연결시킴 참조를 넘겨줌
export default connect(mapStateToProps, mapDispatchToProps)(ComAClass);
