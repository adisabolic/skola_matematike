import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from "./context/Auth";
import MentorHomePage from './views/Mentor/Home';
import StudentHomePage from './views/Student/Home';

function RoleRouter() {
  
  const { authToken, user } = useAuth();

  
  
  if(authToken) { //admin & mentor
    if (user.role.flag===1 || user.role.flag===2) {
      return(<Switch>
        <Route path="/" component={MentorHomePage}/>

      </Switch>)
    } else { // student
      return(<Switch>
        <Route path="/" component={StudentHomePage}/>
      </Switch>)

    }

  } else {
    return(<Redirect to="/login" />);
  }


}

export default RoleRouter;

/*<Route
      {...rest}
      render={props =>
        authToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    /> */