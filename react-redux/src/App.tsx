import reactLogo from "./assets/react.svg";
import reduxLogo from "/redux.svg";
import "./App.css";
import UserForm from "./components/UserForm";
import { useDispatch, useSelector } from "react-redux";
import User from "./components/User";
import { getUsers } from "./redux-toolkit/slices/userServerSlice";
import EventsList from "./components/EventsList";
import { Outlet, Route, Routes } from "react-router-dom";
import EventDetails from "./components/EventDetails";
import City from "./components/City/City";

function App() {
  return (
    <div>
      <City />
      {/* <Routes>
        <Route path="/" element={<Outlet />}>
        <Route path="/" element={<EventsList />} />
          <Route path="/:id" element={<EventDetails />} />
        </Route>
      </Routes> */}
    </div>
  );
}

// function App() {
//   const { users, status, error } = useSelector((state: any) => state.userServer);
//   const dispatch = useDispatch();
//   const getDataHandler = () => {
//     dispatch(getUsers());
//   };
//   return (
//     <>
//       <div>
//         <a href="https://redux.js.org/" target="_blank">
//           <img src={reduxLogo} className="logo" alt="Redux logo" />
//         </a>

//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <h1>Redux + React</h1>
//       <div className="card">
//         <UserForm />
//       </div>
//       <div className="card">{!status && <p>Loading...</p>}</div>
//       <div className="card">
//         {users.length ? (
//           users.map((user: any, index: number) => {
//             return (
//               <div key={index}>
//                 <User user={user} />
//               </div>
//             );
//           })
//         ) : (
//           <h3>{error ? error : "No User"}</h3>
//         )}
//       </div>

//       <button onClick={getDataHandler}>GET DATA</button>
//     </>
//   );
// }

export default App;
