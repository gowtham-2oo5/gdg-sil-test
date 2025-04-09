import { Button } from '@/components/ui/button'
import { TerminalDemo } from './components/TerminalComponent'
import { SparklesTextDemo } from './components/SparkleText'
import { AuroraTextDemo } from './components/AuroraText'
function App() {
  return (
    <div className="h-screen grid place-items-center ">
      {/* <h1 className="text-3xl text-red-500 font-bold">Hello World</h1>
      <Button>Hello Button</Button> */}
      {/* <TerminalDemo /> */}
      {/* <SparklesTextDemo /> */}
      <AuroraTextDemo />
    </div>
  )
}

export default App
