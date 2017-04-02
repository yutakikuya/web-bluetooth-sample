import {REQUESTING_DEVICE,REQUESTED_DEVICE} from '../actions/bluetooth'

export default function bluetooth(state={messages:{}}, action) {
  switch (action.type) {
    case REQUESTING_DEVICE:
      return {messages:"Requesting Bluetooth Device..."};
    case REQUESTED_DEVICE:
      return {messages:action.payload};
    default:
      return state;
  }
}
