import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postlist: [],
  addpost: () => {},
  addinitialpost:() =>{},
  deletepost: () => {},
});
const postlistreducer = (currentpostlist, action) => {
  let newpostlist = currentpostlist;

  if (action.type === "DELETE_POST") {
    newpostlist = currentpostlist.filter(
      (post) => post.id !== action.payload.postid
    );
  }
  else if (action.type === "ADD_initial_POST") {
    newpostlist = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newpostlist = [action.payload, ...currentpostlist];
  }

  return newpostlist;
};

const Postlistprovider = ({ children }) => {
  const [postlist, dispatchpostlist] = useReducer(postlistreducer, []);

  const addpost = (userid, posttitle, postbody, reaction, tags) => {
    dispatchpostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: posttitle,
        body: postbody,
        reaction: reaction,
        userid: userid,
        tags: tags,
      },
    });
  };
  const addinitialpost = (posts) => {
    dispatchpostlist({
      type: "ADD_initial_POST",
      payload: {
        posts,
      },
    });
  };

  const deletepost = (postid) => {
    dispatchpostlist({
      type: "DELETE_POST",
      payload: {
        postid: postid,
      },
    });
  };

  return (
    <Postlist.Provider
      value={{
        postlist: postlist,
        addpost: addpost,
        addinitialpost:addinitialpost,
        deletepost: deletepost,
      }}
    >
      {children}
    </Postlist.Provider>
  );
};

export default Postlistprovider;
