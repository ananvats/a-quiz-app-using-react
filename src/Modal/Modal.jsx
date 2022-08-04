const Modal= ()=> {
    return (
        <div className="modal-container isOpen">
            <div className="modal-content">
            <h2>Congrats!</h2>
            <p>You answered n questions correctly.</p>
            <button className="close-btn">Play Again</button>

            </div>
        </div>
    );

};
export default Modal;