import React, {useState} from 'react';
import {FaComments} from 'react-icons/fa'
import AddCommensts from '../comments/Comments'


const ImagesCard = (props) => {
     console.log(props)
    const [comments, setComments]=useState("");
    const handleChange = (e) => {
        setComments(e.target.value)
    }

    const onSubmitComments = (e) =>{
        // e.preventDefault()
        fetch('http://192.168.99.100:3001/comments',{
            method:'post',
            headers:{ 'Content-Type': 'application/json'},
            body:JSON.stringify({
                user_id: 1,
                users_comments: comments,
                image_id:props.dataSource.image_id
            })
        })
        
    }
    return (
        <div className="tc bg-washed-red dib br3 pa3 ma2 bw2 shadow-5">
            
            <img src={props.dataSource.path_images} alt="pictures" />
            <h2>Title: Sunsets</h2>
            <p>Comments:{props.dataSource.comments}</p>
            <hr />
            {/* <AddCommensts data={props.dataSource}/> */}
            <form onSubmit={onSubmitComments}>
                <label >
                    <><FaComments size={23}/></>
                    <input className="br3 pa2 input-reset ba bg-transparent ml2 mr2 w-80"
                        type="text"
                        name="name"
                        value={comments}
                        placeholder="Write a comment..."
                        onChange={e => handleChange(e)}
                         />
                </label>
                <input className="br3 pa2 btn btn-success"
                // onClick={onSubmitComments}
                type="submit" 
                value="Submit" />
            </form> 
            
        </div>
    )
}

export default ImagesCard;