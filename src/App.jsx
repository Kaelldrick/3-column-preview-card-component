import { Card } from './components/Card'
import './App.css'
import sedans from '../src/assets/icon-sedans.svg'
import suvs from '../src/assets/icon-suvs.svg'
import luxury from '../src/assets/icon-luxury.svg'
import { Boton } from './components/Boton'

function App() {

  return (
    <div className='App animate__animated animate__fadeInUp'>
      <Card
        color='card--orange'
        logo={sedans}
        title="sedans"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip."
      >
        <Boton color='button--orange' />
      </Card>
      <Card
        color='card--Dark_cyan'
        logo={suvs}
        title="suvs"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures."
      >
        <Boton color='button--Dark_cyan' />
      </Card>
      <Card
        color='card--Very_dark_cyan'
        logo={luxury}
        title="luxury"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style."
      >
        <Boton color='button--Very_dark_cyan' />
      </Card>
    </div>
  )
}

export default App
