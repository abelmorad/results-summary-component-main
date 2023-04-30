import './App.css'
import Result from './components/Result'
import Summary from './components/Summary'

function App() {

  return (
    <main id='root'>
      <section className='result-summary-container'>
        <Result/>
        <Summary/>
      </section>
    </main>
  )
}

export default App
