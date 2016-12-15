import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as playerActions from '../../actions/player-actions';

class AddPlayer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            numplayers: props.numplayers
        };
    }

    render(){
        let addPlayerDisable, removePlayerDisable;
        let {numplayers} = this.state;
        numplayers <= 2 ? removePlayerDisable = true : removePlayerDisable = false;
        numplayers >= 8 ? addPlayerDisable = true : addPlayerDisable = false;
        return(
            <div>
                <Button onClick={this.props.onAddPlayerClick} bsStyle="primary" className="addPlayerButton" disabled={addPlayerDisable}>+</Button>
                <Button onClick={this.props.onRemovePlayerClick} bsStyle="primary" className="addPlayerButton" disabled={removePlayerDisable}>-</Button>
            </div>
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
