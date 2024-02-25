// src/store/reducers/pizzaReducer.js
import {
  PLACE_ORDER,
  MOVE_TO_NEXT_STAGE,
  MARK_AS_PICKED,
  CANCEL_ORDER,
  GET_TIME
} from '../Actions/Action';

const initialState = {
  orders: [],
  totalDeliveredToday: 0,
  timer:0
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return {
        ...state,
        orders: [...state.orders, { ...action.payload, stage: 'Order Placed',  id: state.orders.length + 1, startTime: new Date(),timer:true }],
      };
    case MOVE_TO_NEXT_STAGE:
      return {
        ...state,
        orders: state.orders.map(order =>
          (
          order.id === action.payload ? { ...order, stage: getNextStage(order.stage)} : { ...order})
        ),
        
      };
    case MARK_AS_PICKED:
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload ? { ...order, stage: 'Order Picked',  } : { ...order}
        ),
        totalDeliveredToday: state.totalDeliveredToday + 1,
      };
    case CANCEL_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload),
      };
      case GET_TIME:
        return{
          ...state,
          timer:action.payload
        }
    default:
      return state;
  }
};

const getNextStage = (currentStage) => {
  switch (currentStage) {
    case 'Order Placed':
      return 'Order in Making';
    case 'Order in Making':
      return 'Order Ready';
      case 'Order Ready':
      return 'Order Picked';
    default:
      return currentStage;
  }
};

const calculateTimeDifference = (startTime) => {
  const currentTime = new Date();
  const difference = Math.floor((currentTime - startTime) / 1000); // in seconds
  return difference;
};

export default pizzaReducer;
