import { useEffect, useRef } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./App.scss";
import Loading from "./components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  positionsArray,
  usersArray,
  usersArrayNextPage,
  usersArrayPage,
  usersLoading,
  usersSuccess,
} from "./store/user/selectors/userSelectors";
import { closeSuccess, setPage } from "./store/user/userSlice";
import { getUsersThunk } from "./store/user/thunk/getUsersThunk";
import { postUserThunk } from "./store/user/thunk/postUserThunk";
import { getPositionsThunk } from "./store/user/thunk/getPositionsThunk";
function App() {
  const dispatch = useDispatch();
  const users = useSelector(usersArray);
  const nextPage = useSelector(usersArrayNextPage);
  const page = useSelector(usersArrayPage);
  const loading = useSelector(usersLoading);
  const success = useSelector(usersSuccess);
  const positions = useSelector(positionsArray);
  const cursor = useRef();
  function postHandler(positionId, name, email, phone, photo) {
    dispatch(postUserThunk({ positionId, name, email, phone, photo }));
  }
  function showMoreHandler() {
    dispatch(setPage());
  }
  function loadingHandler(x, y) {
    if (loading) {
      cursor.current.style.top = y + 20 + "px";
      cursor.current.style.left = x - 40 + "px";
    }
  }
  useEffect(() => {
    dispatch(getUsersThunk(page));
  }, [page]);
  useEffect(() => {
    dispatch(getPositionsThunk());
  }, []);
  useEffect(() => {
    setTimeout(() => dispatch(closeSuccess()), 2000);
  }, [success]);
  return (
    <div
      className="wrapper"
      onMouseMove={(e) => {
        loadingHandler(e.pageX, e.pageY);
      }}
    >
      <Header />
      <Main
        users={users}
        showMoreHandler={showMoreHandler}
        nextPage={nextPage}
      />
      <Footer
        success={success}
        positions={positions}
        postHandler={postHandler}
      />
      {loading && <Loading cursor={cursor} />}
    </div>
  );
}

export default App;
