
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Roboto } from 'next/font/google'
import FontAwesomeConfig from "./fontawesome";
import { Roboto_Condensed } from 'next/font/google';
config.autoAddCss = false;




const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],        // Required
  weight: ['400', '700'],    // Optional: choose the weights you need
  display: 'swap',           // Optional: improves performance
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={roboto.className}>
//       <body>{children}</body>
//     </html>
//   )
// }
export const metadata ={
  title: "QuoTrade | Smart Trading Made Easy",
  description: "Your smart companion for stock trading with analytics, watchlist, and portfolio insights.",
  icons: {
  icon: "/favicon.ico",
},  
};





export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.className} ${robotoCondensed.className}`}>
      
      <body>
        <FontAwesomeConfig/>
        {children}
      </body>
    </html>
  );
}
