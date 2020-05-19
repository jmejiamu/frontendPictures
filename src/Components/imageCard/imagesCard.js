import React, { useState } from "react";
// import { FaComments } from "react-icons/fa";
import ShowComments from "../showComments/ShowComments";
import LastComments from "../showComments/LastComments";

const ImagesCard = (props) => {
  console.log(props);

  //-- move this code to ShowComments compents. 9...30 lines
  const [comments, setComments] = useState("");
  const handleChange = (e) => {
    setComments(e.target.value);
  };

  const onSubmitComments = () => {
    // e.preventDefault()
    fetch("http://localhost:3001/comments", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: 2,
        image_id: props.dataSource.image_id,
        users_comments: comments,
      }),
    });
  };

  return (
    // <div className="tc bg-washed-red dib br3 pa3 ma2 bw2 shadow-5"></div>
    <div className="tc dib br3 pa3 ma2 bw2 shadow-5">
      <img src={props.dataSource.path_images} alt="pictures" />
      <h2>Title: Sunsets</h2>
      <hr />
      <p>{props.dataSource.user_id}</p>
      {/* <form onSubmit={onSubmitComments}></form> */}
      <div>
        <ShowComments
          comments={comments}
          onSubmitComments={onSubmitComments}
          handleChange={handleChange}
        />

        <LastComments />
      </div>
    </div>
  );
};

export default ImagesCard;
