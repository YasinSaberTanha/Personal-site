
import { FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function PostVideo() {
    return (
        <>
            <div className="post">
                <div className="post_info" style={{ gridTemplateRows: "60px 140px 45px" }}>
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p ><b>Lorem ipsum, dolor sit amet Lorabo recusandae?</b></p>
                    <div>
                        <button><span><b>14</b></span><FaHeart className="icon_heart" /></button>
                        <Link className="link_comment" href={"posts/1"}><span><b>3</b></span><FaComment className="icon_comment" /></Link>
                        <span><b>1403/10/20</b></span>
                    </div>
                </div>
                <video style={{ height: "230px", margin: "0px 0px 30px 0px" }} controls >
                    <source src="/video/yasin.mp4" />
                </video>
            </div>
            <hr />
        </>
    );
}