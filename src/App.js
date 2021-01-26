import { useEffect, useState } from 'react';
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  const [searchId, setSearchId] = useState()
  const [tickets, setTickets] = useState([])
  const [stop, setStop] = useState(false)

  useEffect(() => {
    fetch('https://front-test.beta.aviasales.ru/search')
      .then((res) => res.json())
      .then((data) => {
        setSearchId(data.searchId)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  useEffect(() => {
    if (searchId && !stop) {
      const fetchTickets = () => {
        fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
          .then(data => {
            if (data.status === 500) {
              fetchTickets()
            } else {
              return data.json()
            }
          })
          .then(ticketPack => {
            if (ticketPack.stop === true) {
              setStop(true)
            }
            setTickets([...tickets, ...ticketPack.tickets])
          })
          .catch((e) => {
            console.log(e)
          })
        }
    
      fetchTickets()
    }
  }, [searchId, stop, tickets])

  // useEffect(() => {
  //   if (searchId && !stop) {
  //     const fetchTickets = async () => {
  //       const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
  //       if (response.status === 500) {
  //         await fetchTickets()
  //       } else if (response.status !== 200) {
  //         await new Promise((resolve) => setTimeout(resolve, 1000))
  //         await fetchTickets()
  //       } else {
  //         let ticketPack = await response.json()

  //         if (ticketPack.stop === true) {
  //           setStop(true)
  //         } 

  //         setTickets([...tickets, ...ticketPack.tickets])
      
  //       }
  //     }
    
  //     fetchTickets()
  //   }
  // }, [searchId, stop, tickets])

  const newTikets = tickets && tickets.slice(0, 5)

  return (
    <div className="app">
      <Header />
      <Layout>
        <Sidebar />
        <Main tickets={newTikets} />
  
      </Layout>
      
      
    </div>
  );
}

export default App;
