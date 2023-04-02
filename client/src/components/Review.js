import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./Review.css";
// import { useEffect, useState } from "react";

function Review(){
 return (
        <div className="container">
        <div className="review">
            <div className="name-row">
            <img
                className="pic"
                src="https://picsum.photos/50/50?random=1"
                alt="user-pic"
            />
            <h4> Petfinder User </h4>
            {/* <h4> {posts.user_id} </h4> */}
            <div className="btn-container">
                <button 
                // onClick={() => handleDelete(posts.id)} 
                className=""
                >
                <FontAwesomeIcon icon={faTrash} className="btn-ic2" />
                </button>
            </div>
            </div>
            <p>
            <b> Post: </b>
            {/* <em>{posts.description}</em> */}
            <em>I last saw this beautiful Dog at Kilway Outside KiIMall .</em>
            </p>
        </div>
        </div>
    );
}

export default Review;