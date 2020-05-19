import React, { useEffect, useState } from "react";
import UserRepley from "../reply/UserRepley";
import ShowRepley from "../reply/ShowRepley";
import { Button, Modal } from "reactstrap";
import { FaComments } from "react-icons/fa";

// import "./comments.css"; //i am not using this styles
// let isComment = true;
const users_comm = (u_commnets) => {
  return u_commnets.map((user, key) => {
    return (
      <div key={key}>
        {user.users_comments}
        <UserRepley />
      </div>
    );
  });
};

const ShowComments = ({ comments, onSubmitComments, handleChange }) => {
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
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        {/* <ModalBody></ModalBody> */}
        {users_comm(Comments)}
        <ShowRepley />

        {/* <Table dark style={{ width: "100%", padding: "8px" }}>
          <tbody>
            <td>{users_comm(Comments)}</td>
            <td>
              <ShowRepley />
            </td>
          </tbody>
        </Table> */}
        <form>
          <label>
            <input
              className="br3 pa2 input-reset ba bg-transparent ml2 mr2 w-80"
              type="text"
              name="name"
              value={comments}
              placeholder="Write a comment..."
              onChange={(e) => handleChange(e)}
            />
          </label>
          <input
            className="br3 pa2 btn btn-success"
            onClick={onSubmitComments}
            type="submit"
            value="post"
          />
        </form>
      </Modal>
    </div>
  );
};

export default ShowComments;
