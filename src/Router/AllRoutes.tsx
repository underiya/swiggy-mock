
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import Feed from '../pages/Feed'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="*" element={<PageNotFound/>}/>

        </Routes>
    </div>
  )
}

export default AllRoutes