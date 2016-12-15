import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as playerActions from '../../actions/player-actions';
import { Button } from 'react-bootstrap';

class HomePageContainer extends Component {
  constructor(props) {
    super(props);

    this.onAddPlayerClick = this.onAddPlayerClick.bind(this);
    this.onRemovePlayerClick = this.onRemovePlayerClick.bind(this);

    this.state = {
      numplayers: props.numplayers
    };
  }

  onAddPlayerClick(){
    return this.state.numplayers >= 8 ?
    console.log("can't exceed 8 players") :
    this.setState((prevState, props) => {
      return {numplayers: prevState.numplayers + 1};
    });
  }

  onRemovePlayerClick(){
    return this.state.numplayers <= 2 ?
    console.log('must have at least 2 players') :
    this.setState((prevState, props) => {
      return {numplayers: prevState.numplayers - 1};
    });
  }

  render() {
    let {numplayers} = this.state;
    let removePlayerDisable, addPlayerDisable;
    removePlayerDisable = numplayers <= 2 ? true : false;
    addPlayerDisable = numplayers >= 8 ? true : false;
    return (
      <div className="wholeHomePage">
        <div className="numPlayersCounter">
          <p>Numplayers: {numplayers}</p>
          <Button onClick={this.onAddPlayerClick} bsStyle="primary" className="addPlayerButton" disabled={addPlayerDisable}>+</Button>
          <Button onClick={this.onRemovePlayerClick} bsStyle="primary" className="addPlayerButton" disabled={removePlayerDisable}>-</Button>
        </div>
      </div>
    );
  }
}

// HomePageContainer.propTypes = {
//   actions: PropTypes.object.isRequired
// };

function mapStateToProps(state, props) {
  return {
    numplayers: state.numplayers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(playerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
