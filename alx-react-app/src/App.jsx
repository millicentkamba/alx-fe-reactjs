// alx-react-app/src/App.jsx

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  return (
    <div>
      {/* Render components in the required order */}
      <Header />
      <MainContent />

      {/* Render UserProfile component with props */}
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />

      <Footer />
    </div>
  )
}

export default App

