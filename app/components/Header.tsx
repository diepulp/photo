import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className="flex flex-row">
      <SocialIcon url="https://www.linkedin.com/in/vladimir-ivanov-dev/" fgColor="grey" bgColor="transparent" />
      <SocialIcon url="https://www.linkedin.com/in/vladimir-ivanov-dev/" fgColor="grey" bgColor="transparent" />
      <SocialIcon url="https://www.linkedin.com/in/vladimir-ivanov-dev/" fgColor="grey" bgColor="transparent" />
      <SocialIcon url="https://www.linkedin.com/in/vladimir-ivanov-dev/" fgColor="grey" bgColor="transparent" />
    </header>
  )
}
