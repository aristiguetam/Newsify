import { Navbar } from '@/components'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head/>
      <body>
        <header>
          <Navbar />
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
