import { useState } from 'react'
import CongratsScreen from './CongratsScreen.jsx'
import WinnerPhotoScreen from './WinnerPhotoScreen.jsx'

function FinishScreen() {
  const [phase, setPhase] = useState('congrats')

  if (phase === 'congrats') {
    return <CongratsScreen onNext={() => setPhase('photo')} />
  }

  return <WinnerPhotoScreen />
}

export default FinishScreen
