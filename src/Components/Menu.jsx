import { Outlet, link } from "react-router-dom"

function Menu() {
  return (
    <>
    <nav>
        <ul>
            <link to='/Home'/>
            <link to='/Profile'/>
            <link to='/Explore'/>
            <link to='/Reels'/>
            <link to='/Messages'/>
            <link to='/Notification'/>

        </ul>
        <Outlet />
    </nav>
      
    </>
  )
}

export default Menu
