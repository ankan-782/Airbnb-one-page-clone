import SectionDivider from "../../components/common/SectionDivider";

export default function RoomOverviews() {
    const overViews = [
        {
            id: 1,
            imgPath: 'M17 6a2 2 0 0 1 2 1.85v8.91l.24.24H24v-3h-3a1 1 0 0 1-.98-1.2l.03-.12 2-6a1 1 0 0 1 .83-.67L23 6h4a1 1 0 0 1 .9.58l.05.1 2 6a1 1 0 0 1-.83 1.31L29 14h-3v3h5a1 1 0 0 1 1 .88V30h-2v-3H20v3h-2v-3H2v3H0V19a3 3 0 0 1 1-2.24V8a2 2 0 0 1 1.85-2H3zm13 13H20v6h10zm-13-1H3a1 1 0 0 0-1 .88V25h16v-6a1 1 0 0 0-.77-.97l-.11-.02zm8 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM17 8H3v8h2v-3a2 2 0 0 1 1.85-2H13a2 2 0 0 1 2 1.85V16h2zm-4 5H7v3h6zm13.28-5h-2.56l-1.33 4h5.22z',
            title: 'Room in a rental unit',
            desc: 'Your own room in a home, plus access to shared spaces.'
        },
        {
            id: 2,
            imgPath: 'M26 2a1 1 0 0 1 .92.61l.04.12 2 7a1 1 0 0 1-.85 1.26L28 11h-3v5h6v2h-2v13h-2v-2.54a3.98 3.98 0 0 1-1.73.53L25 29H7a3.98 3.98 0 0 1-2-.54V31H3V18H1v-2h5v-4a1 1 0 0 1 .88-1h.36L6.09 8.4l1.82-.8L9.43 11H12a1 1 0 0 1 1 .88V16h10v-5h-3a1 1 0 0 1-.99-1.16l.03-.11 2-7a1 1 0 0 1 .84-.72L22 2h4zm1 16H5v7a2 2 0 0 0 1.7 1.98l.15.01L7 27h18a2 2 0 0 0 2-1.85V18zm-16-5H8v3h3v-3zm14.24-9h-2.49l-1.43 5h5.35l-1.43-5z',
            title: 'Dedicated workspace',
            desc: 'A room with wifi that’s well-suited for working.'
        },
        {
            id: 3,
            imgPath: 'M16 17a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM25.67.33a2 2 0 0 1 2 1.85v6.54a2 2 0 0 1-.97 1.7l-.14.08-9.67 4.84a2 2 0 0 1-1.61.07l-.17-.07-9.67-4.84a2 2 0 0 1-1.1-1.62V2.33a2 2 0 0 1 1.84-2h.15zm0 2H6.33v6.39L16 13.55l9.67-4.83z',
            title: 'Sagrario is a Superhost',
            desc: 'Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.'
        }
    ];

    return (
        <>
            <div className="py-8">
                <div className="grid grid-cols-1 gap-4">
                    {overViews.map(element =>
                        <div key={element.id} className="flex gap-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d={element.imgPath}></path></svg>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold">{element.title}</h3>
                                <p className="text-neutral-600 text-sm">{element.desc}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <SectionDivider />
        </>
    );
}
