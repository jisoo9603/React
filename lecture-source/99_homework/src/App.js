import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import MyMap from './Data/MyMap';
import Main from './Pages/Main';
import Introduce from './Pages/Introduce';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Layout/>}>
        <Route path="/index" element={ <Main/>}></Route>
        <Route path="/Introduce" element={ <Introduce/>}> </Route>
        <Route index element={ <MyMap/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;