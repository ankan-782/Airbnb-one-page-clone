export default function ContainedButton(props) {
    return (
        <button type="button" className={`rounded-lg px-6 py-3.5 bg-neutral-700 text-white font-semibold hover:bg-black active:scale-95 transition-transform ${props.extraClasses}`}>{props.children}</button>
    );
}
