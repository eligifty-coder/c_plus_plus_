import Greetings from "./component/Greetings";
import ProductInfo from "./component/ProductInfo";
const App = () => {
  const myName = 'Huxn WebDev';
  const multiply = (a,b) => a * b
  const specialClass = 'simple-class'
  return (
    <section id = "section">
      <p> {2+2} </p>
      <h1>{myName} </h1>
      <p>My friends List: {['Alex', 'John', 'Jordan']}</p>
      <p>2 * 10 = {multiply(2,10)}</p>
      <p className={specialClass}>This is a special class</p>
      <Greetings/>
      <ProductInfo/>
    </section>
  )
}

export default App;