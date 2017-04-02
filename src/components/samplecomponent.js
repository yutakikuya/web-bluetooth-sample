import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper';

class SampleComponent extends React.Component{
  /**
  * コンストラクタ
  * @param {Object} props プロパティ
  * @return {undefined}
  */
  constructor(props){
    super(props);
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

    return(
      <Paper>
        {this.props.param1.param1_1}
      </Paper>
    );
  }
}

function mapStateToProp(state){
  return state;
}

export default connect(mapStateToProp)(SampleComponent);
