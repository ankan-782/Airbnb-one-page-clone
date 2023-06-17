export default function OutlinedButton(props) {
    return (
        <button type="button" className={props.buttonClassName}>{props.children}</button>
    );
}
