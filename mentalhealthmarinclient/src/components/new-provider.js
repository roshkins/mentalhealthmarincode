import React, { Component } from "react";
import { PropTypes } from "prop-types";

class NewProvider extends Component {
  render() {
    return (
      <div className="NewProvider">
        <h1> Add your own! </h1>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.addProvider();
          }}
        >
          <input
            type="text"
            placeholder="common name"
            value={this.props.commonName}
            onChange={this.props.commonNameChange}
          />
          <br />
          <input
            type="email"
            placeholder="email address for provider"
            value={this.props.email}
            onChange={this.props.emailChange}
          />
          <br />
          <input
            type="text"
            placeholder="formal name"
            value={this.props.formalName}
            onChange={this.props.formalNameChange}
          />
          <br />
          <textarea
            placeholder="usage instructions"
            value={this.props.usageInstructions}
            onChange={this.props.usageInstructionsChange}
          />
          <br />
          <input type="submit" value="Click to Add" />
        </form>
      </div>
    );
  }
}

NewProvider.propTypes = {
  commonName: PropTypes.string.isRequired,
  commonNameChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  emailChange: PropTypes.func.isRequired,
  formalName: PropTypes.string.isRequired,
  formalNameChange: PropTypes.func.isRequired,
  usageInstructions: PropTypes.string.isRequired,
  usageInstructionsChange: PropTypes.func.isRequired
};

export default NewProvider;
