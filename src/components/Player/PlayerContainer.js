import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../../actions/people-actions';
import { Button, ButtonToolbar } from 'react-bootstrap';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);

    this.onAddPlayerClick = this.onAddPlayerClick.bind(this);
    this.onRemovePlayerClick = this.onRemovePlayerClick.bind(this);
    this.onCitePlayersClick = this.onCitePlayersClick.bind(this);

    this.state = {
      numplayers: props.numplayers
    };
  }

  onAddPlayerClick(){
    this.state.numplayers >= 8 ?
    console.log("can't exceed 8 players") :
    this.setState((prevState, props) => {
      return {numplayers: prevState.numplayers + 1};
    });
  }

  onRemovePlayerClick(){
    this.state.numplayers <= 2 ?
    console.log('must have at least 2 players') :
    this.setState((prevState, props) => {
      return {numplayers: prevState.numplayers - 1};
    });
  }

  onCitePlayersClick(){
    console.log(this.state.numplayers);
  }

  render() {
    const {numplayers} = this.state;
    // console.log('numplayers', numplayers);
    return (
      <div className="wholeHomePage">
        <div className="numPlayersCounter">
          <p>Numplayers: {numplayers}</p>
          <AddPlayer numplayers={numplayers} onAddPlayerClick={this.onAddPlayerClick} onRemovePlayerClick={this.onRemovePlayerClick} />
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
    actions: bindActionCreators(peopleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
