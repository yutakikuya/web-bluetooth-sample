import {take,put,select,takeEvery,takeLatest,call} from 'redux-saga/effects'
import {REQUESTING_DEVICE,REQUESTED_DEVICE,requestedDevice} from "../actions/bluetooth"

export function* requestedDeviceSaga(){
  yield takeEvery(REQUESTING_DEVICE,requestedDeviceTask);
}

//TODO:完了後にデバイスの情報をstoreに入れる
function* requestedDeviceTask(action) {
  let options = {};
  options.acceptAllDevices = true;
  console.log('Requesting Bluetooth Device...');
  console.log('with ' + JSON.stringify(options));
  navigator.bluetooth.requestDevice(options).then(function (device) {
    console.log('> Name:             ' + device.name);
    console.log('> Id:               ' + device.id);
    console.log('> Connected:        ' + device.gatt.connected);
    console.log(device);
    //yield put(requestedDevice(device.name));
  })
  .catch(function (error) {
    console.log('Argh! ' + error);
    //yield put(requestedDevice(error));
  });

}
