import { useEffect, useState } from "react";
import SectionDivider from "../components/common/SectionDivider";
import IconButton from "../components/common/button/IconButton";
import OutlinedButton from "../components/common/button/OutlinedButton";

export default function Reviews() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const reviewsSection = {
        stars: '4.87',
        reviews: '171',
        reviewFactor: [
            {
                id: 1,
                name: 'Cleanliness',
                rating: 4.9,
            },
            {
                id: 2,
                name: 'Accuracy',
                rating: 4.9,
            },
            {
                id: 3,
                name: 'Communication',
                rating: 5.0,
            },
            {
                id: 4,
                name: 'Location',
                rating: 5.0,
            },
            {
                id: 5,
                name: 'Check-in',
                rating: 5.0,
            },
            {
                id: 6,
                name: 'Value',
                rating: 4.8,
            },
        ],
        reviewInfo: [
            {
                id: 1,
                avatar: '/src/assets/images/avatars/natasha.webp',
                name: 'Natasha',
                date: 'May 2023',
                comment: 'Great location and a wonderful host, couldn\'t ask for more'
            },
            {
                id: 2,
                avatar: '/src/assets/images/avatars/martin.webp',
                name: 'Martin',
                date: 'May 2023',
                comment: 'I had a Great Time Staying at Sagrario’s place! Her apartment is perfectly located in the centre of el Carmen. Her information on festivities and the area were one of a kind. I can only recommend you to stay at her’s. Muchas gracias Sagrario!'
            },
            {
                id: 3,
                avatar: '/src/assets/images/avatars/saskia.webp',
                name: 'Saskia',
                date: 'May 2023',
                comment: 'Sagrario is a superhost! She is very kind, helpful and friendly. She gives you advice about activities in Valencia.The apartment is great, clean and in the middle of the historic center. I loved staying here! I definitely want to go back!'
            },
            {
                id: 4,
                avatar: '/src/assets/images/avatars/merel.webp',
                name: 'Merel',
                date: 'March 2023',
                comment: 'I loved staying with Sagrario. She is an incredible host. She’s friendly, always responds quickly and she made me feel at home. She gave me more than enough recommendations for bars, restaurants and museums. All the recommendations I tried out were a succes! I’ll definitely stay here again next time I’m in Valencia!'
            },
            {
                id: 5,
                avatar: '/src/assets/images/avatars/clara.webp',
                name: 'Clara',
                date: 'March 2023',
                comment: 'She was really kind. Gracias Sagrario!'
            },
            {
                id: 6,
                avatar: '/src/assets/images/avatars/sean.webp',
                name: 'Sean',
                date: 'February 2023',
                comment: 'Best bnb host! Very helpful whenever you need recommendations, very welcoming and makes you feel at home. Everything was perfect!'
            }
        ]
    };

    const cardCount = width < breakpoint ? 3 : reviewsSection.reviewInfo.length;

    // converting rating in percentages
    function ratingInPercentages(ratingValue) {
        let rating = ((ratingValue / 5) * 100).toFixed(0);
        return {
            width: `${rating}%`
        };
    }

    return (
        <section aria-label="reviews">
            <div className="container tablet:px-10 laptop:px-20 | py-8 tablet:py-12 space-y-6 tablet:space-y-8">
                <h2 className="font-semibold text-[22px] flex items-center gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'currentcolor' }}><path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                    <span>{reviewsSection.stars} · {reviewsSection.reviews} reviews</span>
                </h2>
                <div className="hidden tablet:grid grid-cols-2 gap-x-14 gap-y-3">
                    {reviewsSection.reviewFactor.map(factor =>
                        <div key={factor.id} className="flex justify-between items-center">
                            <div className="w-full">
                                <p>{factor.name}</p>
                            </div>
                            <div className="w-1/2 flex items-center gap-x-3">
                                <div className="bg-gray-200 w-full rounded-full h-1">

                                    <div className="bg-neutral-700 h-1 rounded-full" style={ratingInPercentages(factor.rating)}></div>
                                </div>
                                <span>{factor.rating.toFixed(1)}</span>
                            </div>
                        </div>)}
                </div>
                <div className="cards-small-device | laptop:grid laptop:grid-cols-2 flex tablet:flex-col gap-4 tablet:gap-10 overflow-x-scroll snap-x snap-mandatory">
                    {reviewsSection.reviewInfo.slice(0, cardCount).map(info =>
                        <div key={info.id} className="h-60 tablet:h-auto p-5 tablet:p-0 w-11/12 tablet:w-auto border border-solid border-neutral-600/20 rounded-xl tablet:rounded-none tablet:border-none flex flex-col flex-shrink-0 justify-between laptop:justify-normal snap-start snap-always tablet:space-y-2 tablet:space-y-reverse">
                            <div className="space-y-2">
                                <p className="line-clamp-3">{info.comment}</p>
                                <IconButton>Show more</IconButton>
                            </div>
                            <div className="flex gap-3 items-center tablet:order-first">
                                <img src={info.avatar} alt="people image who reviewed" className="rounded-full w-10 h-10" />
                                <div>
                                    <p className="font-semibold">{info.name}</p>
                                    <p className="text-neutral-600">{info.date}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <OutlinedButton extraClasses="w-full tablet:w-auto">Show all 171 reviews</OutlinedButton>
            </div>
            <SectionDivider extraClasses="container tablet:px-10 laptop:px-20" />
        </section>
    );
}
