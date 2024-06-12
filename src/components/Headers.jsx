import { routerList } from "../routers/Root.jsx";
import {Link} from "react-router-dom";

function Headers() {
  return (
    <header>
        {
          routerList.map((todo) => (
            <Link to={todo.path} key={todo.path}>
              {todo.name}
            </Link>
          ))
        }
    </header>
  )
}

export default Headers