import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProvider, loadProviders } from "../actions/providers";
import Provider from "../components/provider";

class Providers extends Component {
  constructor(props) {
    super(props);
    props.loadProviders();
  }
  render() {
    return (
      <div className="Providers">
        {this.props.providers.map((provider, index) =>
          <Provider
            key={index}
            provider={provider}
            deleteProvider={() => this.props.deleteProvider(provider.id)}
          />
        )}
      </div>
    );
  }
}

Providers.propTypes = {
  providers: PropTypes.array.isRequired,
  deleteProvider: PropTypes.func.isRequired,
  loadProviders: PropTypes.func.isRequired
};
const mapStateToProps = (state, ownProps) => {
  const { Providers: providers } = state;
  return {
    providers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loadProviders: () => dispatch(loadProviders()),
    deleteProvider: providerId => dispatch(deleteProvider(providerId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Providers);
