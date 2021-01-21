import { BrowserRouter as Router, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { Container } from "semantic-ui-react";


import { AuthProvider } from "./context/auth";


import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


import AuthRoute from "./util/AuthRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Container>
            <MenuBar />
            <AuthRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Container>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
