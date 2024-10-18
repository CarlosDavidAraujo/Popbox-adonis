import { csrfToken, Vite } from '#start/view'
import type { Children } from '@kitajs/html'

interface LayoutProps {
  children: Children
}

export function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="https://unpkg.com/htmx.org@latest"></script>
          <script src="https://unpkg.com/htmx.org@latest/dist/ext/alpine-morph.js"></script>
          <title>BoringMoney</title>

          <Vite.Entrypoint entrypoints={['resources/css/app.css', 'resources/js/app.js']} />
        </head>
        <body x-data="" hx-headers={`{"X-CSRF-TOKEN": "${csrfToken()}"}`}>
          {children}
        </body>
      </html>
    </>
  )
}
