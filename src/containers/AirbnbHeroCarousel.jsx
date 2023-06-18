import { useRef, useState } from "react";
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
            imgPath: '/src/assets/images/rooms/img3.webp',
        },
        {
            id: 4,
            imgPath: '/src/assets/images/rooms/img4.webp',
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
                        <div className="hidden tablet:block">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum, cupiditate ipsum hic omnis aperiam deserunt nisi, quae praesentium eos fugiat eveniet, optio fugit itaque explicabo velit odit numquam minus non a quasi maxime est sit? Cum, incidunt. Ipsum, repudiandae hic dolorem sequi dolore quo ullam exercitationem praesentium pariatur neque et molestias quod sapiente laborum tempora odit veritatis, asperiores fuga? Dolore cum facilis dolores in laborum reiciendis consectetur fuga officiis tempora quae. Beatae, vitae vel ducimus ut error alias distinctio, et quisquam possimus adipisci ipsa unde quod, deleniti consequatur ullam dolores! Necessitatibus culpa ipsa obcaecati, iure maiores veniam ut quia est odio, tenetur id adipisci autem nisi ex, maxime reprehenderit. Perferendis optio dignissimos doloribus officiis officia omnis accusantium beatae itaque. Modi omnis neque nemo nisi quisquam iusto facere veniam temporibus ipsa, atque odit qui repudiandae in libero quaerat nobis eveniet. Tempora ad distinctio explicabo accusamus reiciendis doloremque odit quisquam sed ipsam dolore molestias ea veritatis, labore veniam culpa sint vel praesentium sunt in eum, tenetur nesciunt eligendi quas illo! Sunt minima facere inventore at quaerat? Magni, id, perspiciatis quia consequuntur iure aut aperiam quis illum alias asperiores reprehenderit, tenetur quam cumque. Esse saepe dolorum sunt incidunt illo cupiditate, optio perferendis fuga pariatur minus? Veritatis officia quibusdam perferendis animi! Ullam vel odit eligendi voluptas laborum quae facilis ducimus molestias, laudantium sit expedita dolores repudiandae id, consequatur nemo aspernatur veniam numquam. Itaque voluptatum exercitationem, distinctio, ratione explicabo quod hic, doloremque natus magni et facere quis veniam excepturi in repellat. Quas provident, eos, et quidem quos repudiandae culpa ea blanditiis cumque, sapiente in laboriosam ratione? In, velit. Officiis, explicabo assumenda est suscipit laborum odit a id? Qui, labore! Veritatis sit quibusdam earum voluptatem optio. Iste, itaque. Quam, dignissimos tempore deserunt velit possimus quos adipisci commodi iure, itaque assumenda incidunt aspernatur. Architecto et nihil ipsa, placeat pariatur assumenda ipsum sed laboriosam facilis adipisci explicabo temporibus illo necessitatibus molestiae accusamus culpa, ex tempore omnis officiis voluptate, exercitationem blanditiis dolor. Blanditiis esse sint placeat magni doloribus suscipit consectetur fugiat iure quam vel tempore, in non modi excepturi harum quod voluptatem. Molestiae sequi saepe odit consequatur veritatis, fuga libero. Amet ratione accusantium repellat illo enim quibusdam sed maiores quia laboriosam. Cum vitae, quo quibusdam alias dolores inventore nulla unde officia excepturi quasi reprehenderit consequuntur recusandae hic autem magni corporis iure temporibus ullam quod magnam architecto id doloribus minima? Odit reiciendis ratione debitis cupiditate iusto labore fugiat consequatur.</p>
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
                        <div className="space-y-3">
                            <h1 className="font-semibold text-3xl">Enjoy historic Valencia and close to the beach.</h1>
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
                                        <p className="underline font-semibold">Share</p>
                                    </div>
                                    <div className="flex items-center gap-2 hover:bg-neutral-200 p-2 rounded-lg">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 2, overflow: 'visible', }}><path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path></svg>
                                        </div>
                                        <p className="underline font-semibold">Save</p>
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
