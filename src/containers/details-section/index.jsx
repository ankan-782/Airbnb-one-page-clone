import ContainedButton from "../../components/common/button/ContainedButton";
import AboutHost from "./AboutHost";
import AboutPlace from "./AboutPlace";
import Address from "./Address";
import LanguageChangeSection from "./LanguageChangeSection";
import PlaceOfferings from "./PlaceOfferings";
import RoomOffers from "./RoomOffers";
import RoomOverviews from "./RoomOverviews";
import SleepingOverview from "./SleepingOverview";

export default function Details() {
    return (
        <section aria-label="details">
            <div className="container tablet:px-10 laptop:px-20 | tablet:grid tablet:grid-cols-3 tablet:gap-10">
                <div className="tablet:col-span-2 tablet:w-[90%]">
                    <RoomOffers />
                    <RoomOverviews />
                    <LanguageChangeSection />
                    <AboutHost />
                    <AboutPlace />
                    <SleepingOverview />
                    <PlaceOfferings />
                    <Address />
                </div>

                <div className="tablet:border tablet:border-solid tablet:border-neutral-600/20 tablet:rounded-xl tablet:shadow-lg tablet:p-6 space-y-6">
                    <div>
                        <div>
                            <span className="text-[22px] font-semibold mr-2">$37</span>
                            <span>night</span>
                        </div>
                        <div className="text-sm flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: '12px', width: '12px', fill: 'currentcolor' }}><path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                            <span>
                                <span className="font-semibold">4.87 · </span>
                                <span className="text-neutral-600">171 reviews</span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="font-medium border border-solid border-neutral-600 rounded-tl-lg p-[10px] text-left" type="button">
                                <p className="text-[10px] font-bold">CHECK-IN <br /> <span className="line-clamp-1 text-sm font-normal">11/13/2023</span></p>
                            </button>
                            {/* Dropdown menu */}
                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>

                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="font-medium border-b border-r border-t border-solid border-neutral-600 rounded-tr-lg p-[10px] text-left" type="button">
                                <p className="text-[10px] font-bold">CHECKOUT <br /> <span className="line-clamp-1 text-sm font-normal">Add date</span></p>
                            </button>
                            {/* Dropdown menu */}
                            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="accordion-collapse" data-accordion="collapse" className="border-b border-l border-r border-solid border-neutral-600 rounded-bl-lg rounded-br-lg p-[10px]">
                            <h2 id="accordion-collapse-heading-2">
                                <button type="button" className="flex items-center justify-between w-full font-medium text-left" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                    <p className="text-[10px] font-bold">GUESTS <br /> <span className="line-clamp-1 text-sm font-normal">1 guest</span></p>
                                    <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                <div className="p-5">
                                    <p className="mb-2"></p>
                                    <p className=""></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ContainedButton extraClasses="w-full bg-gradient-to-r from-primary-300 to-primary-400">Check availability</ContainedButton>
                </div>
            </div>
        </section >
    );
}
