import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LoginLayout from "./layout/LoginLayout";
import store from "./store/config/configureStore";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <LoginLayout />
            </Router>
        </Provider>
    );
}

export default App;
