import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Header = ({actions, fillField}) => {

  const setDifficulty = (e) => {
      let elValue = e.target.innerHTML;
      switch(elValue) {
          case 'easy':
            actions.setDifficulty(10, 10, 10);
      }
      switch(elValue) {
          case 'middle':
            actions.setDifficulty(15, 15, 15);
      }
      switch(elValue) {
          case 'high':
            actions.setDifficulty(20, 20, 20);
      }
  };

  const start = () => {
      fillField();
  };

  return (
      <header className="header">
          <h1>MineSwepper</h1>
          <div className="difficulty">
              <button onClick={setDifficulty}>easy</button>
              <button onClick={setDifficulty}>middle</button>
              <button onClick={setDifficulty}>high</button>
          </div>
          <button onClick={start}>Start</button>
      </header>
  );
};

Header.propTypes = {
    actions: PropTypes.object.isRequired,
    fillField: PropTypes.func.isRequired
};
export default Header;
