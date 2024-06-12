import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { lazy , Suspense } from 'react'
import Loading from './components/loading/Loading'

const App = lazy(()=> import('./App'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
