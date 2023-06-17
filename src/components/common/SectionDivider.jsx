export default function SectionDivider({ extraClasses }) {
    return (
        <div aria-label="section divider" className={extraClasses}>
            <div className="border-b border-solid border-neutral-600/20"></div>
        </div>
    );
}
