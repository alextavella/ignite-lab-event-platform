import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { Event } from "./pages/Event";

dayjs.locale("pt-br");

function App() {
  return <Event />;
}

export default App;
