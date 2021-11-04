import PropTypes from "prop-types";

function FunTypeProps(props) {
  const {name,version,childeren} = props;
  return (
    <div className="card">
      <div className="card-header">FunTypeProps</div>
      <div className="card-body">
          <div>
             name: {name} 
          </div>
          <div>
              version: {version}
          </div>
          {childeren}
      </div>
    </div>
  );
}
FunTypeProps.defaultProps = {
  version: 17
};

//타입과 필수 설정
FunTypeProps.propTypes = {
  name: PropTypes.string.isRequired,
  verstion: PropTypes.number
}
export default FunTypeProps;
