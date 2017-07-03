import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Header = ({actions, fillField}) => {

  const setDifficulty = (e) => {
      let elValue = e.target.innerHTML;
      switch(elValue) {
          case 'Easy':
              actions.setDifficulty(10, 10, 10);
              break;
          case 'Middle':
              actions.setDifficulty(15, 15, 20);
              break;
          case 'Hard':
              actions.setDifficulty(20, 20, 40);
        }
      fillField();
  };

  return (
      <header className="header">
          <h1>MineSwepper</h1>
          <p>To start the game, choose the difficulty</p>
          <div className="difficulty">
              <button onClick={setDifficulty}>Easy</button>
              <button onClick={setDifficulty}>Middle</button>
              <button onClick={setDifficulty}>Hard</button>
          </div>
      </header>
  );
};

Header.propTypes = {
    actions: PropTypes.object.isRequired,
    fillField: PropTypes.func.isRequired
};
export default Header;
