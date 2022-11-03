import React from 'react'
import { Magic } from 'magic-sdk';
import {useState } from 'react'
function Layout( children ) {
  const magic = new Magic( process.env.MAGIC_PUBLIC_KEY );

  return (
    <div >{children}</div>
  )
}

export default Layout