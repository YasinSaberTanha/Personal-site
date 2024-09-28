

import { cookies } from "next/headers"
import { redirect } from "next/navigation";


export async function GET() {

    const token = await fetch('http://localhost/payam/-/server/functions/hashSession.php', { cache: "no-cache" })
    const tokenAPI = await token.json()

    cookies().set("Token_Api", tokenAPI, {
        path: "/",
        httpOnly: true,
        secure: true,
    })

    redirect("/panel")
}