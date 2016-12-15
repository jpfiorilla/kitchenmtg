import React, {Component} from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../../actions/people-actions';

class AddPlayer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            numplayers: props.numplayers
        };
    }

    render(){
        return(
            <div>
                <Button onClick={this.props.onAddPlayerClick} bsStyle="primary" className="addPlayerButton">+</Button>
                <Button onClick={this.props.onRemovePlayerClick} bsStyle="primary" className="addPlayerButton">-</Button>
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
    actions: bindActionCreators(peopleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer);
