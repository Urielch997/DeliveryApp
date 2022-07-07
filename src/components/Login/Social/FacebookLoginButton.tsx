import useFacebookLogin from '@Hooks/FormLogin/Social/useFacebookLogin';
import { ReactNode } from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = () => {
  const {responseFacebook} = useFacebookLogin();

  return (
    <FacebookLogin
      appId="2865902096975315"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="my-facebook-button-class"
      icon="fa-facebook"
    />
  )
}

export default FacebookLoginButton