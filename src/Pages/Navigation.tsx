import { useNavigate } from "react-router-dom";
import "./index.scss";
import classNames from "classnames";

export const MENU_LIST = [
  { resource: "Youngwoo", key: "/home" },
  { resource: "Education", key: "/education" },
  { resource: "Experience", key: "/experience" },
];

function Navigation({
  tab,
  changeTab,
}: {
  tab: string;
  changeTab: (t: string) => void;
}) {
  const navigate = useNavigate();
  return (
    <div className="navigate">
      {MENU_LIST.map((item) => (
        <span
          className={classNames("navigate-button", {
            selected: item.key === tab,
          })}
          onClick={() => {
            changeTab(item.key);
            navigate(item.key);
          }}
        >
          {item.resource}
        </span>
      ))}
    </div>
  );
}

export default Navigation;
