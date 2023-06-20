// import logo from './logo.svg';
import './App.scss'; // Ngang cấp thì như vậy để link
import FormT from './Example/testForm.js';
// import TestJS from './Example/testJS.js';
// import Display from './Example/display.js';
import ListToDo from './TodoApp/list.js';
// import SplitComponent from './Example/splitComponent.js';
import ListUser from './Users/ListUsers.js';
import Home from './Home.js';
import DetailUser from'./Users/DetailUser.js';
import Info from './info.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Function Components
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Navigation/nav.js';
function App() {
  // const App = () => {
  return (
    <Router>
      <div className="App">
          <Nav/>
        <header className="App-header">
            <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/todo" exact>
              <ListToDo />
            </Route>
            <Route path="/info" exact>
              <Info />
            </Route>
            <Route path="/form" exact>
              <FormT />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/detail-user/:id" >
              <DetailUser /> 
            </Route>
          </Switch>
        </header>
          {/* <TestJS /> */}
          {/* <Display /> */}
          {/* <SplitComponent /> */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </Router>
  );
}

export default App;
