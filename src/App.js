
import './Style/App.scss';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AboutUs, BulkPreview, BulkStep, Career,  Choice, ComingSoon, Dashboard, EditBulk, Error, FAQ, Layout, Modify, Pricing, SinglePreview, Team, Templates, Terms } from './pages';
// import Footer from './Component/Footer';

import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/comingsoon' element={<ComingSoon />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/templates' element={<Templates />} />
            <Route path='/career' element={<Career />} />
            <Route path="choice" element={<Choice />}/>
					  <Route path="modify" element={<Modify />} />
            <Route path='/team' element={<Team />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/single_preview' element={<SinglePreview />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/bulk_preview' element={<BulkPreview />} />
            <Route path='/bulk_step' element={<BulkStep />} />
            <Route path='/edit_bulk' element={<EditBulk />} />
            <Route path='/pricing' element={<Pricing />} />
          </Route>            
            <Route path='*' element={<Error />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );

}

export default App;
