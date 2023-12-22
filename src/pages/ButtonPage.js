import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Hi 1
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloud />
          Hi 2
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          Hi 3
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hi 4
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Hi 5
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
