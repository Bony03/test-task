import "./Header.scss";
export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <div className="header__logo">
            <a href="/test-task-site/">
              <img src="./static/logo.svg" alt="Test Task Logo" />
            </a>
          </div>
          <nav className="header__menu">
            <button
              className="header__user-button button"
              onClick={() => window.scrollTo({ top: 710, behavior: "smooth" })}
            >
              Users
            </button>
            <button
              className="header__signup-button button"
              onClick={() => {
                const pageHeight =
                  document.querySelector(".wrapper").offsetHeight;
                window.scrollTo({ top: pageHeight - 820, behavior: "smooth" });
              }}
            >
              Sign up
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
