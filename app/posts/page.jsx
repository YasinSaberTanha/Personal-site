import PostImage from "./components/postImage";
import PostVideo from "./components/postVideo";


export default async function Posts() {

  const getPosts = async () => {
    try {
      const data = await fetch("http://localhost/payam/-/server/getPosts/", { cache: "force-cache" })
      const posts = await data.json()


      
      const renderPosts = posts.map((post) => (<PostImage post={post} />))
      return renderPosts
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <section>
      {getPosts()}
    </section>
  );
}