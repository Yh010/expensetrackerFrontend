import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function GoBack() {
  return (
    <Link to="/">
      <Button>Go Back</Button>
    </Link>
  );
}

export default GoBack;
