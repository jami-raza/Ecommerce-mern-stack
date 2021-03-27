import React from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const GoogleLoginButton = () => {

    const responseSuccesGoogle = (response) => {
        console.log(response)
        axios({
            method: "POST",
            url: "/api/googlelogin",
            data: {tokenId: response.tokenId}
        }).then (response => {
            console.log(response)
        })
    }
    const responseErrorGoogle = (response) => {

    }
    return (
        <div>
            <GoogleLogin
    clientId="544012750228-dnnu1r2jaf0u4rrtuc857h2fvnu40vbd.apps.googleusercontent.com"
    buttonText="LOGIN WITH GOOGLE"
    onSuccess={responseSuccesGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  />
        </div>
    )
}

export default GoogleLoginButton
