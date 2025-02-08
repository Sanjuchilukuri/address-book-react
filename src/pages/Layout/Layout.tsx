import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"


function Layout() {
  return (
    <div>
      <Header styleClasses={"bg-sky-blue py-2"} isAuthenticated={true}/>
      <Sidebar/>
    </div>
  )
}

export default Layout