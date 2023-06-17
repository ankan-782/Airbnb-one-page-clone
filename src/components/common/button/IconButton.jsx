export default function IconButton(props) {
    return (
        <button type="button" className={props.buttonClassName}>
            {props.children}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: 5.33333, overflow: 'visible' }}><path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
        </button>
    );
}
