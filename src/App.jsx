import './App.css'
import JournalItem from './components/JournalItem'
import NavBar from './components/NavBar'
import Data from "./api/data"


function App() {

  const entryData = Data.map((data) => {
    return <JournalItem key={data.id} {...data} />
  })

  return (
    <>
      <NavBar />
      {entryData}
    </>
  )
}

export default App
