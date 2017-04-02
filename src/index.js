import React from 'react'
import ReactDOM from 'react-dom'
import SampleComponent from './components/samplecomponent'
import { Provider } from 'react-redux'
import {configureStore} from './store/store'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import "babel-polyfill"

const container = document.getElementById("app");
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <SampleComponent />
    </MuiThemeProvider>
  </Provider>,
  container
);
