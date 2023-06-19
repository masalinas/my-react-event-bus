import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";

import useEventBus from "./components/EventBus/useEventBus";
import { EventBusMessages, Message, Criticality } from "./model/EventBus.types"
import { Toast, ToastProps } from './components/Toast/Toast'

import { Dashboard } from "./pages/Dashboard"
import { Home } from "./pages/Home"
import { Layout } from "./pages/Layout"
import { About } from "./pages/About"
import { NoMatch } from "./pages/NoMatch"

import './App.css'

function App() {
  const eventBus = useEventBus<EventBusMessages>();

  const [openToast, setOpenToast] = useState<ToastProps>({ open: false })

  useEffect(() => {
    const loaderListener = eventBus.subscribe('message', handlerEvent);
    return () => {
        loaderListener.unsubscribe();
    };
  }, []);

  const handlerEvent = (message: Message) => {
    if (message.criticality === Criticality.Info) {
      console.log(message);

      setOpenToast({
        severity: 'success',
        message: message.text,
        open: true,
      })
    }
    else if (message.criticality === Criticality.Warning) {
      console.warn(message);

      setOpenToast({
        severity: 'warning',
        message: message.text,
        open: true,
      })
    } 
    else if (message.criticality === Criticality.Error) {
      console.error(message);

      setOpenToast({
        severity: 'error',
        message: message.text,
        open: true,
      })
    }
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      <Toast
          severity={openToast.severity}
          message={openToast.message}
          open={openToast.open}
          handleClose={() => {
            setOpenToast({
              severity: openToast.severity,
              message: openToast.message,
              open: false,
            })
          }}
        ></Toast>      
    </div>
  )
}

export default App
