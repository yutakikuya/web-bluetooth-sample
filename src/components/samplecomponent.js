import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {isRequestingDevice} from '../actions/bluetooth'
class SampleComponent extends React.Component{
  /**
  * コンストラクタ
  * @param {Object} props プロパティ
  * @return {undefined}
  */
  constructor(props){
    super(props);

    this.hundleSubmit = this.hundleSubmit.bind(this);
  }

  hundleSubmit(){
    this.props.dispatch(isRequestingDevice());
  }

  /**
  * 描画メソッド
  * @return {undefined}
  */
  render(){
    const style = {
      margin: 10,
      padding: 10,
      textAlign: 'center',
      display: 'inline-block',
    };

    const bluetooth_messages = this.props.bluetooth.messages ? <div>{this.props.bluetooth.messages}</div> : "";

    return(
      <div>
      <RaisedButton label="Search Bluetooth Devices" primary={true} onClick={this.hundleSubmit}/>
      <Paper>
        {bluetooth_messages}
      </Paper>
      </div>
    );
  }
}

function mapStateToProp(state){
  return state;
}

export default connect(mapStateToProp)(SampleComponent);
