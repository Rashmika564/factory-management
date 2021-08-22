<<<<<<< HEAD
import "./App.css";
import SuperAdminSideNav from "./components/SuperAdmin/sideNav/Sidebar";
import Sidebar from "./components/storeManagerComponents/sideNavigation/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicInfo from "./pages/SuperAdmin/BasicInfo";
import UserRoles from "./pages/SuperAdmin/UserRoles";
import UserList from "./pages/SuperAdmin/UserList";
import Categories from "./pages/SuperAdmin/Categories";
import ProductCodes from "./pages/SuperAdmin/ProductCodes";
import MaterialCodes from "./pages/SuperAdmin/MaterialCodes";
import NotFound from "./components/storeManagerComponents/notfound";
=======

import './App.css';
import SuperAdminSideNav from './components/SuperAdmin/sideNav/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BasicInfo from './pages/SuperAdmin/BasicInfo';
import UserRoles from './pages/SuperAdmin/UserRoles';
import UserList from './pages/SuperAdmin/UserList';
import Categories from './pages/SuperAdmin/Categories';
import ProductCodes from './pages/SuperAdmin/ProductCodes';
import MaterialCodes from './pages/SuperAdmin/MaterialCodes';
import SuperAdminDashboard from './pages/SuperAdmin/Dashboard';
// import NotFound from "./components/notfound";
// import SMDashBoard from "./components/sm_dashboard";
// import NewItemForm from "./components/newitemform";
// import ItemRecord from "./components/itemsrecords";
// import MyProfile from "./components/myprofile";
// import NavBar from "./components/navbar";
// import Item from "./components/items";


import EmployeeDashboard from './pages/Employee/EmployeeDashboard';
import Assignments from './pages/Employee/Assignments';
import Calendar from './pages/Employee/Calendar';
import Leave from './pages/Employee/Leave';
import Profile from './pages/Employee/Profile';
import Payments from './pages/Employee/Payments';




// import routes from './route'
// import NotFound from "./components/storeManagerComponents/notfound";
>>>>>>> 673b6dfd69fc9d0da450afd612b1af8d92b3be46
import SMDashBoard from "./components/storeManagerComponents/sm_dashboard";
import NewItemForm from "./components/storeManagerComponents/newitemform";
import ItemRecord from "./components/storeManagerComponents/itemsrecords";
import MyProfile from "./components/storeManagerComponents/myprofile";
import NavBar from "./components/storeManagerComponents/navbar";
import Item from "./components/storeManagerComponents/items";

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Sidebar />
      {/* <NavBar /> */}
      <main className="container">
        <Switch>
          <Route path="/basic-info" exact component={BasicInfo} />
          <Route path="/user-roles" exact component={UserRoles} />
          <Route path="/user-list" exact component={UserList} />
          <Route path="/categories" exact component={Categories} />
          <Route path="/product-codes" exact component={ProductCodes} />
          <Route path="/metirial-codes" exact component={MaterialCodes} />
=======
            <SuperAdminSideNav />
            {/* <NavBar /> */}
    <main className="container">
      <Switch>
          <Route path='/super-admin-dashboard' exact component={SuperAdminDashboard} />
          <Route path='/basic-info' exact component={BasicInfo} />
          <Route path='/user-roles' exact component={UserRoles} />
          <Route path='/user-list' exact component={UserList} />
          <Route path='/categories' exact component={Categories} />
          <Route path='/product-codes' exact component={ProductCodes} />
          <Route path='/metirial-codes' exact component={MaterialCodes} />
>>>>>>> 673b6dfd69fc9d0da450afd612b1af8d92b3be46
          <Route path="/smdashboard" component={SMDashBoard}></Route>
          <Route path="/myprofile" component={MyProfile}></Route>
          <Route path="/items/:id" component={NewItemForm}></Route>
          <Route path="/items" component={Item}></Route>
          <Route path="/itemsrecords" component={ItemRecord}></Route>
          {/* <Route path="/notfound" component={NotFound}></Route> */}

          //employee routes
          <Route path= '/employee-dashboard' exact component={EmployeeDashboard} />
          <Route path= '/assignments' exact component={Assignments}/>
          <Route path= '/calendar' exact component={Calendar}/>
          <Route path= '/profile' exact component={Profile}/>
          <Route path= '/payments' exact component={Payments}/>

          <Route path= '/leave' exact component={Leave}/>
         
       

          {/* <Redirect to="/notfound"></Redirect> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
