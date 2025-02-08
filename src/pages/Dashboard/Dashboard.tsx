import ContactDetails from "../../components/ContactDetails/ContactDetails"
import ContactsList from "../../components/ContactsList/ContactsList"
import Header from "../../components/Header/Header"
import NavBar from "../../components/NavBar/NavBar"

function Dashboard() {
  return (
    <div>
        <Header styleClasses={"bg-sky-blue"} isAuthenticated={true}/>
        <NavBar/>
        <main className=" mt-3 p-2 d-flex " style={{gap:"9rem"}}>
            <ContactsList/>
            <ContactDetails/>
        </main>
    </div>
  )
}

export default Dashboard;