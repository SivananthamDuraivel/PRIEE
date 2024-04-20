import { useState } from 'react'
import axios from 'axios';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nutrition from './pages/nutritionFolder/Nutrition';
import DietPlanner from './pages/dietplanner/DietPlanner';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing';
import CalorieTracker from './pages/calorie/CalorieTracker';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import Home from './pages/home/Home';
import ResetPassword from './pages/resetPassword/ResetPassword';
import NewPassword from './pages/resetPassword/NewPassword';


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/landing' element={<Landing/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/resetPassword' element={<ResetPassword/>}></Route>
        <Route path='/newPassword/:token' element={<NewPassword/>}></Route>
        <Route path='/nutrition' element={<Nutrition/>}> </Route>
        <Route path='/dietplanner' element={<DietPlanner/>}> </Route>
        <Route path='/model' element={<CalorieTracker/>}></Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
