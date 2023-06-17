export default function ContainedButton(props) {
    return (
        <button type="button" className={props.buttonClassName}>{props.children}</button>
    );
}
