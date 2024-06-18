import { getAuth } from "firebase/auth";
import { Button } from "semantic-ui-react";

const App = () => {
  console.log(getAuth());

  return (
    <div>
      <Button primary>Primary</Button>
    </div>
  );
};

export default App;
