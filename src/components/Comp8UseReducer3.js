// import React, {useState, useEffect } from "react";
// import axios from "axios";

// const initPostState={};
// const initErrorMessageState=""
// const Comp8UseReducer3 = () => {
//   const[post,setPost]=useState(initPostState);
//   const [errorMessage,setErrorMessage] =useState(initErrorMessageState);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => setPost(response.data)).catch((error)=>setErrorMessage(error.message));
//   }, []);
//   return(

//    <div>
//     <h1>Post Info:</h1>
//   {errorMessage? <h3>Error Message:{errorMessage}</h3>: <><h2>Post Id: {post.id}</h2><h3>Post title:{post.title}</h3>
//   <p>Post Body:{post.body}</p></>}

//   </div>
//   )
// };

// export default Comp8UseReducer3;
import React, { useReducer, useEffect } from "react";
import style from "../style/style.module.css";
import axios from "axios";
const initState = {
  post: {},
  errorMessage: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return { ...state, post: action.postInfo };
    case "failed":
      return{...state,errorMessage:action.error};
    default:
      return state;
  }
};
const Comp8UseReducer3 = () => {
  const [data, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) =>
        dispatch({ type: "success", postInfo: response.data })
      )
      .catch((error) => dispatch({ type: "failed", error: error.message }));
  }, []);
  return <div className={style["Comp8b"]}>
    {data.errorMessage?<h3>{data.errorMessage}</h3>: <div>
      <h3>Post Id:{data.post.id}</h3>
      <h3>Post Title:{data.post.title}</h3>
      <h3>Post Body: {data.post.body}</h3>
      </div>}
  </div>;
};

export default Comp8UseReducer3;
