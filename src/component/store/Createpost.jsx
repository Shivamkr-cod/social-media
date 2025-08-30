import { useContext, useRef } from "react";
import { Postlist } from "../../store/postliststore";

const Createpost = () => {
  const { addpost } = useContext(Postlist);
  const useridelement = useRef();
  const posttitleelement = useRef();
  const postbodyelement = useRef();
  const reactionelement = useRef();
  const tagselement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const userid = useridelement.current.value;
    const posttitle = posttitleelement.current.value;
    const postbody = postbodyelement.current.value;
    const reaction = reactionelement.current.value;
    const tags = tagselement.current.value.split(" "); 

    useridelement.current.value="";
    posttitleelement.current.value="";
    postbodyelement.current.value="";
    reactionelement.current.value ="";
    tagselement.current.value=""; 

    addpost(userid, posttitle, postbody, reaction, tags);
  }; // shivam kumar yadav

  return (
    <form className="create-post" onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          Enter your user id here
        </label>
        <input
          type="text"
          ref={useridelement}
          className="form-control"
          id="user-id"
          placeholder="your user-id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={posttitleelement}
          className="form-control"
          id="title"
          placeholder="Are You Happy Today?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <input
          type="text"
          ref={postbodyelement}
          className="form-control"
          id="body"
          placeholder="tell us something interesting"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No Of Reactions
        </label>
        <input
          type="text"
          ref={reactionelement}
          className="form-control"
          id="reactions"
          placeholder="How Many People Reacted To This"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your hashtags here
        </label>
        <input
          type="text"
          ref={tagselement}
          className="form-control"
          id="tags"
          placeholder="Enter tags here"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Createpost;
