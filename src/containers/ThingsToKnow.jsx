import IconButton from "../components/common/button/IconButton";

export default function ThingsToKnow() {
    const thingsToKnow = {
        title: 'Things to know',
        things: [
            {
                id: 1,
                title: 'House rules',
                rules: [
                    'Check-in after 2:00 PM',
                    'Checkout before 11:00 AM',
                    '2 guests maximum',
                ],
                buttonText: 'Show more'
            },
            {
                id: 2,
                title: 'Safety & property',
                rules: [
                    'Security camera/recording device',
                    'Carbon monoxide alarm',
                    'Smoke alarm',
                ],
                buttonText: 'Show more'
            },
            {
                id: 3,
                title: 'Cancellation policy',
                rules: [
                    'Add your trip dates to get the cancellation details for this stay.',
                ],
                buttonText: 'Add dates'
            }
        ]
    };

    return (
        <section aria-label="things to know">
            <div className="container tablet:px-10 laptop:px-20 | pt-6 tablet:py-12 space-y-6">
                <h2 className="font-semibold text-[22px] hidden tablet:block">{thingsToKnow.title}</h2>
                <div className="grid grid-cols-1 tablet:grid-cols-3">
                    {thingsToKnow.things.map(thing =>
                        <div key={thing.id} className="space-y-2 tablet:space-y-4 max-tablet:pb-6 max-tablet:border-b max-tablet:border-solid max-tablet:border-neutral-600/20 max-tablet:mb-6 max-tablet:last:order-first max-tablet:even:mb-0 max-tablet:even:border-0">
                            <h3 className="font-semibold text-[22px] tablet:text-base">{thing.title}</h3>
                            <div className="grid grid-cols-1 gap-2 text-neutral-600 tablet:text-neutral-700 text-sm tablet:text-base leading-5">
                                {
                                    thing.rules.map(rule => <p key={rule}>{rule}</p>)
                                }
                            </div>
                            <IconButton buttonClassName="underline font-semibold flex items-center gap-x-1">{thing.buttonText}</IconButton>
                            {/* <ContainedButton buttonClassName="rounded-lg px-6 py-3.5 bg-neutral-700 text-white font-semibold hover:bg-black active:scale-95 transition-transform">Message Host</ContainedButton> */}

                            {/* <OutlinedButton buttonClassName="rounded-lg px-6 py-3.5 border border-solid border-neutral-700 font-semibold hover:bg-neutral-200 active:scale-95 transition-transform">Show all 171 reviews</OutlinedButton> */}
                        </div>
                    )}
                </div>
            </div>
            <div className="border-b border-solid border-neutral-600/20"></div>
        </section>
    );
}
