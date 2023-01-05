import { createContext, useState } from 'react';
import { router } from './router/Routes';
import {RouterProvider} from 'react-router-dom'

const DarkContext=createContext()

function App() {
  const [darkMode, setDarkMode]=useState(false)
  const darkInfo={darkMode, setDarkMode}

  return (
    <DarkContext.Provider value={darkInfo}>
        <div className={darkMode ? 'dark' :''}>
            <RouterProvider router={router}></RouterProvider>
        </div>
    </DarkContext.Provider>
  );
}

export default App;
