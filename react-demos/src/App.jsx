import Add from './component/Add';
import Footer from './component/Footer';
import Header from './component/Header';
import WelcomeMessage from './component/WelcomeMessage';
import JsxRules from './JsxRules';
const App = () => {
  return (
    <section id = "section">
      <WelcomeMessage/>
      <h1>My Website</h1>
      <article>
        <h2>Welcome to React</h2>
        <p className="text">Paragraph Content</p>
        <JsxRules/>
      </article>
    </section>
  )
}

export default App;