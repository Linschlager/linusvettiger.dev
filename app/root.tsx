import {
  Links,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";

import styles from './styles/global.css';

export function links () {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Code&family=Fira+Sans:wght@400;500" },
    { rel: "stylesheet", href: styles }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Linus Vettiger</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
