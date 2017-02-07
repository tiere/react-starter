import * as actions from "../actions";
import React, {PropTypes} from "react";
import {connect} from "react-redux";

class ExampleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exampleField: "",
    };
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <div>Local state: {JSON.stringify(this.state)}</div>
        <div>Global state: {JSON.stringify(this.props.state)}</div>

        <input type="text"
               value={this.state.exampleField}
               onChange={(e) => this.setState({exampleField: e.target.value})} />

        <input type="submit"/>
      </form>
    );
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.exampleAction(this.state.exampleField);
  }
}

ExampleForm.propTypes = {
  exampleAction: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, actions)(ExampleForm);
