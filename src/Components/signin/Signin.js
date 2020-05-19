import React, { useState } from "react";
import { Card, CardBody, CardTitle, Button, Alert } from "reactstrap";
import { useHistory } from "react-router-dom";
import "../register/style.css"; // move this to app.css

const userSignin = async (url, data = {}) => {
  const res = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

const Signin = ({ userCredential }) => {
  const [email, setEmail] = useState([]);
  const [password, setPwd] = useState([]);
  const [emptyfield, setEmptyfield] = useState(false);
  // const [succes, setSuccesSigin] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);

  const onHandelEmail = (e) => {
    setEmail(e.target.value);
  };

  const onHandelPwd = (e) => {
    setPwd(e.target.value);
  };
  let history = useHistory();

  const onSubmitSigninFrom = () => {
    userSignin("http://172.17.0.1:3001/signin", { email, password })
      .then((data) => {
        if (data.SUCCESS) {
          // setSuccesSigin(true);
          userCredential(email, data.SUCCESS);
          history.push("/home");
        } else {
          if (data.NOT_FOUND) {
            setEmptyfield(true);
          } else {
            setWrongPass(true);
          }
        }
      })
      .catch((errs) => {
        console.log("bad request", errs);
      });
  };

  return (
    <>
      <Card className="_card">
        <CardBody>
          <CardTitle>SIGNIN</CardTitle>
          <form>
            <label> email </label>
            <input
              // className="br3 pa2 input-reset ba bg-transparent ml2 mr2 w-80"
              type="text"
              name="name"
              onChange={(e) => onHandelEmail(e)}
            />

            <label>password </label>
            <input
              // className="br3 pa2 input-reset ba bg-transparent ml2 mr2 w-80"
              type="password"
              name="password"
              onChange={(e) => onHandelPwd(e)}
            />
            <Button onClick={onSubmitSigninFrom}>signin</Button>
            {/* <input
              className="br3 pa2 btn btn-success"
              onClick={onSubmitSigninFrom}
              type="submit"
              value="post"
            /> */}
            <hr></hr>
            {emptyfield === true ? (
              <Alert color="danger">not found</Alert>
            ) : null}
            {/* {succes === true ? history.push("/home") : null} */}
            {wrongPass === true ? <Alert>wrong</Alert> : null}
          </form>
        </CardBody>
      </Card>
    </>
  );
};
export default Signin;
