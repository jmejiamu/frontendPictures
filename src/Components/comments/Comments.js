import React from 'react';
import {FaComments} from 'react-icons/fa'

const AddCommensts = () => {

    return(
        <div>
           <form>
                <label>
                    <><FaComments size={23}/></>
                    <input className="br3 pa2 input-reset ba bg-transparent ml2 mr2 w-50"
                        type="text"
                        name="name"
                        placeholder="Write a comment..." />
                </label>
                <input className="br3 pa2"
                type="submit" 
                value="Submit" />
            </form> 
        </div>
    )
}

export default AddCommensts;