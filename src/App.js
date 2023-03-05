import './App.css';
import Left from './Components/LeftSection/Left'
import Right from './Components/RightSection/Right'
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className={"App"}>
        <Left />
        <Right />
      </div>
    </ChakraProvider>
  );
}

export default App;
