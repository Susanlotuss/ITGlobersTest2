import { Link } from "react-router-dom";
import Records from "../../records.json";

const NavBar = () => {
  return (
    <>
      {Records.map((record) => {
        return (
          <div className="box" key={record.id}>
            <nav>
              <ul>
                <li>
                  <Link to={record.path}>{record.title}</Link>
                </li>
              </ul>
            </nav>
          </div>
        );
      })}
    </>
  );
};

export default NavBar;
