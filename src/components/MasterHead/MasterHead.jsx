import { useEffect, useState } from "react";
import "./MasterHead.scss";
export default function MasterHead() {
  const badSRC =
    "./static/pexels-oleksandr-pidvalnyi-1227513-very-bad-copy.jpg";
  const goodSRC = "./static/pexels-oleksandr-pidvalnyi-1227513-big-copy.jpg";
  const [imageSRC, setImageSRC] = useState(badSRC);
  useEffect(() => {
    const img = new Image();
    img.src = goodSRC;
    img.onload = () => {
      setImageSRC(goodSRC);
    };
  });
  return (
    <div className="masterhead">
      <img
        className={
          imageSRC === badSRC ? "masterhead__image" : "masterhead__image loaded"
        }
        src={imageSRC}
      />
      <div className="masterhead__body">
        <h1 className="masterhead__title">
          Test assignment for front-end developer
        </h1>
        <p className="masterhead__content">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button
          className="masterhead__button button"
          onClick={() => {
            const pageHeight = document.querySelector(".wrapper").offsetHeight;
            window.scrollTo({ top: pageHeight - 820, behavior: "smooth" });
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
