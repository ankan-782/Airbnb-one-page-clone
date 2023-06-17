import './App.css';
import Main from './components/layouts/Main';
import PrimaryFooter from './components/layouts/footer/PrimaryFooter';
import SecondaryFooter from './components/layouts/footer/SecondaryFooter';
import PrimaryHeader from './components/layouts/header/PrimaryHeader';
import SecondaryHeader from './components/layouts/header/SecondaryHeader';
import Address from './containers/Address';
import RelatedListings from './containers/RelatedListings';
import Reviews from './containers/Reviews';
import ThingsToKnow from './containers/ThingsToKnow';
import Details from './containers/details-section/index';

function App() {

    return (
        <>
            <PrimaryHeader />
            <SecondaryHeader />
            <Main>
                <Details />
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
