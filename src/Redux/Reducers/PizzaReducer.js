// src/store/reducers/pizzaReducer.js
import {
  PLACE_ORDER,
  MOVE_TO_NEXT_STAGE,
  MARK_AS_PICKED,
  CANCEL_ORDER,
} from '../Actions/Action';

const initialState = {
  orders: [],
  totalDeliveredToday: 0,
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER:
      return {
        ...state,
        orders: [...state.orders, { ...action.payload, stage: 'Order Placed', remainingTime: 0, timeSpentInStage: 0, id: state.orders.length + 1, startTime: new Date() }],
      };
    case MOVE_TO_NEXT_STAGE:
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload ? { ...order, stage: getNextStage(order.stage), timeSpentInStage: 0, startTime: new Date() } : { ...order, timeSpentInStage: order.timeSpentInStage + calculateTimeDifference(order.startTime) }
        ),
      };
    case MARK_AS_PICKED:
      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === action.payload ? { ...order, stage: 'Order Picked', timeSpentInStage: order.timeSpentInStage + calculateTimeDifference(order.startTime) } : order
        ),
        totalDeliveredToday: state.totalDeliveredToday + 1,
      };
    case CANCEL_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== action.payload),
      };
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
