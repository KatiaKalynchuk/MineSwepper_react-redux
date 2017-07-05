import React, {Component} from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import Cell from './Cell';

class Field extends Component {

    componentWillReceiveProps(nextProps) {
        if(this.props.options.height !== nextProps.options.height ||
           this.props.options.isLose !== nextProps.options.isLose ||
           this.props.options.isWin !== nextProps.options.isWin) {
              this.props.fillField();
        }
    }

    render () {
        const {options, fillField, actions} = this.props;
        return (
            <div className="field">
                <div className="row">
                    <div className="cell">
                        {
                            options.field.map((row) => {
                                return (
                                <Cell options={options}
                                    actions={actions}
                                    fillField={fillField}
                                    row={row}
                                    key={shortid.generate()}/>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Field.propTypes = {
    actions: PropTypes.object.isRequired,
    fillField: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired
};

export default Field;
