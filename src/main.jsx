import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/Store.jsx'

createRoot(document.getElementById('root')).render(
<Provider store={Store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
 
)
