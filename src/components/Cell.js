import React, {Component} from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';


class Cell extends Component {
    render() {
        const {actions, options, row} = this.props;

        const openCell = (event) => {
            let x = event.target.getAttribute('data-x');
            let y = event.target.getAttribute('data-y');
            if (!options.field[x][y].isOpen) {
                recurceOpen(x, y);
            }
        };

        const hasClass = (x, y) => {
            return options.field[x][y].isOpen == true;
        };

        const setFlag = (event) => {
            let coord = getDataAtribute(event.target);
            if (options.field[coord.x][coord.y].isOpen) return;
            this.props.actions.setFlag(coord.x, coord.y);
            event.preventDefault();
        };

        const getDataAtribute = (elem) => {
            let x = elem.getAttribute('data-x');
            let y = elem.getAttribute('data-y');
            return {x, y};
        };

        const recurceOpen = (x, y) => { // ф-ия рекурсивного открытия ячеек
            if (options.field[x][y].isOpen) {
                return;
            }
            if (options.field[x][y].isMine) {
                alert('Game over');
                actions.lose();
            } else {
                actions.openCell(x, y);
                actions.countInc();
                if (options.width * options.height - options.bombCount == options.openCount) { // если ячейка последняя
                    alert('You win!'); // победа
                    actions.win();
                }

                if (options.field[x][y].mineAround == 0) { //если рядом мин нет, то
                    let xStart = x > 0 ? x-1 : x;
                    let yStart = y > 0 ? y-1 : y;
                    let xEnd = x < options.width-1 ? x+1 : x;
                    let yEnd = y < options.height-1 ? y+1 : y;
                    for (let i = xStart; i <= xEnd; i++) { //пробегаемся по всем соседним ячейкам
                        for (let j = yStart; j <= yEnd; j++) {
                            recurceOpen(i,j); // и открываем их
                        }
                    }
                }
            }
        };

        return (
            <div>
                {row.map((cell)=> {
                    return (
                        <div onClick={openCell}
                             onContextMenu={setFlag}
                             data-x={cell.coordinates.x}
                             data-y={cell.coordinates.y}
                             className={`square ${hasClass(cell.coordinates.x, cell.coordinates.y) ? 'square-open' : ''}
                                         ${options.field[cell.coordinates.x][cell.coordinates.y].isFlag ? 'flag' : ''}`}
                             key={shortid.generate()}>
                          <span>{cell.mineAround}</span>
                        </div>
                    );
                  })}
            </div>
        );
    }
}

Cell.propTypes = {
    actions: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    row: PropTypes.array.isRequired
};

export default Cell;
