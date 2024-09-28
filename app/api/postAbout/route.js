import { NextResponse } from "next/server";
import { cookies } from "next/headers";


export async function POST(res) {

    const formData = await res.formData()
    formData.append("user_jwt", cookies().get("Token_User").value)

    try {

        const res = await fetch("http://localhost/payam/-/server/postAbout/", {
            cache: "no-cache",
            method: "POST",
            body: formData
        })

        return NextResponse.json(res)
    }
    catch (err) {
        console.log(err);
        return NextResponse(err)
    }


}