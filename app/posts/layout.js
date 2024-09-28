import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import { vazir } from "../fonts/font";
import "./globals.css"
import DataSettings from "../layout/dataSetting/settings";



export const metadata = {
  title: "PAYAM | Post",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={vazir.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
