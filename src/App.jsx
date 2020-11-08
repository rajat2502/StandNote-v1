import React from 'react';
// import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'styles/App.css';

import Navbar from 'components/Navbar';
import Home from 'components/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// function App() {
//   // const [text, setText] = useState('');
//   // const [isDisabled, setIsDisabled] = useState(false);

//   // const speechConfig = sdk.SpeechConfig.fromSubscription(
//   //   process.env.REACT_APP_SUBS_KEY,
//   //   process.env.REACT_APP_ZONE
//   // );

//   // const audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
//   // let recognizer = useMemo(
//   //   () => new sdk.SpeechRecognizer(speechConfig, audioConfig),
//   //   [audioConfig, speechConfig]
//   // );

//   // const startSpeaking = useCallback(() => {
//   //   setIsDisabled(true);
//   //   recognizer.startContinuousRecognitionAsync();
//   // }, [recognizer]);

//   // const stopSpeaking = useCallback(() => {
//   //   setIsDisabled(false);
//   //   recognizer.stopContinuousRecognitionAsync();
//   // }, [recognizer]);

//   // useEffect(() => {
//   //   recognizer.recognizing = (s, e) => {
//   //     console.log(`RECOGNIZING: Text=${e.result.text}`);
//   //   };

//   //   recognizer.recognized = (s, e) => {
//   //     setText((state) => state + e.result.text);
//   //   };

//   //   recognizer.canceled = (s, e) => {
//   //     console.log(`CANCELED: Reason=${e.reason}`);
//   //     setIsDisabled(false);
//   //     recognizer.stopContinuousRecognitionAsync();
//   //   };

//   //   recognizer.sessionStopped = (s, e) => {
//   //     console.log('\n Session stopped event.');
//   //     recognizer.stopContinuousRecognitionAsync();
//   //   };
//   // }, [recognizer]);

//   return (
//     <div className='App bg-green-500 text-white'>
//       <h1>Hello</h1>
//       <Button onClick={startSpeaking} disabled={isDisabled}>
//         Start Speaking
//       </Button>
//       <Button onClick={stopSpeaking} disabled={!isDisabled}>
//         Stop Speaking
//       </Button>
//       <p>Text: {text}</p>
//       <div id='waveform'></div>
//     </div>
//   );
// }

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
