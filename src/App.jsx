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
                <Details handlePriceVisibilityChange={handlePriceVisibilityChange} />
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
