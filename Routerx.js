import { HashRouter as Router, Routes, Route, Link, Outlet, useParams, useNavigate } from "react-router-dom";
import React from 'react';

function Routerx() {
  function Home() {
    return <h2>Home Page</h2>;
  }

  function Users() {
    return(
        <div>
            <h1>User Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"1"}>User 1</Link>
                    </li>

                    <li>
                        <Link to={"2"}>User 2</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )     
  }

  function UserProfile({params}){
    const {id} = useParams();
    return <h2>User Profile : {id}</h2>
  }

  function ProtectedPage(){
    return <h2>It's Protected</h2>
  }

  function Login() {

    const navigate = useNavigate();
    const handleLogin = ()=>{
        setTimeout(()=>{
            navigate('/protected')
        },1000)
    }

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
  }


  function NotFound() {
    return <h1>Not Found</h1>;
  }

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} >
          <Route path=":id" element={<UserProfile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routerx;
