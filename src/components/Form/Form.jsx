import FloatInput from "../FloatInput/FloatInput";
import UploadInput from "../UploadInput/UploadInput";
import Checkbox from "../Checkbox/Checkbox";
import "./Form.scss";

export default function Form({
  checked,
  setChecked,
  name,
  email,
  phone,
  positions,
  file,
  uploadHandler,
  uploadError,
  postHandler,
  disabledButton,
}) {
  return (
    <form
      className="footer__form form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FloatInput
        type="text"
        className="form__name"
        label="Your name"
        value={name.value}
        onChange={(e) => {
          name.onChange(e.target.value);
        }}
        onBlur={() => {
          name.onBlur();
        }}
        invalid={name.invalid}
        isBlur={name.isBlur}
      />
      <FloatInput
        type="text"
        className="form__email"
        label="Email"
        value={email.value}
        onChange={(e) => {
          email.onChange(e.target.value);
        }}
        onBlur={() => {
          email.onBlur();
        }}
        invalid={email.invalid}
        isBlur={email.isBlur}
      />
      <FloatInput
        type="tel"
        className="form__tel"
        label="Phone"
        value={phone.value}
        onChange={(e) => {
          phone.onChange(e.target.value);
        }}
        onBlur={() => {
          phone.onBlur();
        }}
        invalid={phone.invalid}
        isBlur={phone.isBlur}
      />
      <p className="form__tel-example">+38 (XXX) XXX - XX - XX</p>
      <div className="form__section">
        <p className="form__section__title">Select your position</p>
        {positions.map((pos) => {
          return (
            <Checkbox
              id={pos.id}
              value={pos.name}
              checked={checked}
              setChecked={setChecked}
              key={pos.id}
            />
          );
        })}
      </div>
      <UploadInput
        file={file}
        uploadHandler={uploadHandler}
        uploadError={uploadError}
      />
      <div className="form__button">
        <button
          className="button"
          onClick={() => {
            postHandler(checked, name.value, email.value, phone.value, file);
          }}
          disabled={disabledButton}
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
