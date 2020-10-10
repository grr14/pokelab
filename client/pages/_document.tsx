import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:title" content="Pokelab" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.pokelab.xyz" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          />
          <meta name="theme-color" content="#E31010" />
          <meta
            name="description"
            content="Pokelab.xyz - A Pokémon informations website"
          />
          <title>Pokelab.xyz - A Pokémon informations website</title>
          <link rel="icon" type="image/x-icon" href="/vercel.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
