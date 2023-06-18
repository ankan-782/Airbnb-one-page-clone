import { useRef, useState } from "react";
import img1 from '../assets/images/rooms/img1.webp';
import SectionDivider from "../components/common/SectionDivider";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default function AirbnbHeroCarousel({ handleNavVisibilityChange }) {
    // component visibility checking functions - used in observer part conditionally
    const navVisibilityTrue = () => {
        handleNavVisibilityChange(true);
    };

    const navVisibilityFalse = () => {
        handleNavVisibilityChange(false);
    };

    // intersection observer custom hook
    const targetRef = useIntersectionObserver(navVisibilityTrue, navVisibilityFalse);

    // carousel slider counting control
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // slider change function
    const handleSlideChange = () => {
        const scrollPosition = sliderRef.current.scrollLeft;
        const slideWidth = sliderRef.current.offsetWidth;
        const newSlide = Math.round(scrollPosition / slideWidth);
        setCurrentSlide(newSlide);
    };

    // room images as objects
    const roomImages = [
        {
            id: 1,
            imgPath: '/src/assets/images/rooms/img1.webp',
        },
        {
            id: 2,
            imgPath: '/src/assets/images/rooms/img2.webp',
        },
        {
            id: 3,
            imgPath: '/src/assets/images/rooms/img4.webp',
        },
        {
            id: 4,
            imgPath: '/src/assets/images/rooms/img3.webp',
        },
        {
            id: 5,
            imgPath: '/src/assets/images/rooms/img5.webp',
        },
        {
            id: 6,
            imgPath: '/src/assets/images/rooms/img6.webp',
        },
    ];

    return (
        <>
            <section ref={targetRef} aria-label="airbnb hero part carousel">
                <div className="pb-6 tablet:pt-6 flex flex-col space-y-6 tablet:space-y-reverse">
                    <div className="tablet:container tablet:px-10 laptop:px-20">
                        {/* grid photos for larger device */}
                        <div className="hidden tablet:block rounded-xl overflow-hidden h-auto">
                            <div className="grid grid-cols-4 gap-2">
                                <div className="col-span-2 row-span-2 ">
                                    <img src={img1} alt="room pictures" className="w-auto object-cover aspect-square h-auto" />
                                </div>
                                {roomImages.slice(1, 5).map(img =>
                                    <div key={img.id} className="">
                                        <img src={img.imgPath} alt="room pictures" className="w-auto object-cover aspect-square h-auto" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* carousel for tablet and lower device */}
                        <div className="block tablet:hidden relative">
                            <div ref={sliderRef} onScroll={handleSlideChange} className="side-scrollbar-hide | flex items-center overflow-x-scroll snap-x snap-mandatory">
                                {roomImages.map(img =>
                                    <div key={img.id} className="flex-shrink-0 w-full h-full snap-start snap-always">
                                        <img src={img.imgPath} alt="room image" className="aspect-video w-full object-cover" />
                                        <div className="absolute bottom-2 right-2 z-10 bg-neutral-700 rounded-md text-white py-1 px-3 text-sm">
                                            <p>{currentSlide + 1}/{roomImages.length}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="container tablet:px-10 laptop:px-20 tablet:order-first">
                        <div className="space-y-1">
                            <h1 className="font-semibold text-[26px]">Enjoy historic Valencia and close to the beach.</h1>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-sm flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '14px', width: '14px', fill: 'currentcolor' }}><path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                                        <span className="font-semibold">
                                            <span>4.87 · </span>
                                            <span className="underline">171 reviews</span>
                                        </span>
                                        <span>
                                            <span>
                                                {' · '}
                                                {' '}
                                            </span>
                                            <span>Superhost</span>
                                            <span>{' · '}<span className="underline font-semibold">Valencia, Spain</span></span>
                                        </span>
                                    </div>
                                </div>
                                <div className="hidden tablet:flex tablet:items-center tablet:gap-1">
                                    <div className="flex items-center gap-2 hover:bg-neutral-200 p-2 rounded-lg">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible' }}><g fill="none"><path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9M16 3v23V3zM6 13l9.3-9.3a1 1 0 0 1 1.4 0L26 13"></path></g></svg>
                                        </div>
                                        <p className="underline font-semibold text-sm">Share</p>
                                    </div>
                                    <div className="flex items-center gap-2 hover:bg-neutral-200 p-2 rounded-lg">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible', }}><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
                                        </div>
                                        <p className="underline font-semibold text-sm">Save</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SectionDivider extraClasses="container tablet:px-10 laptop:px-20 tablet:hidden" />
        </>
    );
}
