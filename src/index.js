import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./_base.scss";
import store from "./redux/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
 
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>,
 
);
