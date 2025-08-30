import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Postlist  as  Postlistdata} from "../../store/postliststore";

const Post = ({ post }) => {
  const {deletepost}=useContext(Postlistdata)
  
  return (
    <div className="card card-style " style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() =>deletepost(post.id)}>
          <MdDelete />
          <span className="visually-hidden">unread messages</span>
        </span>
        </h5>
        
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <button type="button " key={tags} className="btn btn-primary tags">
            {tags}
          </button>
        ))}<div className="alert alert-success reaction" role="alert">
  This post has been liked by {post.reaction}
</div>
      </div>
    </div>
  );
};
export default Post;
