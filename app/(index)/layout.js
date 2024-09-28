
import Header from "../layout/header/header";
import "./globals.css";
import { vazir } from "../fonts/font";
import Footer from "../layout/footer/footer";
import { ToastContainer } from "react-toastify";



async function getSetting() {
  try {
    const data = await fetch("http://localhost/payam/-/server/getSettings/", { cache: "force-cache" })
      .then(res => res.json())

    return data
  } catch (err) {
    console.log(err);
  }
}
const setting = await getSetting()


export const metadata = {
  title: setting?.title_web,
  description: setting?.description_web,
  icons: {
    icon: `/setting/${setting?.favicon}`
  },
  keywords: setting?.keywords.split(",")
};

export default async function RootLayout({ children }) {



  return (
    <html lang="fa-IR" dir="rtl">
      <body className={vazir.className}>
        <ToastContainer />
        <Header />
        {children}
        <Footer footerText={setting.footer} />
      </body>
    </html>
  );
}
