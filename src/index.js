import React from 'react'
import ReactDOM from 'react-dom'
import Docs from './docs/Docs'
import '../node_modules/highlight.js/styles/ocean.css'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Docs />, document.getElementById('root'))
registerServiceWorker()
