import React from 'react'

const useFacebookLogin = () => {
  const responseFacebook = (response:any) =>{
    console.log(response)
  }


  return {
    responseFacebook
  } as const
}

export default useFacebookLogin