const Input = (props) => {
    const {inputChange, inputBlur, inputValue, inputName, inputPlaceholder, inputTouched, inputError} = props
    return (
        <div className={"flex flex-col my-4"}>
            <label className={"text-2xl mb-2"}>{inputName}</label>
            <input
                type={inputName}
                name={inputName}
                onChange={inputChange}
                onBlur={inputBlur}
                value={inputValue}
                placeholder={inputPlaceholder || inputName}
                className={"py-1 pl-2 border-b-2"}
            />
            <span className={"text-red-600 text-xs"}>{inputError && inputTouched && inputError}</span>
        </div>
    )
}
export default Input
