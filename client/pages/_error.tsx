/** @jsx jsx */
import { jsx } from "@emotion/core"
import { NextPage } from "next"
import Link from "next/link"

interface Props {
  statusCode: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
  return (
    <div
      css={{
        fontFamily: "Impact",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        css={{
          height: "477px",
          width: "337px",
        }}
        src="/images/snorlaxgandalf.png"
        alt="Snorlax"
      />
      <p
        css={{
          fontSize: 40,
        }}
      >
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : "An error occurred on client"}
      </p>
      <Link href="/">
        <p
          css={{
            fontSize: 30,
          }}
        >
          Back to{" "}
          <a
            css={{
              color: "#E31010",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Home
          </a>
        </p>
      </Link>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
