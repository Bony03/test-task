import "./FloatInput.scss";

export default function FloatInput({
  type,
  label,
  className,
  value,
  onChange,
  onBlur,
  invalid,
  isBlur,
}) {
  return (
    <div
      className={
        isBlur && invalid
          ? value
            ? `floatInput ${className} invalid filled`
            : `floatInput ${className} invalid`
          : value
          ? `floatInput ${className} filled`
          : `floatInput ${className}`
      }
    >
      <input
        type={type}
        className="floatInput__input"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={label}
      />
      <label className="floatInput__label" for={label}>
        {label}
      </label>
    </div>
  );
}
