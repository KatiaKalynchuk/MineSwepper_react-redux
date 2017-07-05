import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Header = ({actions}) => {

   const setDifficulty = (e) => {
       let elValue = e.target.innerHTML;
       switch(elValue) {
           case 'Easy':
               actions.setDifficulty(10, 10, 10);
               break;
           case 'Normal':
               actions.setDifficulty(15, 15, 20);
               break;
           case 'Hard':
               actions.setDifficulty(20, 20, 40);
       }
   };

   return (
       <header className="header">
           <h1>MineSwepper</h1>
           <p>To start the game, choose the difficulty</p>
           <div className="difficulty">
               <button onClick={setDifficulty}>Easy</button>
               <button onClick={setDifficulty}>Normal</button>
               <button onClick={setDifficulty}>Hard</button>
           </div>
       </header>
   );
};

Header.propTypes = {
    actions: PropTypes.object.isRequired
};
export default Header;
