import './assets/css/tailwind.css'
import ExamCategoryPage from './pages/main/ExamCategory'
import FooterPage from './pages/main/Footer'
import HomePage from './pages/main/Home'
import MostUsedPage from './pages/main/MostUsed'
import NavbarPage from './pages/main/Navbar'

function App() {
  return (
    <>
      <NavbarPage />
      <HomePage/>
      <ExamCategoryPage/>
      <MostUsedPage/>
      <FooterPage/>
    </>
  )
}

export default App
