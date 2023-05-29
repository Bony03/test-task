import { useRef, useState } from "react";
import "./Card.scss";
export default function Card({
  showText,
  hideText,
  src,
  name,
  position,
  email,
  tel,
}) {
  const positionRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const [srcError, setSrcError] = useState(false);
  return (
    <div className="main__user card">
      <img
        className="card__photo"
        src={srcError ? "./static/person.svg" : src}
        alt={"Photo of " + name}
        onError={(e) => {
          setSrcError(true);
        }}
      />
      <p
        className="card__name points"
        onMouseOver={(e) => {
          showText(e.pageX, e.pageY, e.target.outerText, nameRef);
        }}
        onMouseMove={(e) => {
          showText(e.pageX, e.pageY, e.target.outerText, nameRef);
        }}
        onMouseLeave={() => {
          hideText(nameRef);
        }}
      >
        {name}
      </p>
      <span className="card__text-window" ref={nameRef}></span>

      <p
        className="card__position points"
        onMouseOver={(e) => {
          showText(e.pageX, e.pageY, e.target.outerText, positionRef);
        }}
        onMouseMove={(e) => {
          showText(e.pageX, e.pageY, e.target.outerText, positionRef);
        }}
        onMouseLeave={() => {
          hideText(positionRef);
        }}
      >
        {position}
      </p>
      <span className="card__text-window" ref={positionRef}></span>
      <p
        className="card__email points"
        onMouseOver={(e) => {
          showText(e.pageX, e.pageY, e.target.outerText, emailRef);
        }}
        onMouseMove={(e) => {
          showText(e.pageX, e.pageY, e.target.outerText, emailRef);
        }}
        onMouseLeave={() => {
          hideText(emailRef);
        }}
      >
        {email}
      </p>
      <span className="card__text-window" ref={emailRef}></span>
      <p className="card__phone">{tel}</p>
    </div>
  );
}
