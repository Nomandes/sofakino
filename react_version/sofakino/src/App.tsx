import './App.css'
import Cinema from './components/cinema/Cinema.tsx'
import Footer from './components/footer/Footer.tsx'
import Header from './components/header/Header.tsx'
import Program from './components/program/Program.tsx'

function App() {

  return (
    <main className="container">
      <Header />
      <Cinema />
      <Program />
      <Footer />
    </main>
  )
}

export default App
