import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/actions';
import Header from '../components/Header';
import Field from '../components/Field';

class App extends Component {

  render() {
      const {options,actions} = this.props;

      const fillField = () => {
          //метод заполнения поля
          let field = [];
          for (let i = 0; i < this.props.options.width; i++) { //проходим по колонкам
              let tmp = []; //создаем колонку
              for (let j = 0; j < this.props.options.height; j++) { //заполняем ее ячейками
                  tmp.push({
                      isMine: false, //стоит ли мина
                      mineAround: 0, //мин рядом
                      isOpen: false, //открыта ли
                      coordinates: {x: i, y: j},
                      isFlag: false
                    }
                  );
              }
              field.push(tmp); //вставляем колонку в поле
          }
          setBomb(field);
          // цикл расстановки мин:
      }
      const setBomb = (field) => {
          for (let i = 0; i < options.bombCount;) { // пока не все мины расставлены
              let x = parseInt(Math.random() * options.width - 0.0001); //генерируем координату Х
              let y = parseInt(Math.random() * options.height - 0.0001); //генерируем координату У
              // console.log(this.props.options)
              if (!(field[x][y].isMine)) { // если сдесь еще нет мины
                  field[x][y].isMine = true;
                  i++;
              }
          }
          startMineCounter(field);
      }

      const startMineCounter = (field) => { //пробегает по всем ячейкам и вызывает расчет кол-ва мин рядом
          for (let i = 0; i < options.width; i++) {
              for (let j = 0; j < options.height; j++) {
                mineAroundCounter(i, j, field);
              }
          }
          actions.updateField(field);
      }

      const mineAroundCounter = (x, y, field) => { // считает количество мин вокруг ячейки и записывает его в нее
          let xStart = x > 0 ? x-1 : x;
          let yStart = y > 0 ? y-1 : y;
          let xEnd = x < options.width-1 ? x+1 : x;
          let yEnd = y < options.height-1 ? y+1 : y;
          let count = 0;
          for (let i = xStart; i <= xEnd; i++){
              for (let j = yStart; j <= yEnd; j++){
                if (field[i][j].isMine && !(x == i && y == j)) count++;
              }
          }
          field[x][y].mineAround = count;
      };

          return (
              <div className="index">
                <Header actions={actions} fillField={fillField}/>
                <Field options={options} actions={actions} fillField={fillField}/>
              </div>
          );
      }

}

App.propTypes = {
    actions: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        options: state.reducerOptions
    };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
