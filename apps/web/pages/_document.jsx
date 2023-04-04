import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <script src="http://localhost:3001/_next/static/chunks/remoteEntry.js" />

      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
