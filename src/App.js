
import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import Button from '@nextui-org/react/button';
function App() {
  return (
 <NextUIProvider>
       <Button>Default</Button>;
    </NextUIProvider>
  );
}

export default App;
