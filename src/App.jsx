import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

function App() {
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const speechConfig = sdk.SpeechConfig.fromSubscription(
    process.env.REACT_APP_SUBS_KEY,
    process.env.REACT_APP_ZONE
  );

  const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
  const recognizer = useMemo(() => new sdk.SpeechRecognizer(speechConfig, audioConfig), [audioConfig, speechConfig]);

  const startSpeaking = useCallback(() => {
    setIsDisabled(true)
    recognizer.startContinuousRecognitionAsync();
  }, [recognizer])

  const stopSpeaking  = useCallback(() => {
    setIsDisabled(false)
    recognizer.stopContinuousRecognitionAsync();
  }, [recognizer])

  useEffect(() => {
    recognizer.recognizing = (s, e) => {
      console.log(`RECOGNIZING: Text=${e.result.text}`);
    };
  
    recognizer.recognized = (s, e) => {
      setText(state => state + e.result.text)
    };
  
    recognizer.canceled = (s, e) => {
      console.log(`CANCELED: Reason=${e.reason}`);
      setIsDisabled(false)
      recognizer.stopContinuousRecognitionAsync();
    };
  
    recognizer.sessionStopped = (s, e) => {
      console.log("\n Session stopped event.");
      recognizer.stopContinuousRecognitionAsync();
    };
  }, [recognizer])
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={startSpeaking} disabled={isDisabled}>Start Speaking</button>
      <button onClick={stopSpeaking} disabled={!isDisabled}>Stop Speaking</button>
      <p>Text: {text}</p>
      <div id="waveform"></div>
    </div>
  );
}

export default App;

 
  // useEffect(() => {
  //   var wavesurfer = window.WaveSurfer.create({
  //     container: '#waveform',
  //     waveColor: 'black',
  //     interact: false,
  //     cursorWidth: 0,
  //     plugins: [window.WaveSurfer.microphone.create()],
  //   });

  //   wavesurfer.microphone.on('deviceReady', function (stream) {
  //     console.log('Device ready!', stream);
  //   });
  //   wavesurfer.microphone.on('deviceError', function (code) {
  //     console.warn('Device error: ' + code);
  //   });

  //   // start the microphone
  //   wavesurfer.microphone.start();
  // }, []);