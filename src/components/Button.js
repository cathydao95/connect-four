function Button({ handleDrop, disableButton }) {
  return (
    <div>
      <button
        type="button"
        disabled={disableButton}
        onClick={(item, index) => handleDrop(item, index)}
      >
        Drop
      </button>
    </div>
  );
}

export default Button;
