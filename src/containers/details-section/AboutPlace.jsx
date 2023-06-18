import SectionDivider from "../../components/common/SectionDivider";
import IconButton from "../../components/common/button/IconButton";

export default function AboutPlace() {
    return (
        <>
            <div className="py-8 tablet:py-12 space-y-4">
                <h2 className="font-semibold text-[22px]">About this place</h2>
                <p className="leading-6 line-clamp-6">Nice and spacious room in the heart of Valencia, with double bed and a balcony. Silent because there is no traffic. Surrounded by all the landmarks , museums , cathedral , leisure, and close to the beach where you can go by bike, bus , tram or car if your means of transportation.
                    I would love to receive people wanting to enjoy my city and help in what I can .
                </p>
                <IconButton>Show more</IconButton>
            </div>

            <SectionDivider />
        </>
    );
}
