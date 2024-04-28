import { Provider } from "react-redux";
import NavigationStack from "./navigation/navigation-stack";
import { reduxStore } from "./redux/store/store";


function App(){
  return(
    <div>
      <Provider store={reduxStore}>
      <NavigationStack/>
      </Provider>
    
    </div>
  )
}
export default App;

