import React from 'react'
import { BrowserRouter,Router, Routes,Route } from 'react-router-dom'
import SidePanel from './Components/SidePanel'
import NavBar from './Components/NavBar'
import Icons from './Components/Icons'
import Menu from './Components/Menu'

function App() {
  return (
    <>
    <NavBar/>
    <div className='stories'>
      <BrowserRouter>
      <Router>
        <Routes>
          
         
         < Menu element= />
         < />
         < />
         < />
         < />
         
          
         
        </Routes>
      </Router>
      </BrowserRouter>
    <SidePanel user='mimi' image='https://picsum.photos/200/300'/>
    <SidePanel user='mimi' image='https://picsum.photos/200/300'/>
    <SidePanel user='mimi' image='https://picsum.photos/200/300'/>
    <SidePanel user='mimi' image='https://picsum.photos/200/300'/>
    <SidePanel user='mimi' image='https://picsum.photos/200/300'/>
    <SidePanel user='mimi' image='https://picsum.photos/200/300'/>
    <SidePanel user='mimi' image='https://picsum.photos/200/300'/>

    </div>
    
    <Icons name="Home" icon="🏛️" />
    <Icons name="Search" icon="🔍" />
    <Icons name="Explore" icon="🧭" />
    <Icons name="Reels" icon="🎞️" />
    <Icons name="Messages" icon="🤍" />
    <Icons name="Notifications" icon="🆕" />
    <Icons name="Create" icon="[◉°]New" />
    <Icons name="Profile" icon="🔘" />
    </>
  )
}

export default App
