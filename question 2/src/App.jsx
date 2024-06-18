import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AllProducts from './Components/allProducts'

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/*" element={<AllProducts />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
