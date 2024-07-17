import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


export default function App() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home/>} />
            <Route path="branches" element={<About />} />
            <Route path="appointment" element={<Gallery />} />
            <Route path="specialities" element={<Events />} />
            <Route path="socaff" element={<Soc />} />
            <Route path="*" element={<NoPage />} />  
          </Route>
        </Routes>
      </BrowserRouter>
  
      
    );
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


