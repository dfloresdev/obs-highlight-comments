import React from 'react'
import {Anchor, Image} from './styles';
const DEFAULT_IMAGE = 'https://i.imgur.com/GWUvFch.png'

export const Comment = ({ cover = DEFAULT_IMAGE, path }) => (
  <Anchor href={path}>
    <Image src={cover} />
        holi
  </Anchor>
)
