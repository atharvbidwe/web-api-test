import React from 'react';
import styled from 'styled-components';

const SplashContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
`;

const Logo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  animation: fadeIn 2s ease-in;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

let alexaClient;
let wakeWord = "Alexa";

Alexa.create({ version: '1.1' })
  .then((args) => {
    console.log("ALEXA ARGS : " + JSON.stringify(args))
    const { alexa, message } = args;
    alexaClient = alexa
  })
  .catch(error => {
    console.log("AlexaClient not initialized", error)
  })

const SplashScreen = () => {
  React.useEffect(() => {
    const sendMessageWithTimeout = async () => {
      try {
        // Wait for 2 seconds to show splash screen
        await new Promise(resolve => setTimeout(resolve, 2000));
        await sendMessage('Hello', 5000);
      } catch (error) {
        console.error('Message sending failed:', error);
      }
    };

    sendMessageWithTimeout();
  }, []);

  return (
    <SplashContainer>
      <Logo>
        Edition Explorer
      </Logo>

    </SplashContainer>
  );
};

const messageSentCallBack = (error, response) => {
  if (error) {
    console.error('Message sending failed:', error);
  } else {
    console.log('Message sent successfully:', response);
  }
};

async function sendMessage(msg) {
  if (alexaClient) {
    alexaClient.skill.sendMessage(msg, messageSentCallBack)
  } else {
    console.log("Error while sending Message")
  }
}

export default SplashScreen;
