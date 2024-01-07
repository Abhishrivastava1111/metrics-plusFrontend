import ResponsiveDrawer from "./component/ResponsiveDrawer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <ProtectedRoute />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
