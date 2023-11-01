import React from 'react'

interface IProps {
  text: string
}

export default function Button({ text, ...rest }: IProps) {
  return <button {...rest}>{text}</button>
}
