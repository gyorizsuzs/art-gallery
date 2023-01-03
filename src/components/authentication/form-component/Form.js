import "./form.css";

const Form = ({ label, ...otherProps }) => {
  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      <input className="form-input" autoComplete="on" {...otherProps} />
    </div>
  );
};

export default Form;
