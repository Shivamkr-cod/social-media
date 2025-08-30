import { useContext, useEffect, useState } from "react";
import Post from "./post";
import { Postlist as Postlistdata } from "../../store/postliststore";
import Welcome from "./welcome";
import Loadingspinner from "./loadingspinner";

const Postlist = () => {
  const { postlist, addinitialpost } = useContext(Postlistdata);
  const [fetching,setfetching] = useState(false);

  useEffect(() =>{
      setfetching(true);
      fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addinitialpost(data.posts);
        setfetching(false); 
      });
      return () =>{
console.log("cleaning up");
      }
  }, []);

 

  return (
    <>
    {fetching && <Loadingspinner></Loadingspinner>}
      { !fetching && postlist.length === 0 && <Welcome></Welcome>}
      { !fetching && postlist.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Postlist;
