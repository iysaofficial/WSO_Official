import GalleryComp from '@/components/GalleryComp';
import NavbarComp from '@/components/NavbarComp';
import FooterComp from '@/components/FooterComp';
import { ReactNode } from 'react';

export const metadata = {
  title: "WSO Official"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0N2NCRNM15"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-0N2NCRNM15');
            `,
          }}
        />
      </head>
      <body>
        <NavbarComp />
        {children}
        {/* <br />
        <br />
        <br />
        <GalleryComp/>
        <br />
        <br />
        <br /> */}
        <FooterComp />
      </body>
    </html>
  );
}

