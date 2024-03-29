import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../actions/people-actions';
import PeopleList from './PeopleList';
import PersonInput from './PersonInput';

class PeopleContainer extends Component {
  constructor(props) {
    super(props);

    this.onAddPlayerClick = this.onAddPlayerClick.bind(this);

    this.state = {
      people: [],
      numplayers: props.numplayers
    };
  }

  onAddPlayerClick(){
    this.setState((prevState, props) => {
      return {numplayers: prevState.numplayers + 1};
    });
  }

  render() {
    const {people, numplayers} = this.state;
    // console.log('numplayers', numplayers);
    return (
      <div>
        <PersonInput addPerson={this.props.actions.addPerson} />
        <PeopleList people={people} />
        <div>
          <p>Numplayers: {numplayers}</p>
          <button onClick={this.onAddPlayerClick}>Add Player</button>
        </div>
      </div>
    );
  }
}

PeopleContainer.propTypes = {
  people: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    people: state.people,
    numplayers: state.numplayers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(peopleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
