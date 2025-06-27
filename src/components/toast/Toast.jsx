import './Toast.css';

function Toast({ message, type = 'success', onclose}) {
    return (
        <div className={`toast ${type}`}>
            <p>{message}</p>
            <button onClick={onclose}>X</button>
        </div>
    );
}

export default Toast;