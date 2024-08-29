import Catalog from "./components/modules/Catalog/Catalog"
import Consultation from "./components/modules/Consultation/Consultation"
import Footer from "./components/modules/Footer/Footer"
import InfoBanners from "./components/modules/InfoBanners/InfoBanners"
import Offer from "./components/modules/Offer/Offer"
import Reviews from "./components/modules/Reviews/Reviews"
import Search from "./components/modules/Search/Search"
import Services from "./components/modules/Services/Services"
import SmallBanner from "./components/modules/SmallBanner/SmallBanner"
import Stats from "./components/modules/Stats/Stats"
import TakePhone from "./components/modules/TakePhone/TakePhone"
import Work from "./components/modules/Work/Work"
import MainSqreen from "./components/templates/MainSqreen/MainSqreen"

function App() {
	return (
		<div className="App">
			<MainSqreen />
			<SmallBanner />
			<Work />
			<Search />
			<Catalog />
			<Services />
			<InfoBanners />
			<Stats />
			<TakePhone />
			<Reviews />
			<Consultation />
			<Offer />
			<Footer />
		</div>
	)
}

export default App
