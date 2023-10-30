import { useState } from 'react';

export default function Input({
  label,
  type,
  value,
  onChange,
  pattern,
  placeholder,
  id,
  required="true",
}) {
  const [error, setError] = useState("")

  function handleChange(e) {
    onChange(e)
    handleValidation(e);
  }

  function handleValidation(e) {
    const input = e.target;
    const inputName = label.slice(0, -1);

    if (input.validity.valueMissing) {
      setError(`${inputName} is missing`);
    } else if (input.validity.typeMismatch) {
        setError(`${inputName} format is incorrect`);
    } else if (input.validity.tooShort) {
        setError(`${inputName} is too short`);
    } else if (input.validity.rangeOverflow) {
        setError(`${inputName} is over the required range`);
    } else if (input.validity.rangeUnderflow) {
        setError(`${inputName} is under the required range`);
    } else if (input.validity.patternMismatch) {
      setError(`${inputName} format is incorrect`);
    } else {
      setError("");
    }
  }

  return (
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        pattern={pattern}
        placeholder={placeholder}
        id={id}
        required
      />
      <span>
        {error}
      </span>
    </label>
  );
}