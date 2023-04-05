import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'

import { Col, Row } from 'components'

const ProView = () => {
  return (
    <Col className="bg-black text-white h-screen justify-center items-center p-8 bg-hero bg-cover bg-center tablet:bg-3x tablet:bg-bottom bg-no-repeat">
      {/* <Image src={'/logo.gif'} alt="Logo" width={360} height={360} /> */}
      <p className="text-[24px] tablet:text-[20px] text-center">A Minecraft: Bedrock Edition utility mod.</p>
      <Row className="text-[20px] tablet:flex-col tablet:space-x-0 tablet:space-y-4">
        <Link
          href={''}
          className="w-[140px] text-center px-6 tablet:px-4 py-4 tablet:py-2 bg-green-600 rounded-full hover:opacity-80"
        >
          Download
        </Link>
        <Link
          href={'https://github.com'}
          target="_blank"
          className="w-[140px] text-center px-6 tablet:px-4 py-4 tablet:py-2 bg-gray-600 rounded-full hover:opacity-80"
        >
          Github
        </Link>
        <Link
          href={'https://discord.gg/ambrosial'}
          target="_blank"
          className="w-[140px] text-center px-6 tablet:px-4 py-4 tablet:py-2 bg-purple-400 rounded-full hover:opacity-80"
        >
          Discord
        </Link>
      </Row>
    </Col>
  )
}

export default ProView
