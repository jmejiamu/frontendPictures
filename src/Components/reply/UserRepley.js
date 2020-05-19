import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, Badge } from "reactstrap";

const UserRepley = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [repley, setRepley] = useState([]);

  const onHandelRepley = (e) => {
    setRepley(e.target.value);
  };

  const onSubmitRepley = () => {
    fetch("http://172.17.0.1:3001/user/repley", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 3,
        user_repley: repley,
      }),
    });
  };

  return (
    <>
      <div>
        <Badge
          style={{ cursor: "pointer", color: "red" }}
          color="light"
          onClick={toggle}
        >
          repley
        </Badge>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalBody>
            <form>
              <label>
                <input
                  className="br3 pa2 input-reset ba bg-transparent ml2 mr2 w-80"
                  type="text"
                  name="name"
                  value={repley}
                  placeholder="repley to tour friend..."
                  onChange={(e) => onHandelRepley(e)}
                />
              </label>
              <input
                className="br3 pa2 btn btn-success"
                onClick={onSubmitRepley}
                type="submit"
                value="repley"
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};
export default UserRepley;
