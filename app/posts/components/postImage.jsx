
import { FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default async function PostImage({ post }) {
    
    
    return (
        <>
            <div className="post">
                <div className="post_info" style={{ gridTemplateRows: "60px 140px 45px" }}>
                    <h1>{post.title}</h1>
                    <p ><b>{post.description}</b></p>
                    <div>
                        <button><span><b>{post.likes}</b></span><FaHeart className="icon_heart" /></button>
                        <Link className="link_comment" href={"posts/12"}><span><b>3</b></span><FaComment className="icon_comment" /></Link>
                        <span><b>{post.date_create}</b></span>
                    </div>
                </div>
                <Image src={`/files/${post.file}`} style={{ height: "230px", margin: "0px 0px 30px 0px" }} width={300} height={200} alt="image" />
            </div>
            <hr />
        </>
    );
}