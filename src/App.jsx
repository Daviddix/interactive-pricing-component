import './App.css'
import pattern from './assets/images/pattern-circles.svg'
import RatingComponent from "../components/RatingComponent"

function App() {

  return (
    <main className="App">
    <h1 className='heading'>Simple, traffic-based pricing</h1>
    <p>Sign-up for our 30-day trial.
      <br />
      No credit card required.</p>
    <img className='pattern' src={pattern} alt="pattern" />

    <RatingComponent />
    </main>
  )
}

export default App
