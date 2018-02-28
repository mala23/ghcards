import React, { render } from 'react'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import WebFont from 'webfontloader'

const root = document.getElementById('root')
const load = () => render((
  <AppContainer>
    <App />
  </AppContainer>
), root)

if (module.hot) {
  module.hot.accept('./components/App', load)
}

WebFont.load({
  typekit: {
    id: 'nri5owq'
  }
})

load();
