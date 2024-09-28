

import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default function ImgesAndVideo() {
    return (

        <section className="section">
            <div className="galore_image">
                <div className="galore_image_titel">
                    <Link href={"/kj"}>عکس ها</Link>
                </div>
                <div className="galore_image_upload" >
                    <div>
                        <Image src="/image/download(1).jpg" width={300} height={300} alt="image" />
                        <div className="icon_text">
                            <h2>یک روز خوب با دوستان نانتانتا تمنتم منتمنت</h2>
                            <button><span><b>14</b></span><FaHeart className="icon_image" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image src="/image/download(2).jpg" width={300} height={300} alt="image" />
                        <div>
                            <div className="icon_text">
                                <h2>یک روز خوب با دوستان نانتانتا تمنتم منتمنت</h2>
                                <button><span><b>14</b></span><FaHeart className="icon_image" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src="/image/yasinsaber.jpg" width={300} height={300} alt="image" />
                        <div>
                            <div className="icon_text">
                                <h2>یک روز خوب با دوستان نانتانتا تمنتم منتمنت</h2>
                                <button><span><b>14</b></span><FaHeart className="icon_image" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="galore_video">
                <div className="galore_video_titel">
                    <Link href={"/jkh"}>فیلم ها</Link>
                </div>
                <div className="galore_video_upload" >
                    <div>
                        <video className="video_player" controls>
                            <source src="/video/yasin.mp4" type="video/mp4" />
                        </video>
                        <div>
                            <div className="icon_text">
                                <h2>یک روز خوب با دوستان نانتانتا تمنتم منتمنت</h2>
                                <button><span><b>14</b></span><FaHeart className="icon_image" />
                                </button>
                            </div>
                        </div>
                    </div>


                    <div>
                        <video className="video_player" controls>
                            <source src="/video/yasin.mp4" />
                        </video>
                        <div>
                            <div className="icon_text">
                                <h2>یک روز خوب با دوستان نانتانتا تمنتم منتمنت</h2>
                                <button><span><b>14</b></span><FaHeart className="icon_image" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <video className="video_player" controls>
                            <source src="/video/yasin.mp4" type="video/mp4" />
                        </video>                        <div>
                            <div className="icon_text">
                                <h2>یک روز خوب با دوستان نانتانتا تمنتم منتمنت</h2>
                                <button><span><b>14</b></span><FaHeart className="icon_image" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}