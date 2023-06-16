import './App.css';
import Main from './components/layouts/Main';
import PrimaryFooter from './components/layouts/footer/PrimaryFooter';
import SecondaryFooter from './components/layouts/footer/SecondaryFooter';
import PrimaryHeader from './components/layouts/header/PrimaryHeader';
import SecondaryHeader from './components/layouts/header/SecondaryHeader';

function App() {

    return (
        <>
            <PrimaryHeader />
            <SecondaryHeader />
            <Main>

            </Main>
            <PrimaryFooter />
            <SecondaryFooter />
        </>
    );
}

export default App;
