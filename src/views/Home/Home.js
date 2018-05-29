import React from 'react';
import { connect } from 'react-redux';
import { fetchNewTime } from '../../redux/actionCreators';

const mapStateToProps = (state) => {
    console.log(state);
    return { currentTime: state.currentTime }
}


const mapDispatchToProps = dispatch => ({
    updateTime: ()=>dispatch(fetchNewTime())
})

const Home = (props) => {
  return (
    <div className="home">
      <h1>Welcome home!</h1>
      <p>Current time: {props.currentTime.currentTime}</p>
      <button onClick={props.updateTime}>
          Update Time
      </button>
    </div>
  );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
