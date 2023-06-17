import SectionDivider from "../../components/common/SectionDivider";

export default function SleepingOverview() {
    return (
        <>
            <div className="py-6 space-y-4">
                <h2 className="font-semibold text-[22px]">Where you'll sleep</h2>
                <div className="grid grid-cols-2 laptop:grid-cols-3">
                    <div>
                        <div className="py-6 px-4 border border-solid border-neutral-600/20 rounded-xl flex flex-col justify-between gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '24px', width: '24px', fill: 'currentcolor' }}><path d="M26 4a2 2 0 0 1 2 1.85v7.99l1.85 5.54a3 3 0 0 1 .11.46l.03.24.01.24V30h-2v-2H4v2H2v-9.68a3 3 0 0 1 .09-.71l.06-.23L4 13.84V6a2 2 0 0 1 1.7-1.98l.15-.01L6 4zm2 18H4v4h24zm-1.39-6H5.4l-1.34 4h23.9zM26 6H6v8h2v-4a2 2 0 0 1 1.85-2H22a2 2 0 0 1 2 1.85V14h2zm-11 4h-5v4h5zm7 0h-5v4h5z"></path></svg>
                            <div>
                                <p className="font-semibold">Bedroom</p>
                                <p className="font-semibold text-sm text-neutral-600">1 double bed</p>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            <SectionDivider />
        </>
    );
}
