import HomePageHeader from "../../components/HomePageHeader/HomePageHeader"
import HomePageCss from './HomePage.module.scss';

function HomePage() {
  return (
    <div className="container-fluid vh-100 vw-100 ">
        <HomePageHeader/>
        <div className={`w-100 ${HomePageCss['background-image']} `} ></div>
    </div>
  )
}

export default HomePage