import './App.css';
import Main from './components/layouts/Main';
import PrimaryFooter from './components/layouts/footer/PrimaryFooter';
import SecondaryFooter from './components/layouts/footer/SecondaryFooter';
import PrimaryHeader from './components/layouts/header/PrimaryHeader';
import SecondaryHeader from './components/layouts/header/SecondaryHeader';
import Address from './containers/Address';
import AirbnbHeroCarousel from './containers/AirbnbHeroCarousel';
import RelatedListings from './containers/RelatedListings';
import Reviews from './containers/Reviews';
import ThingsToKnow from './containers/ThingsToKnow';
import AboutHost from './containers/details-section/AboutHost';
import AboutPlace from './containers/details-section/AboutPlace';
import AddressInLowerDevice from './containers/details-section/AddressInLowerDevice';
import LanguageChangeSection from './containers/details-section/LanguageChangeSection';
import PlaceOfferings from './containers/details-section/PlaceOfferings';
import RoomOffers from './containers/details-section/RoomOffers';
import RoomOverviews from './containers/details-section/RoomOverviews';
import SleepingOverview from './containers/details-section/SleepingOverview';
import Details from './containers/details-section/index';
import useHeaderNavVisibility from './hooks/useHeaderNavVisibility';
import useHeaderPriceVisibility from './hooks/useHeaderPriceVisibility';

function App() {
    const { handleNavVisibilityChange, isNavVisible } = useHeaderNavVisibility();
    const { handlePriceVisibilityChange, isPriceVisible } = useHeaderPriceVisibility();

    return (
        <>
            <PrimaryHeader />
            <SecondaryHeader isNavVisible={isNavVisible} isPriceVisible={isPriceVisible} />
            <Main>
                <AirbnbHeroCarousel handleNavVisibilityChange={handleNavVisibilityChange} />
                <Details handlePriceVisibilityChange={handlePriceVisibilityChange} >
                    <RoomOffers />
                    <RoomOverviews />
                    <LanguageChangeSection />
                    <AboutHost />
                    <AboutPlace />
                    <SleepingOverview />
                    <PlaceOfferings />
                    <AddressInLowerDevice />
                </Details>
                <Reviews />
                <Address />
                <ThingsToKnow />
                <RelatedListings />
            </Main>
            <PrimaryFooter />
            <SecondaryFooter />
        </>
    );
}

export default App;
