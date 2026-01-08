// alx-react-app/src/App.jsx

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
      {/* Render the components in the required order */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
