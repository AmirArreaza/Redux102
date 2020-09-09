import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import { connect } from "react-redux";
import * as actionTypes from '../reducers/actions';

class Persons extends Component {

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdd} />
        {this.props.per.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onPersonDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    per: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      onPersonAdd: () => dispatch({ type: actionTypes.ADD_PERSON}),
      onPersonDelete: (id) => dispatch({ type: actionTypes.DELETE_PERSON, id: id}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);