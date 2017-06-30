import React, {Component} from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
// import Square from './Square'
import * as actions from '../actions/actions';
class Field extends Component {
  render(){
    const {field, actions} = this.props;
    const openCell = (event) => {
      let x = event.target.getAttribute('data-x');
      let y = event.target.getAttribute('data-y');
      if (!field[x][y].isOpen){
        this.props.actions.openCell(x,y);
      }
    };

    const hasClass = (x, y) => {
      return field[x][y].isOpen == true;
    };
    return (
      <div className="field">
        <div className="row">
          <div className="cell">
            {
              field.map((row) => {
                return (<div key={shortid.generate()}>
                  <div>
                    {row.map((cell)=> {
                      return (
                        <div onClick={openCell}
                             data-x={cell.coordinates.x}
                             data-y={cell.coordinates.y}
                             className={`square ${hasClass(cell.coordinates.x, cell.coordinates.y) ? 'square-open' : ''}`}
                             key={shortid.generate()}>
                          <span>{cell.mineAround}</span>
                        </div>
                      )
                    })}
                    </div>
                </div>)
               })
            }
          </div>
        </div>
      </div>
    )
  }
}

Field.propTypes = {
  item: PropTypes.array.isRequired,
  index: PropTypes.array.isRequired
};

export default Field;
