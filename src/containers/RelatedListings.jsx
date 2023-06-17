export default function RelatedListings() {
    const countryOptions = {
        title: 'Explore other options in and around Valencia',
        countries: [
            'Dénia',
            'Calp',
            'Benidorm',
            'Alicante',
            'Ibiza',
            'Torrevieja',
            'Formentera',
            'Salou',
            'Tarragona',
            'Palma',
            'Sitges',
            'Majorca',
        ],
    };

    const offerings = {
        title: 'Other types of stays on Airbnb',
        typesOfStays: [
            'Valencia vacation rentals',
            'Valencia monthly stays',
            'Apartment rentals in Valencia',
            'Apartment rentals in Spain',
            'Luxury rentals in Spain',
        ]
    };

    return (
        <section aria-label="related listings" className="tablet:bg-neutral-200">
            <div className="container tablet:px-10 laptop:px-20 | py-8 laptop:py-12">
                <div className="grid grid-cols-1 gap-y-10">
                    <div className="space-y-8">
                        <h2 className="font-semibold text-[22px]">{countryOptions.title}</h2>
                        <div className="grid grid-cols-2 laptop:grid-cols-4 gap-4 text-neutral-600">
                            {
                                countryOptions.countries.map(link => <a key={link} href="#" className="block">{link}</a>)
                            }
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-lg">{offerings.title}</h3>
                        <div className="grid grid-cols-2 laptop:grid-cols-4 gap-4 text-neutral-600">
                            {
                                offerings.typesOfStays.map(link => <a key={link} href="#" className="block">{link}</a>)
                            }
                        </div>
                    </div>
                    <nav className="flex text-sm" aria-label="Breadcrumb">
                        <ol className="inline-flex flex-wrap items-center space-x-1 md:space-x-3">
                            <li >
                                <a href="#" className="hover:underline">
                                    Airbnb
                                </a>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Spain</a>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Valencian Community</a>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Valencia Region</a>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </li>
                            <li aria-current="page">
                                <a href="#" className="hover:underline">Valencia</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="border-b border-solid border-neutral-600/20"></div>
        </section>
    );
}
