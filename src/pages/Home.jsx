import Headers from "../components/Headers";
import { useSearchParams } from "react-router-dom";

function Home() {

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  return (
    <div>
      <Headers />
      Home, {name}
    </div>
  )
}

export default Home;