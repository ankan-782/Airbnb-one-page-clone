import ContainedButton from "../../components/common/button/ContainedButton";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function Details({ handlePriceVisibilityChange, children }) {
    // component visibility checking functions - used in observer part conditionally
    const priceVisibilityTrue = () => {
        handlePriceVisibilityChange(true);
    };

    const priceVisibilityFalse = () => {
        handlePriceVisibilityChange(false);
    };

    let options = {
        rootMargin: "-100px",
    };

    // intersection observer custom hook
    const targetRef = useIntersectionObserver(priceVisibilityTrue, priceVisibilityFalse, options);

    return (
        <section aria-label="details" ref={targetRef} >
            <div className="container tablet:px-10 laptop:px-20 | tablet:grid tablet:grid-cols-3 tablet:gap-10">
                <div className="tablet:col-span-2 tablet:w-[90%]">
                    {children}
                </div>

                <div className="tablet:border tablet:border-solid tablet:border-neutral-600/20 tablet:rounded-xl tablet:shadow-lg tablet:p-6 space-y-6 hidden tablet:block sticky top-32 h-min">
                    <div className="flex flex-wrap justify-between items-end gap-2">
                        <div className="flex items-end leading-none gap-x-1">
                            <p className="text-[22px] font-semibold">$37</p>
                            <p>night</p>
                        </div>
                        <div className="text-sm flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentcolor' }}><path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                            <div className="flex leading-none">
                                <p className="font-semibold">4.87 · </p>
                                <p className="text-neutral-600">171 reviews</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="font-medium border border-solid border-neutral-600 rounded-tl-lg p-[10px] text-left" type="button">
                                <p className="text-[10px] font-bold">CHECK-IN <br /> <span className="line-clamp-1 text-sm font-normal">11/13/2023</span></p>
                            </button>
                            {/* Dropdown menu */}
                            <div id="dropdown" className="z-10 hidden">
                                <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">

                                </ul>
                            </div>

                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="font-medium border-b border-r border-t border-solid border-neutral-600 rounded-tr-lg p-[10px] text-left" type="button">
                                <p className="text-[10px] font-bold">CHECKOUT <br /> <span className="line-clamp-1 text-sm font-normal">Add date</span></p>
                            </button>
                            {/* Dropdown menu */}
                            <div id="dropdown" className="z-10 hidden">
                                <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">

                                </ul>
                            </div>
                        </div>
                        <div id="accordion-collapse" data-accordion="collapse" className="border-b border-l border-r border-solid border-neutral-600 rounded-bl-lg rounded-br-lg p-[10px]">
                            <h2 id="accordion-collapse-heading">
                                <button type="button" className="flex items-center justify-between w-full font-medium text-left" data-accordion-target="#accordion-collapse-body" aria-expanded="false" aria-controls="accordion-collapse-body">
                                    <p className="text-[10px] font-bold">GUESTS <br /> <span className="line-clamp-1 text-sm font-normal">1 guest</span></p>
                                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body" className="hidden" aria-labelledby="accordion-collapse-heading">
                                <div className="p-5">
                                    <p className="mb-2"></p>
                                    <p className=""></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContainedButton extraClasses="w-full bg-gradient-to-r from-primary-300 to-primary-400">Check availability</ContainedButton>
                    <div className="flex items-center gap-4 absolute -bottom-16 left-1/2 -translate-y-1/2 -translate-x-1/2 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: '#717171' }}><path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11.12a1 1 0 0 0 .84-1.28L27.04 14l1.92-6.72A1 1 0 0 0 28 6z"></path></svg>
                        <a href="#" className="underline text-neutral-600 font-semibold text-sm">Report this listing</a>
                    </div>
                </div>
            </div>
        </section >
    );
}
