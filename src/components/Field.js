import React, {Component} from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
// import Square from './Square'

class Field extends Component {
  render(){
    const {field} = this.props;

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
                        <div className="square" key={shortid.generate()}>
                          {cell.mineAround}
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
