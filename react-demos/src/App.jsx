
const App = () => {
  const numbers =  [1,2,3,4,5]
  return (
    <main >
      <h1>Rendering List in React</h1>
      {
        numbers.map((num)=>{
          return <ul>
            <li key={Math.random()* numbers.length}>{num}</li>
          </ul>
        })
      }
    </main>
  )
}

export default App;