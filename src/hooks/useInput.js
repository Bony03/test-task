import { useEffect, useState } from "react";
export const useInput = (initialValue, validations, onlyNumbers = false) => {
  const useValidator = (value, validations) => {
    const [emptyError, setEmptyError] = useState(false);
    const [minLength, setMinLength] = useState(false);
    const [emailFormat, setEmailFormat] = useState(false);
    const [phoneFormat, setPhoneFormat] = useState(false);
    const [spacesError, setSpacesError] = useState(false);
    const [invalid, setInvalid] = useState(false);
    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case "emptyError":
            value.trim() ? setEmptyError(false) : setEmptyError(true);
            break;
          case "minLength":
            value.trim().length < validations[validation]
              ? setMinLength(true)
              : setMinLength(false);
            break;
          case "emailFormat":
            const email =
              /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|biz|info|name|aero|biz|info|jobs|museum)/i;
            email.test(value.trim())
              ? setEmailFormat(false)
              : setEmailFormat(true);
            break;
          case "phoneFormat":
            const phone = /^\+380[0-9]{9}/;
            phone.test(value.trim())
              ? setPhoneFormat(false)
              : setPhoneFormat(true);
            break;
          case "spacesError":
            value.search(/\s/g) !== -1
              ? setSpacesError(true)
              : setSpacesError(false);
            break;
          default:
            break;
        }
      }
    }, [value]);
    useEffect(() => {
      if (
        emptyError ||
        minLength ||
        emailFormat ||
        phoneFormat ||
        spacesError
      ) {
        setInvalid(true);
      } else {
        setInvalid(false);
      }
    }, [emptyError, minLength, emailFormat, phoneFormat, spacesError]);
    return {
      emptyError,
      minLength,
      emailFormat,
      phoneFormat,
      spacesError,
      invalid,
    };
  };
  const [value, setValue] = useState(initialValue);
  const [isBlur, setIsBlur] = useState(false);
  const valid = useValidator(value, validations);
  const onChange = (v) => {
    if (onlyNumbers) {
      if (!/^[a-zA-Z]/i.test(v)) {
        setValue(v);
      }
    } else {
      setValue(v);
    }
  };

  const onBlur = () => {
    setIsBlur(true);
  };
  return { value, onChange, onBlur, isBlur, ...valid };
};
