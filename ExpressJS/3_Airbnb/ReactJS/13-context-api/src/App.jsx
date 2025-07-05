
import Welcome from './component/Welcome';
import ToggleTheme from './component/ToggleTheme';
import {ThemeProvider} from './data/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Welcome/>
      <ToggleTheme/>
    </ThemeProvider>
     

      
     
  );
}

export default App;
