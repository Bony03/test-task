import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import Success from "../Success/Success";
import Form from "../Form/Form";
import "./Footer.scss";

export default function Footer({ success, positions, postHandler }) {
  const [checked, setChecked] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const [disabledButton, setDisabledButton] = useState(true);
  const [file, setFile] = useState(null);
  const name = useInput("", { emptyError: true, minLength: 2 });
  const email = useInput("", {
    emptyError: true,
    emailFormat: true,
    spacesError: true,
  });
  const phone = useInput("", { emptyError: true, phoneFormat: true }, true);

  useEffect(() => {
    if (name.invalid || email.invalid || phone.invalid || !checked || !file) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  });
  function uploadHandler(file) {
    setUploadError("");
    if (file) {
      if (file.size > 1024 * 1024 * 5) {
        setUploadError("Image should be smaller than 5MB");
        return;
      }
      setFile(file);
    }
    return;
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          {success ? (
            <Success />
          ) : (
            <>
              <h1 className="footer__title">Working with POST request</h1>
              <Form
                name={name}
                email={email}
                phone={phone}
                positions={positions}
                file={file}
                uploadHandler={uploadHandler}
                uploadError={uploadError}
                postHandler={postHandler}
                disabledButton={disabledButton}
                checked={checked}
                setChecked={setChecked}
              />
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
