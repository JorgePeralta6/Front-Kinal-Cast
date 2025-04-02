
export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBluerHandler,
    textArea
}) => {

    const handleValueChange = (event) =>{
        onChangeHandler(event.target.value, field);
    }

    const handleInputBlur = (event) => {
        onBluerHandler(event.target.value, field);
    }
    
  return (
    <>
        <div className="auth-form-label">
            <span>{label}</span>
        </div>
        <div>
            {textArea ? (
                <textarea
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputBlur}
                    rows={5}
                    style={{maxWidth: "400px"}}
                />
            ) : (
                <input 
                type={type}
                value={value}
                onChange={handleValueChange}
                onBlur={handleInputBlur} 
                />
            )}
            <span className="auth-form-validation-message">
                {showErrorMessage && validationMessage}
            </span>
        </div> 
    </>
  )
}
