import { nuiEvent, useData } from "../dist/index"

const App = () => {
  const testData = useData("hello");

  nuiEvent('testaction', (data) => {
    testData(data)
  })
  return (
    <div>
      <h2>Data: {testData()}</h2>
    </div>
  )
}

export default App;