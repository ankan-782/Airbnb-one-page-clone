import SectionDivider from "../../components/common/SectionDivider";
import IconButton from "../../components/common/button/IconButton";

export default function Address() {
    return (
        <section aria-label="address" className="block tablet:hidden">
            <div className="py-6 tablet:py-12 space-y-6">
                <h2 className="font-semibold text-[22px]">Where you’ll be</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12318.838358702678!2d-0.37663!3d39.475889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f529b1f00e1%3A0x7d5c2244481a80f!2sC%2F%20dels%20Juristes%2C%2046001%20Val%C3%A8ncia%2C%20Spain!5e0!3m2!1sen!2sbd!4v1686981260543!5m2!1sen!2sbd"
                    width="100%"
                    height="218px"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="space-y-3">
                    <h3 className="font-semibold">Valencia, Spain</h3>
                    <p>In the center , next to the historic Cathedral, Garden tambén building on the river , and close to the beach. ideal for rest and go out and enjoy without having to move location.</p>
                    <IconButton>Show more</IconButton>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
}
