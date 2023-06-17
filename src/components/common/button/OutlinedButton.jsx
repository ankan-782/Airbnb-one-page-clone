export default function OutlinedButton(props) {
    return (
        <button type="button" className={`rounded-lg px-6 py-3.5 border border-solid border-neutral-700 font-semibold hover:bg-neutral-200 active:scale-95 transition-transform ${props.extraClasses}`}>{props.children}</button>
    );
}
