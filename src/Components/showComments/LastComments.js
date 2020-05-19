import React, { useEffect, useState } from "react";

const lastUserComments = (last_u_commnets) => {
  return last_u_commnets.map((user, key) => {
    return <div key={key}>{user.users_comments}</div>;
  });
};

const LastComments = () => {
  const [lastUserComm, setUserCommets] = useState([]);

  useEffect(() => {
    fetch("http://172.17.0.1:3001/last/user/comments")
      .then((res) => res.json())
      .then((data) => {
        setUserCommets(data);
      });
  }, []);

  return <p>{lastUserComments(lastUserComm)}</p>;
};

export default LastComments;
