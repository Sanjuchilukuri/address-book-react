import Header from "../../components/Header/Header"
import HomePageCss from './HomePage.module.scss';

function HomePage() {
  return (
    <div className="container-fluid vh-100 vw-100 position-relative ">
        <Header styleClasses={"position-absolute bg-transparent border-bottom"} isAuthenticated={false}/>
        <div className={`w-100 ${HomePageCss['background-image']} `} ></div>
    </div>
  )
}

export default HomePage