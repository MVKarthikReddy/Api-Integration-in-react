
import Login from './components/login'
import ForgotPassword from './components/forgot_password'

import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import ProgressBar1 from './components/multi_fun_page'
function App() {
  

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/forgot_password' element={<ForgotPassword/>} />
          <Route path='/submit_form' element={<ProgressBar1/>} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
