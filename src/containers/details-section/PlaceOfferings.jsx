import SectionDivider from "../../components/common/SectionDivider";
import OutlinedButton from "../../components/common/button/OutlinedButton";

export default function PlaceOfferings() {
    const placeOffers = [
        {
            id: 1,
            imgPath: 'M25 1a2 2 0 0 1 2 1.85V29h2v2H3v-2h2V3a2 2 0 0 1 1.85-2H7zm0 2H7v26h18zm-9 6a3 3 0 0 1 3 2.82V14a5 5 0 1 1-6 0v-2a3 3 0 0 1 3-3zm0 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-6a1 1 0 0 0-1 .88V13.1a5.02 5.02 0 0 1 2 0V12a1 1 0 0 0-1-1z',
            title: 'Lock on bedroom door',
        },
        {
            id: 2,
            imgPath: 'M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z',
            title: 'Kitchen',
        },
        {
            id: 3,
            imgPath: 'M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z',
            title: 'Wifi',
        },
        {
            id: 4,
            imgPath: 'M26 2a1 1 0 0 1 .92.61l.04.12 2 7a1 1 0 0 1-.85 1.26L28 11h-3v5h6v2h-2v13h-2v-2.54a3.98 3.98 0 0 1-1.73.53L25 29H7a3.98 3.98 0 0 1-2-.54V31H3V18H1v-2h5v-4a1 1 0 0 1 .88-1h.36L6.09 8.4l1.82-.8L9.43 11H12a1 1 0 0 1 1 .88V16h10v-5h-3a1 1 0 0 1-.99-1.16l.03-.11 2-7a1 1 0 0 1 .84-.72L22 2h4zm1 16H5v7a2 2 0 0 0 1.7 1.98l.15.01L7 27h18a2 2 0 0 0 2-1.85V18zm-16-5H8v3h3v-3zm14.24-9h-2.49l-1.43 5h5.35l-1.43-5z',
            title: 'Dedicated workspace',
        },
        {
            id: 5,
            imgPath: 'M23 3a2 2 0 0 1 2 1.85v1.67l5-2v11.96l-5-2V16a2 2 0 0 1-1.85 2H16.9a5 5 0 0 1-3.98 3.92A5 5 0 0 1 8.22 26H4v4H2V20h2v4h4a3 3 0 0 0 2.87-2.13A5 5 0 0 1 7.1 18H4a2 2 0 0 1-2-1.85V5a2 2 0 0 1 1.85-2H4zM12 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm11-9H4v11h3.1a5 5 0 0 1 9.8 0H23zm5 2.48-3 1.2v3.64l3 1.2zM7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
            title: 'Security cameras on property',
        }
    ];

    return (
        <>
            <div className="py-6 space-y-6">
                <h2 className="font-semibold text-[22px]">What this place offers</h2>
                <div className="grid grid-cols-1 gap-4">
                    {placeOffers.map(element =>
                        <div key={element.id} className="flex gap-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d={element.imgPath}></path></svg>
                            </div>
                            <p>{element.title}</p>
                        </div>
                    )}
                </div>
                <OutlinedButton extraClasses="w-full">Show all 37 amenities</OutlinedButton>
            </div>

            <SectionDivider />
        </>
    );
}
