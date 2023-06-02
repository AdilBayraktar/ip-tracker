import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './Layouts/Container';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/details/:ip' element={<DetailsScreen />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
