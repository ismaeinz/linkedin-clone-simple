import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/Login";
import store from "./redux/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
// https://console.firebase.google.com/project/linkedin-clone-simple/authentication/providers
