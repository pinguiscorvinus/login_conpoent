import React from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import TwitterLogin from 'react-twitter-login'
export class Apilogin extends React.Component {
  render() {
    const responseFacebook = (response) => {
      console.log(response)
    }
    const responseGoogle = (response) => {
      console.log(response)
    }
    const responseTwitter = (response) => {
      console.log(response)
    }
    return (
      <div className="apilogin">
        <div>
          <FacebookLogin
            appId="579050306338151"
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </div>
        <div>
          <GoogleLogin
            clientId=""
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
        <div>
          {/* <TwitterLogin
          authCallback={responseTwitter}
          consumerKey={CONSUMER_KEY}
          consumerSecret={CONSUMER_SECRET}
          callbackUrl={CALLBACK_URL}
        /> */}
        </div>
      </div>
    )
  }
}

export default Apilogin
