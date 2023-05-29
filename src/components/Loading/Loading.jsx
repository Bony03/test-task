import "./Loading.scss";
export default function Loading({ cursor }) {
  return <span className="loading" ref={cursor}></span>;
}
