import PropTypes from 'prop-types';
import React from 'react';

import LogicCalculation from '../services/logic-calculation';

class Statistics extends React.PureComponent {
  render() {
    const {
      backgroundColor,
      disableLogic,
      logic,
      onlyProgressLocations,
    } = this.props;

    return (
      <div
        className="statistics"
        style={{ backgroundColor }}
      >
        <table className="left-table">
          <tbody>
            <tr>
              <td>{logic.totalLocationsChecked({ onlyProgressLocations })}</td>
              <td>Locations Checked</td>
            </tr>
            {!disableLogic && (
              <tr>
                <td>{logic.totalLocationsAvailable({ onlyProgressLocations })}</td>
                <td>Locations Accessible</td>
              </tr>
            )}
            <tr>
              <td>{logic.totalLocationsRemaining({ onlyProgressLocations })}</td>
              <td>Locations Remaining</td>
            </tr>
            {!disableLogic && (
              <tr>
                <td>{logic.itemsNeededToFinishGame()}</td>
                <td>Items Needed to Finish Game</td>
              </tr>
            )}
            {!disableLogic && (
              <tr>
                <td>{logic.estimatedLocationsLeftToCheck()}</td>
                <td>Estimated Locations Left to Check</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

Statistics.defaultProps = {
  backgroundColor: null,
};

Statistics.propTypes = {
  backgroundColor: PropTypes.string,
  disableLogic: PropTypes.bool.isRequired,
  logic: PropTypes.instanceOf(LogicCalculation).isRequired,
  onlyProgressLocations: PropTypes.bool.isRequired,
};

export default Statistics;
