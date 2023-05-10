import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='signup' element={<SignUp />}/>
        <Route path='signin' element={<SignIn />}/>
      </Routes>
    </div>
  )
}

export default App