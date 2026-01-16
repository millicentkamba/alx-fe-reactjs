// alx-react-app-new/src/App.jsx

import Header from './components/Header'
import MainContent from './components/MainContent'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <MainContent />

      {/* User Profile with props */}
      <UserProfile
        name="Alice"
        age={25}
        bio="Loves hiking and photography"
      />

      {/* Counter Component */}
      <Counter />

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default App
