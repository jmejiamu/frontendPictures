import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
const usersRepley = (user_repley) => {
  return user_repley.map((user, key) => {
    return <div key={key}>{user.user_repley}</div>;
  });
};

const ShowRepley = () => {
  const [userRepleys, setUserRepley] = useState([]);

  useEffect(() => {
    fetch("http://172.17.0.1:3001/repley")
      .then((res) => res.json())
      .then((data) => {
        setUserRepley(data);
      });
  }, []);

  return (
    <Row>
      <Col sm={{ size: 6, order: 2, offset: 1 }}>
        <div>{usersRepley(userRepleys)}</div>
      </Col>
    </Row>
  );
};

export default ShowRepley;
