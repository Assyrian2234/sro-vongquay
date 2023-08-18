import Header from "@/components/header/page";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/page";
import "@/public/css/vq_sro.css";
import { requireAuth } from "@/services/server-side/authen";
import { StoreProvider } from "@/store";
import { Providers } from "@/redux/provider";
import { store } from "@/redux/configure-store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function asyncRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await requireAuth();
  return (
    <html lang="en">
      {/* <a className="btn_totop">
        <img src="/assets/images/btn_top.png" alt="" />
      </a>
      <a href="" className="box_napsil_fixleft">
        <img src="/assets/images/bg_napsil.png" alt="" />
      </a> */}
      <body>
        <Providers>
          <Header token={token} />
          {children}
          <Footer />
        </Providers>
      </body>
      <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
      <script type="text/javascript" src="js/app.js"></script>
    </html>
  );
}
