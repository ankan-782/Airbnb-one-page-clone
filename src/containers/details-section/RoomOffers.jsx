import heroImg from '../../assets/images/avatars/hero.webp';
import SectionDivider from "../../components/common/SectionDivider";

export default function RoomOffers() {
    const roomOffers = [
        {
            id: 1,
            imgPath: 'M26 4a2 2 0 0 1 2 1.85v7.99l1.85 5.54a3 3 0 0 1 .11.46l.03.24.01.24V30h-2v-2H4v2H2v-9.68a3 3 0 0 1 .09-.71l.06-.23L4 13.84V6a2 2 0 0 1 1.7-1.98l.15-.01L6 4zm2 18H4v4h24zm-1.39-6H5.4l-1.34 4h23.9zM26 6H6v8h2v-4a2 2 0 0 1 1.85-2H22a2 2 0 0 1 2 1.85V14h2zm-11 4h-5v4h5zm7 0h-5v4h5z',
            title: '1 double bed',
        },
        {
            id: 2,
            imgPath: 'M7 1a3 3 0 0 0-3 2.82V31h2V4a1 1 0 0 1 .88-1H18a1 1 0 0 1 1 .88V5h-5a1 1 0 0 0-1 .88V9h-3v2h19V9h-2V6a1 1 0 0 0-.88-1H21V4a3 3 0 0 0-2.82-3H7zm13 28a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM15 7h10v2H15V7z',
            title: 'Shared bathroom',
        },
        {
            id: 3,
            imgPath: 'm17.98 1.57.14.14 13.59 13.58-1.42 1.42L29 15.4V28a2 2 0 0 1-1.85 2H5a2 2 0 0 1-2-1.85V15.4l-1.3 1.3-1.4-1.42L13.87 1.71a3 3 0 0 1 4.1-.14zM11 17.93a2 2 0 0 0-1 3.73v2.35A6 6 0 0 0 5.32 28h11.36A6 6 0 0 0 12 24.01v-2.35a2 2 0 0 0-1-3.73zm10 0a2 2 0 0 0-1 3.73v2.35c-.95.16-1.84.55-2.6 1.12.63.84 1.1 1.82 1.37 2.87h7.91A6 6 0 0 0 22 24.01v-2.35a2 2 0 0 0-1-3.73zm-4.94-15.1h-.12a1 1 0 0 0-.55.2l-.1.1L5 13.4v11.23a8.02 8.02 0 0 1 2.96-2.11 4 4 0 1 1 6.08 0A8 8 0 0 1 16 23.68c.6-.47 1.25-.86 1.96-1.15a4 4 0 1 1 6.08 0 8.02 8.02 0 0 1 2.96 2.1V13.43L16.7 3.12a1 1 0 0 0-.64-.29z',
            title: 'Host and other guests may be here',
        }
    ];

    return (
        <>
            <article className="py-6 space-y-6">
                <div className="flex justify-between gap-10">
                    <h2 className="font-semibold text-[22px]">Room in a rental unit hosted by Sagrario</h2>
                    <div className="flex-shrink-0">
                        <div className="inline-block relative">
                            <img src={heroImg} alt="Superhost Image" className="rounded-full w-12 h-12 laptop:w-10 laptop:h-10" />

                            <svg className="block w-6 tablet:w-4 h-6 tablet:h-4 absolute -right-1 -bottom-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 14" aria-label="Sagrario is a Superhost." role="img" focusable="false"><linearGradient id="a" x1="8.5%" x2="92.18%" y1="17.16%" y2="17.16%"><stop offset="0" stopColor="#e61e4d"></stop><stop offset=".5" stopColor="#e31c5f"></stop><stop offset="1" stopColor="#d70466"></stop></linearGradient><path fill="#fff" d="M9.93 0c.88 0 1.6.67 1.66 1.52l.01.15v2.15c0 .54-.26 1.05-.7 1.36l-.13.08-3.73 2.17a3.4 3.4 0 1 1-2.48 0L.83 5.26A1.67 1.67 0 0 1 0 3.96L0 3.82V1.67C0 .79.67.07 1.52 0L1.67 0z"></path><path fill="url(#a)" d="M5.8 8.2a2.4 2.4 0 0 0-.16 4.8h.32a2.4 2.4 0 0 0-.16-4.8zM9.93 1H1.67a.67.67 0 0 0-.66.57l-.01.1v2.15c0 .2.1.39.25.52l.08.05L5.46 6.8c.1.06.2.09.29.1h.1l.1-.02.1-.03.09-.05 4.13-2.4c.17-.1.3-.29.32-.48l.01-.1V1.67a.67.67 0 0 0-.57-.66z"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="side-scrollbar-hide | grid grid-cols-[minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)] gap-2 overflow-x-scroll snap-x snap-mandatory">
                    {roomOffers.map(offer =>
                        <div key={offer.id} className="p-4 laptop:py-4 laptop:px-6 text-xs laptop:text-sm border border-solid border-neutral-600/20 rounded-xl flex flex-col laptop:flex-row justify-between laptop:items-center laptop:justify-normal gap-4 snap-start snap-always">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d={offer.imgPath}></path></svg>
                            </div>
                            <p className="font-semibold">{offer.title}</p>
                        </div>
                    )}
                </div>
            </article>

            <SectionDivider />
        </>
    );
}
