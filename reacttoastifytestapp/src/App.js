import './App.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div className="App">
     <button className="Notifybuttton" onClick={notify}>Notify!</button>
     <ToastContainer
      
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{ backgroundColor: "#332321",color:'greenyellow' }}
/>
    </div>
  );
}

export default App;
