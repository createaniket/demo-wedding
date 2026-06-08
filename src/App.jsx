import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'

export default function App() {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-accent/20">
      <Header />
      <HomePage />
    </div>
  )
}
