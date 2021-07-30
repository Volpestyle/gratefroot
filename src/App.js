import "./App.css";
import { SignIn } from "./components/signin";
import { Home } from "./components/home";
import { Route, HashRouter, Redirect } from "react-router-dom";
import useScript from "./hooks/useScript";
import toast, { Toaster } from "react-hot-toast";
//import '@awsui/global-styles/index.css';
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import { userPool } from "./utils/register-user";

const isAuth = () => {
  let cognitoUser = userPool.getCurrentUser();
  return cognitoUser.getSession((err, session) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      return true;
    }
  });
};

const GuardedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/sign-in",
          }}
        />
      )
    }
  />
);

function App() {
  useScript("../node_modules/uikit/dist/js/uikit-core.min.js");
  useScript("../node_modules/uikit/dist/js/uikit-icons.min.js");
  return (
    <div className="App">
      <HashRouter>
        <GuardedRoute exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        {/* <Route path="/service-home" component={} /> */}
        {/* <Route path="/create" component={} /> */}
        {/* <Route path="/table" component={} /> */}
        {/* <Route path="/table-empty" component={} /> */}
      </HashRouter>
      <Toaster />
    </div>
  );
}

export default App;
