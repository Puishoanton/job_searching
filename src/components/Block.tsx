import React, { FC } from 'react'

type BlockProps = {
  color: string
  BGcolor: string
  text: string
}

const Block: FC<BlockProps> = ({ color, text, BGcolor }) => {
  return (
    <p
      style={{
        backgroundColor: BGcolor,
        color: color,
        border: '1px solid rgba(85, 105, 158, 0.3)',
        borderRadius: '8px',
      }}>
      {text}
    </p>
  )
}

export default Block
