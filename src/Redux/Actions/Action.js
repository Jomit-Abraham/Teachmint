export const PLACE_ORDER = 'PLACE_ORDER';
export const MOVE_TO_NEXT_STAGE = 'MOVE_TO_NEXT_STAGE';
export const MARK_AS_PICKED = 'MARK_AS_PICKED';
export const CANCEL_ORDER = 'CANCEL_ORDER';
export const GET_TIME='GET_TIME'

export const placeOrder = (order) => ({
  type: PLACE_ORDER,
  payload: order,
});

export const movePizzaToNextStage = (orderId) => ({
  type: MOVE_TO_NEXT_STAGE,
  payload: orderId,
});

export const markPizzaAsPicked = (orderId) => ({
  type: MARK_AS_PICKED,
  payload: orderId,
});

export const cancelPizzaOrder = (orderId) => ({
  type: CANCEL_ORDER,
  payload: orderId,
});

export const getTimer = (time) => ({
  type: GET_TIME,
  payload: time,
});