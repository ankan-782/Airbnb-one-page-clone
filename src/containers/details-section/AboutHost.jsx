import heroImg from "../../assets/images/avatars/hero.webp";
import SectionDivider from "../../components/common/SectionDivider";
import ContainedButton from "../../components/common/button/ContainedButton";
import IconButton from "../../components/common/button/IconButton";

export default function AboutHost() {
    const hostOverview = [
        {
            id: 1,
            imgPath: 'm31.47 10.12-15-8a1 1 0 0 0-.94 0l-15 8a1 1 0 0 0 0 1.76L4 13.73V23a1 1 0 0 0 .52.88l11 6a1 1 0 0 0 .96 0l11-6A1 1 0 0 0 28 23v-9.27l2-1.06V23h2V11a1 1 0 0 0-.53-.88zM26 22.4l-10 5.45-10-5.45V14.8l9.53 5.08a1 1 0 0 0 .94 0L26 14.8v7.6zm-10-4.54L3.12 11 16 4.13 28.88 11 16 17.87z',
            title: 'Where I went to school: Universidad de Psicología en Valencia',
        },
        {
            id: 2,
            imgPath: 'M20 2a2 2 0 0 1 2 1.85V6h6a3 3 0 0 1 3 2.82V27a3 3 0 0 1-2.82 3H4a3 3 0 0 1-3-2.82V9a3 3 0 0 1 2.82-3H10V4a2 2 0 0 1 1.85-2H12zm8 6H4a1 1 0 0 0-1 .88V12a3 3 0 0 0 2.82 3H13v2H6a4.98 4.98 0 0 1-3-1v11a1 1 0 0 0 .88 1H28a1 1 0 0 0 1-.88V16c-.78.59-1.74.95-2.78 1h-7.17v-2H26a3 3 0 0 0 3-2.82V9a1 1 0 0 0-.88-1zm-10 4a1 1 0 0 1 1 .88V19a1 1 0 0 1-.88 1H14a1 1 0 0 1-1-.88V13a1 1 0 0 1 .88-1H14zm-1 2h-2v4h2zm3-10h-8v2h8z',
            title: 'My work: coach',
        },
        {
            id: 3,
            imgPath: 'M16 1a11 11 0 0 1 11 10.7v.3c0 3.7-2.03 7.14-6 10.3v7.03c0 .92-.75 1.67-1.67 1.67h-6.66c-.92 0-1.67-.75-1.67-1.67V22.3c-3.85-3.07-5.87-6.39-6-9.98V12A11 11 0 0 1 16 1zm3 26h-6v2h6v-2zm0-4h-6v2h6v-2zM16 3a9 9 0 0 0-9 8.98v.29c.1 2.9 1.8 5.7 5.17 8.4l.42.33h.4l.01-9.67a3 3 0 0 1 6 0V21h.41l.43-.34c3.36-2.7 5.05-5.48 5.15-8.36l.01-.28v-.27A9 9 0 0 0 16 3zm0 7.33-.12.01a1 1 0 0 0-.88 1V21h2v-9.67a1 1 0 0 0-1-1z',
            title: 'Fun fact: No one believes my age',
        },
        {
            id: 4,
            imgPath: 'M0 18v-2h1.3A15.02 15.02 0 0 1 13.27 4.25a3 3 0 1 1 5.46 0c6 1.1 10.76 5.78 11.97 11.75H32v2zM16 6A13 13 0 0 0 3.35 16h25.3A13 13 0 0 0 16 6zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7.55 18.1a3.24 3.24 0 0 1 3.07 5.7l-.17.1-9.63 4.82a5 5 0 0 1-3.23.43l-.25-.05-7.84-2.01A2 2 0 0 1 4 27.31V22a2 2 0 0 1 1.85-2h11.26l.14.01L19 20c.92.01 1.44.7 1.57 1.59zm2.56 2.35a1.24 1.24 0 0 0-1.54-.6l-.12.04-4.37 2.19a3.89 3.89 0 0 1-3.34 1.91l-.24.01H12v-2h5a2 2 0 0 0 2-1.85V22l-3.7.02h-1.58L12.6 22l-.6-.01H6v5.15l7.83 2.01a3 3 0 0 0 1.9-.13l.2-.1 9.62-4.82c.61-.3.86-1.05.56-1.66z',
            title: 'For guests, I always: Help them enjoy Valencia',
        },
        {
            id: 5,
            imgPath: 'M6 23v3h3v2H6v3H4v-3H1v-2h3v-3h2zm9.04-19.29c.28-.9 1.52-.95 1.88-.12l.04.12 2.61 8.72 8.72 2.61c.86.26.94 1.4.22 1.82l-.1.06-.12.04-8.72 2.61-2.61 8.72c-.26.86-1.4.94-1.82.22l-.06-.1-.04-.12-2.61-8.72-8.72-2.61c-.87-.26-.94-1.4-.22-1.82l.1-.06.12-.04 8.72-2.61 2.61-8.72zM16 7.48l-1.81 6.04a1 1 0 0 1-.55.63l-.12.04L7.48 16l6.04 1.81a1 1 0 0 1 .57.45l.06.1.04.12L16 24.52l1.81-6.04a1 1 0 0 1 .45-.57l.1-.06.12-.04L24.52 16l-6.04-1.81a1 1 0 0 1-.57-.44l-.06-.12-.04-.11L16 7.48zM28 1v3h3v2h-3v3h-2V6h-3V4h3V1h2z',
            title: 'What makes my home unique: Good energy and feeling at home',
        }
    ];

    return (
        <div className="pt-8 space-y-6">
            <h2 className="font-semibold text-[22px]">Meet your host</h2>
            <div className="tablet:grid tablet:place-items-center tablet:bg-neutral-400 tablet:pt-10 tablet:pb-6 tablet:px-6 tablet:rounded-3xl">
                <div className="space-y-6">
                    <div className="bg-white shadow-2xl rounded-3xl py-8 px-6 max-w-[380px]">
                        <div className="flex items-center justify-center gap-8 mobile-lg:gap-14">
                            <div className="text-center">
                                <div className="inline-block relative">
                                    <img src={heroImg} alt="Superhost Image" className="rounded-full w-[104px] h-[104px]" />
                                    <div className="bg-primary-400 p-2 rounded-full absolute right-0 bottom-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '16px', width: '16px', fill: 'white' }}><path d="m16 .8.56.37C20.4 3.73 24.2 5 28 5h1v12.5C29 25.57 23.21 31 16 31S3 25.57 3 17.5V5h1c3.8 0 7.6-1.27 11.45-3.83L16 .8zm7 9.08-9.5 9.5-4.5-4.5L6.88 17l6.62 6.62L25.12 12 23 9.88z"></path></svg>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-4xl">Sagrario</p>
                                    <span>Superhost</span>
                                </div>
                            </div>
                            <div>
                                <div className="border-b border-solid border-neutral-600/20 py-3">
                                    <p className="font-bold text-[22px]">316</p>
                                    <p className="text-[10px] font-normal">Reviews</p>
                                </div>
                                <div className="border-b border-solid border-neutral-600/20 py-3">
                                    <p className="font-bold text-[22px]">
                                        <div className="flex items-center gap-1">
                                            <span>4.86</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true" role="presentation" focusable="false" style={{ height: '14px', width: '14px', fill: 'currentcolor' }}><path d="M7.57 1.1 5.51 5.24l-4.57.65a.5.5 0 0 0-.29.14l-.06.1c-.1.2-.11.27-.03.44l.1.18 3.3 3.23-.8 4.55a.5.5 0 0 0 .05.32l.07.08c.16.17.22.2.41.17l.2-.04 4.1-2.13 4.08 2.16c.1.06.21.07.33.05l.08-.04c.21-.1.26-.15.3-.34l.02-.2-.77-4.55 3.32-3.22a.5.5 0 0 0 .15-.3l-.01-.1c-.05-.3-.08-.3-.42-.46l-4.57-.68L8.47 1.1a.5.5 0 0 0-.9 0z"></path></svg>
                                        </div>
                                        <p className="text-[10px] font-normal">Reviews</p>
                                    </p>
                                </div>
                                <div className="border-b border-solid border-neutral-600/20 py-3">
                                    <p className="font-bold text-[22px]">7</p>
                                    <p className="text-[10px] font-normal">Years hosting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 max-w-[380px]">
                        {hostOverview.map(element =>
                            <div key={element.id} className="flex gap-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d={element.imgPath}></path></svg>
                                </div>
                                <p>{element.title}</p>
                            </div>
                        )}
                    </div>
                    <div className="max-w-[380px]">
                        <p>Open and communicative, with donation of people and happy to welcome friends from the world at home.</p>
                    </div>
                    <IconButton>Show more</IconButton>
                    <ContainedButton>Message Host</ContainedButton>
                    <SectionDivider />
                    <p className="text-xs text-neutral-600 max-w-[380px]">To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p>
                    <SectionDivider extraClasses="block tablet:hidden" />
                </div>
            </div>
        </div>
    );
}
