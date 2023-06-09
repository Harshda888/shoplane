import { ActionTypes } from "../constants/actions-types";

const initialState = {
  numberCart: 0,
  Carts: [],
};

export const cartReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      
      if (state.numberCart === 0) {
        let item = {
          ...payload,
          quantity: 1,
        };
        state.Carts.push(item);
      } else {
        let check = false;
        state.Carts.map((item, index) => {
          if (item._id === payload._id) {
            state.Carts[index].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _item = {
            ...payload,
            quantity: 1,
          };
          state.Carts.push(_item);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
      case ActionTypes.DELETE_FROM_CART:
      if (state.numberCart != 0) {
        state.Carts.map((item, index) => {
            let item2 = {
                ...payload,
                quantity: state.Carts[index].quantity--
            }
            state.Carts.pop(item2);
        })
      }
      return{
        ...state,
        numberCart: state.numberCart -1,
      };
      case ActionTypes.GET_NUMBER_CART:
      if(state.Carts != 0){
        return state.Carts;
      }

      default:
      return state;
  }
};

export default cartReducers;