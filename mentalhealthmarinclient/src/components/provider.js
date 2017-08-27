import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Provider extends Component {
  render() {
    const provider = this.props.provider;
    return (
      <div className="Provider">
        <h1 className="ProviderCommon">
          {provider.common_name}
        </h1>
        <h2 className="ProviderFormal">
          {provider.formal_name}
        </h2>
        <table className="ProviderDetails">
          <tbody>
            <tr>
              <th>Email</th>
              <td>
                {provider.email_address}
              </td>
            </tr>
          </tbody>
        </table>
        <p className="ProviderUsage">
          {provider.usage_instructions}
        </p>
      </div>
    );
  }
}

Provider.propTypes = {
  provider: PropTypes.object.isRequired,
  deleteProvider: PropTypes.func.isRequired
};

export default Provider;
