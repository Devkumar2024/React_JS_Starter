import { Farewell } from "./Farewell";
import Greeting from "./Greeting";
import {TestComponent} from "./TestComponent"

function Conversation() {
  return (
    <>
      <Greeting />
      <Farewell />
      <TestComponent/>
    </>
  );
}

export { Conversation };
