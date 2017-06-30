import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/actions';
import Header from '../components/Header';
import Field from '../components/Field';

class Point {
    constructor() {
        this.isMine = false; //стоит ли мина
        this.mineAround = 0; //мин рядом
        this.isOpen = false; //открыта ли
    }
}
class App extends Component {
    constructor(props) {
        super(props);
    }
    fillField() {
        //метод заполнения поля
        let field = [];
        for (let i = 0; i < this.props.options.width; i++) { //проходим по колонкам
            let tmp = []; //создаем колонку
            for (let j = 0; j < this.props.options.height; j++) { //заполняем ее ячейками
                tmp.push(new Point());
            }
            field.push(tmp); //вставляем колонку в поле
        }
        this.setBomb(field);
        // цикл расстановки мин:
    }
    setBomb(field) {
        for (let i = 0; i < this.props.options.bombCount;) { // пока не все мины расставлены
            let x = parseInt(Math.random() * this.props.options.width - 0.0001); //генерируем координату Х
            let y = parseInt(Math.random() * this.props.options.height - 0.0001); //генерируем координату У
            // console.log(this.props.options)
            if (!(field[x][y].isMine)) { // если сдесь еще нет мины
                field[x][y].isMine = true;
                i++;
            }
        }
        this.props.actions.updateField(field);
    }

    componentWillMount(){
        this.fillField();
    }

    render() {
        const {options} = this.props;
        return (
            <div className="index">
                <Header/>
                <Field field={options.field}/>
            </div>
        );
    }

}

App.propTypes = {
  actions: PropTypes.object.isRequired
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
