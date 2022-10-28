import App from '../App'
import Edit from '../pages/Edit'
import List from '../pages/List'
import Login from '../pages/Login'
import Means from '../pages/Means'
import Register from '../pages/Register'
import {BrowserRouter as Router,useRoutes,Navigate,Route,Routes} from 'react-router-dom'

// 标签形式
// const BaseRouter=()=>(
//   <Router>
//     <Routes>
//       <Route path='/' element={<App/>}>
//         <Route path='list' element={<List/>}></Route>
//         <Route path='edit' element={<Edit/>}></Route>
//         <Route path='means' element={<Means/>}></Route>
//       </Route>
//       <Route path='/login' element={<Login/>}></Route>
//       <Route path='/register' element={<Register/>}></Route>
//     </Routes>
//   </Router>
// )

// useRoutes形式
export default function BaseRouter() {
  let element=useRoutes([
    {
      path:'/',
      element:<App/>,
      children:[
        {
          index:true,
          element:<Navigate to='/list'/>
        },
        {
          path:'means',
          element:<Means/>
        },
        {
          path:'list',
          element:<List/>
        },
        {
          path:'edit',
          element:<Edit/>
        },
      ]
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'register',
      element:<Register/>
    }
  ])
  return element
}
