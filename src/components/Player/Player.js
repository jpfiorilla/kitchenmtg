import React, {Component} from 'react';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  render() {
    const {people} = this.props;

    return (
      <div>
        <PersonInput addPerson={this.props.actions.addPerson} />
        <PeopleList people={people} />
      </div>
    );
  }
}