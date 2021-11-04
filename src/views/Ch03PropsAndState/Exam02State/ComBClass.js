import React from "react";

class ComBClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        number: 0,
    };
  }

  addNumber1 = (event) => {
    this.setState({
        number: this.state.number + 1
    });
    //비동기여서 값이 기존 0값이 남아서 두번 실행됨
    this.setState({
        number: this.state.number + 1
    });
  };

  //call back 함수로 동기 효과가 나옴
  addNumber2 = (event) => {
    this.setState((prevState)=>{
        return {
            number: prevState.number + 1
        };
    });
    this.setState((prevState)=>{
        return {
            number: prevState.number + 1
        };
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">ComBClass</div>
        <div className="card-body">
          <h3>{this.state.number}</h3>
          <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber1}>숫자 증가1</button>
          <button className="btn btn-info btn-sm mr-2" onClick={this.addNumber2}>숫자 증가2</button>
        </div>
      </div>
    );
  }
}

export default ComBClass;
