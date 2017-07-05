const initialState = {
    isMine: false,
    mineAround: 0, //мин рядом
    isOpen: false, //открыта ли
    coordinates: {x: '', y: ''},
    isFlag: false
};

export default function reducerPointer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
