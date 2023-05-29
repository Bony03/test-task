import MasterHead from "../MasterHead/MasterHead";
import Card from "../Card/Card";
import "./Main.scss";
export default function Main({ users, showMoreHandler, nextPage }) {
  function showText(pageX, pageY, text, ref) {
    ref.current.innerText = text;
    ref.current.style.visibility = "visible";
    ref.current.style.opacity = "1";
    ref.current.style.zIndex = "10";
    ref.current.style.top = pageY + 30 + "px";
    ref.current.style.left = pageX - 30 + "px";
  }
  function hideText(ref) {
    ref.current.innerText = "";
    ref.current.style.visibility = "hidden";
    ref.current.style.opacity = "0";
    ref.current.style.zIndex = "-1";
  }

  return (
    <main className="main">
      <MasterHead />
      <div className="main__container">
        <div className="main__body">
          <h1 className="main__title">Working with GET request</h1>
          <div className="main__content">
            {users.map((user) => {
              return (
                <Card
                  showText={showText}
                  hideText={hideText}
                  src={user.photo}
                  name={user.name}
                  position={user.position}
                  email={user.email}
                  tel={user.phone}
                  key={user.id}
                />
              );
            })}
          </div>
          {nextPage && (
            <button
              onClick={() => {
                showMoreHandler();
              }}
              className="main__button button"
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
