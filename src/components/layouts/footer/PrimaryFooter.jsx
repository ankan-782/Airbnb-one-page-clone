import SectionDivider from "../../common/SectionDivider";

export default function PrimaryFooter() {
    const footerContent = [
        {
            id: 1,
            title: 'Support',
            links: [
                'Help Center',
                'AirCover',
                'Supporting people with disabilities',
                'Cancellation options',
                'Our COVID-19 Response',
                'Report a neighborhood concern',
            ],
        },
        {
            id: 2,
            title: 'Community',
            links: [
                'Airbnb.org: disaster relief housing',
                'Combating discrimination',
            ],
        },
        {
            id: 3,
            title: 'Hosting',
            links: [
                'Airbnb your home',
                'AirCover for Hosts',
                'Explore hosting resources',
                'Visit our community forum',
                'How to host responsibly',
                'Airbnb-friendly apartments',
            ],
        },
        {
            id: 4,
            title: 'Airbnb',
            links: [
                'Newsroom',
                'Learn about new features',
                'Letter from our founders',
                'Careers',
                'Investors',
                'Gift cards',
            ],
        },
    ];

    let content = footerContent.map(part =>
        <div key={part.id} className="space-y-3 laptop:space-y-4 max-laptop:pb-6 max-laptop:border-b max-laptop:border-solid max-laptop:border-neutral-600/20 max-laptop:mb-6 max-laptop:last:mb-0">
            <h5 className="font-semibold">{part.title}</h5>
            <div className="max-tablet:space-y-3 laptop:space-y-4 tablet:max-laptop:grid tablet:max-laptop:grid-cols-3">
                {
                    part.links.map(link => <a key={link} href="#" className="block hover:underline">{link}</a>)
                }
            </div>
        </div>
    );

    return (
        <footer aria-label="primary-footer" className="bg-neutral-200">
            <div className="container tablet:px-10 laptop:px-20 | pt-8 laptop:py-12 text-sm">
                <div className="grid grid-cols-1 laptop:grid-cols-4">
                    {content}
                </div>
            </div>
            <SectionDivider extraClasses="hidden laptop:block container tablet:px-10 laptop:px-20" />
        </footer>
    );
}
