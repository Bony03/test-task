import "./Checkbox.scss";

export default function Checkbox({ id, value, checked, setChecked }) {
  return (
    <label
      className={checked === id ? "checkbox checked" : "checkbox"}
      onClick={() => {
        setChecked(id);
      }}
    >
      <input
        type="checkbox"
        id={id}
        name={id}
        value={value}
        className="checkbox__input"
      />
      <span></span>
      {value}
    </label>
  );
}
