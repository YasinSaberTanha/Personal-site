
import { FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default async function PostImage({ post }) {
    

    const vertical = {
        height: "400px", width: "230px", margin: "0px auto 40px 0px"
    }
    const horizontal = {
        height: "230px", margin: "0px auto 40px 0px"
    }

    return (
        <>
            <div className="post">
                <div className="post_info" style={post.mode == "vertical" ? { gridTemplateRows: "60px 310px 45px" } : { gridTemplateRows: "60px 140px 45px" }}>
                    <h1>{post.title}</h1>
                    <p ><b>{post.description}</b></p>
                    <div>
                        <button><span><b>{post.likes}</b></span><FaHeart className="icon_heart" /></button>
                        <Link className="link_comment" href={`posts/${post.post_id}`}><span><b>{post.comment}</b></span><FaComment className="icon_comment" /></Link>
                        <span><b>{post.date_create}</b></span>
                    </div>
                </div>
                <Image src={`/files/${post.file}`} style={post.mode == "vertical" ? vertical : horizontal} width={300} height={200} alt="image" />
            </div>
            <hr />
        </>
    );
}