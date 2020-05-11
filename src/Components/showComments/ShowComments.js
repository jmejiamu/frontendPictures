import React, { useEffect, useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { FaComments } from "react-icons/fa";
// import "./comments.css"; //i am not using this styles

const users_comm = (u_commnets) => {
  return u_commnets.map((user, key) => {
    return <div key={key}>{user.users_comments}</div>;
  });
};

const ShowComments = () => {
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    fetch("http://172.17.0.1:3001/users_comments")
      .then((res) => res.json())
      .then((user_comm) => {
        setComments(user_comm);
      });
  }, []);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        <FaComments size={23} />
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>{users_comm(Comments)}</ModalBody>
        <Button color="success" onClick={toggle}>
          post
        </Button>{" "}
      </Modal>
    </div>
  );
};

export default ShowComments;
