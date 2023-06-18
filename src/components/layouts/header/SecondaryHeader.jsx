import SectionDivider from "../../common/SectionDivider";
import ContainedButton from "../../common/button/ContainedButton";

export default function SecondaryHeader({ isNavVisible, isPriceVisible }) {
    return (
        <>
            {!isNavVisible && <header aria-label="secondary-header" className="hidden tablet:block fixed z-50 top-0 left-0 w-full bg-white">
                <div className="container tablet:px-10 laptop:px-20 | py-4">
                    <div className="flex items-center justify-between">
                        <nav role="navigation">
                            <ul className="flex items-center gap-6 font-semibold text-sm py-4">
                                <li>
                                    <a href="#">Photos</a>
                                </li>
                                <li>
                                    <a href="#">Amenities</a>
                                </li>
                                <li>
                                    <a href="#">Reviews</a>
                                </li>
                                <li>
                                    <a href="#">Location</a>
                                </li>
                            </ul>
                        </nav>
                        {!isPriceVisible && <div className="hidden tablet:flex items-center gap-4">
                            <div>
                                <div>
                                    <span className="font-semibold mr-1">$37</span>
                                    <span className="text-sm">night</span>
                                </div>
                                <div className="text-sm flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '10px', width: '10px', fill: 'currentcolor' }}><path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                                    <span className="text-xs">
                                        <span className="font-semibold">4.87 · </span>
                                        <span className="text-neutral-600">171 reviews</span>
                                    </span>
                                </div>
                            </div>
                            <ContainedButton extraClasses="bg-gradient-to-r from-primary-300 to-primary-400">Check availability</ContainedButton>
                        </div>}
                    </div>
                </div>
                <SectionDivider />
            </header >}

            <header aria-label="secondary-header" className="block tablet:hidden fixed bottom-0 z-50 w-full bg-white">
                <SectionDivider />
                <div className="container tablet:px-10 laptop:px-20 | py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div>
                                <span className="font-semibold mr-1">$37</span>
                                <span className="text-sm">night</span>
                            </div>
                            <div className="text-sm flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '10px', width: '10px', fill: 'currentcolor' }}><path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                                <span>
                                    <span className="font-semibold text-xs">4.87</span>
                                </span>
                            </div>
                        </div>
                        <ContainedButton extraClasses="bg-gradient-to-r from-primary-300 to-primary-400">Check availability</ContainedButton>
                    </div>
                </div>
            </header >
        </>
    );
}
