import React from 'react'

const Avatar = ({ children,backgroundColor,py,px,color,borderRadius,fontSize, cursor }) => {

  const style ={
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'green',
    borderRadius,
    fontSize,
    textAlignment: "center",
    cursor: cursor || null
  }


  return (
    <div style={style}>
      { children }
    </div>
  )
}

export default Avatar