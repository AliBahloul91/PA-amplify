import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import './src/app.js'
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
Amplify.configure(awsExports);
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import { Hub } from 'aws-amplify';


async function signUp() {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,          // optional
        phone_number,   // optional - E.164 number convention
        // other custom attributes 
      },
      autoSignIn: { // optional - enables auto sign in after user is confirmed
        enabled: true,
      }
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}


Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}
{
    user: CognitoUser;
    userConfirmed: boolean;
    userSub: string;
  }

async function resendConfirmationCode() {
  try {
    await Auth.resendSignUp(username);
    console.log('code resent successfully');
  } catch (err) {
    console.log('error resending code: ', err);
  }
}


async function confirmSignUp() {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}


function listenToAutoSignInEvent() {
  Hub.listen('auth', ({ payload }) => {
    const { event } = payload;
    if (event === 'autoSignIn') {
      const user = payload.data;
      // assign user
    } else if (event === 'autoSignIn_failure') {
      // redirect to sign in page
    }
  })
}




async function confirmSignUp() {
  try {
    await Auth.confirmSignUp(username, code, { forceAliasCreation: false });
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}
Auth.signUp({
    username,
    password,
    attributes: {
      email,
      'custom:favorite_flavor': 'Cookie Dough'  // custom attribute, not standard
    }
  })

  

async function signIn() {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log('error signing in', error);
  }
}


async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}


export default withAuthenticator(App);


