import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../../actions/people-actions';
// import PeopleList from './PeopleList';
// import PersonInput from './PersonInput';
import HomePage from './HomePage';
import AddPlayer from './AddPlayer';

class HomePageContainer extends Component {
  constructor(props) {
    super(props);

    this.onAddPlayerClick = this.onAddPlayerClick.bind(this);

    this.state = {
      numplayers: props.numplayers
    };
  }

  onAddPlayerClick(){
    this.setState((prevState, props) => {
      return {numplayers: prevState.numplayers + 1};
    });
  }

  render() {
    const {numplayers} = this.state;
    // console.log('numplayers', numplayers);
    return (
      <div className="wholeHomePage">
        <div className="numPlayersCounter">
          <p>Numplayers: {numplayers}</p>
          <button onClick={this.onAddPlayerClick}>Add Player</button>
        </div>
        <HomePage />
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
