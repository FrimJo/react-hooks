import 'styles/index.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ServiceWorkerContext from 'contexts/service-worker-context'
import { App } from './App'

if (process.env.NODE_ENV === 'production' && process.env.REACT_GOOGLE_TAG_MANAGER_ID) {
  const TagManager = require('react-gtm-module')
  TagManager.initialize({
    gtmId: process.env.REACT_GOOGLE_TAG_MANAGER_ID,
  })
}

ReactDOM.render(
  <ServiceWorkerContext.Provider>
    <React.Suspense fallback={<>Splash screen goes here</>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </React.Suspense>
  </ServiceWorkerContext.Provider>,
  document.getElementById('root')
)
