import React from "react";
class ClassType extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor() 실행");
    this.state = {
      startNum: 0,
      number: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);   
  }

  handleIncrement(event) {
   this.setState({
     ...this.state,
     number: this.state.number + 1
   })
  }

  //부모에서 props 이 변경될때 실행됨
  static getDerivedStateFromProps(props, prevstate) {
    console.group("getDerivedStateFromProps() 실행");
    console.log("props: ", props);
    console.log("prevState: ", prevstate);
    console.groupEnd();
    //props가 갱신될 때 상태값도 같이 갱신되도록 새로운 상태 리턴
    if (prevstate.startNum !== props.startNum) {
      return {
        startNum: props.startNum,
        number: props.startNum,
      };
    } else {
      return null;
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    console.group("shouldComponentUpdate()실행");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.groupEnd();
    if(nextState.number%2 === 0){
      //짝수만 출력해라
      return true;
    } else {
      //홀수는 출력안됨
      return false;
    }

    //render 실행 유무 
    //return true;
  }

  render() {
    console.log("render()실행");
    return (
      <div className="card">
        <div className="card-header">ClassType</div>
        <div className="card-body">
          <div>number: {this.state.number}</div>
          <button className="btn btn-info btn-sm mt-2" onClick={this.handleIncrement}>증가</button>
        </div>
      </div>
    );
  }

  //컴포넌트가 업데이트될때
  componentDidUpdate() {
    console.log("componentDidUpdate() 실행");
  }

  //컴포넌트가 Dom에 다 올라옴 jquery를 사용 여기서
  componentDidMount() {
    console.log("componentDidMount()실행");
  }

  //컴포넌트가 사라질때
  componentWillUnmount(){
    console.log("componentWillUnmount()");
  }
}
export default ClassType;
