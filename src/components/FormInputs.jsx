import "./FormInputs.css";

const FormInputs = (props) => {
    return (
        <div className="FormInputs">
            <input
            ref={props.refer}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default FormInputs;