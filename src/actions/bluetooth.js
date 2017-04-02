export const REQUEST_DEVICE = "REQUEST_DEVICE";

export const REQUESTED_DEVICE = "REQUESTED_DEVICE";

export function requestedDevice(message) {
  return {
    type:REQUESTED_DEVICE,
    payload:{
      message:message
    }
  }
}

export const REQUESTING_DEVICE = "REQUESTING_DEVICE";

export function isRequestingDevice() {
  return {
    type:REQUESTING_DEVICE,
    payload:{
    }
  }
}
