import React, { useState } from "react";
import { Card, CardBody, CardTitle, Alert, Button } from "reactstrap";
import "./style.css";

const registerUser = async (url, data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
  // console.log(res.json());
};

const Register = () => {
  const [name, setNewRegName] = useState([]);
  const [email, setNewRegEmail] = useState([]);
  const [password, setNewRegPwd] = useState([]);
  const [isRegister, setRegiter] = useState(false);

  const onHandleChangeName = (e) => {
    setNewRegName(e.target.value);
  };

  const onHandleChangEmail = (e) => {
    setNewRegEmail(e.target.value);
  };
  const onHandleChangePswd = (e) => {
    setNewRegPwd(e.target.value);
  };

  const onSubmitRegister = (e) => {
    registerUser("http://172.17.0.1:3001/new/register", {
      name,
      email,
      password,
    }).then((data) => {
      if (data.NEW_USER) {
        setRegiter(true);
      }
    });
    resetField();
  };

  const resetField = () => {
    setNewRegName([]);
    setNewRegEmail([]);
    setNewRegPwd([]);
  };

  return (
    <>
      <Card className="_card">
        <CardBody>
          <CardTitle>REGISTER</CardTitle>
          <form>
            <label>name </label>
            <input
              // className="br3 pa2 input-reset ba bg-transparent ml2 mr2 w-80"
              type="text"
              name="name"
              value={name}
              onChange={(e) => onHandleChangeName(e)}
            />

            <label> email </label>
            <input
              // className="br3 pa2 input-reset ba bg-transparent ml2 mr2 w-80"
              type="text"
              name="email"
              value={email}
              onChange={(e) => onHandleChangEmail(e)}
            />

            <label>password </label>
            <input
              // className="br3 pa2 input-reset ba bg-transparent ml2 mr2 w-80"
              type="password"
              name="password"
              value={password}
              onChange={(e) => onHandleChangePswd(e)}
            />
            <Button onClick={onSubmitRegister}>reg</Button>
            <hr></hr>
            {/* <input
              className="br3 pa2 btn btn-success"
              onClick={onSubmitRegister}
              type="submit"
              value="post"
            /> */}
            {isRegister === true ? <Alert>new user</Alert> : null}
          </form>
        </CardBody>
      </Card>
    </>
  );
};
export default Register;
