import React from 'react'
import UserBasket from '../pages/User/UserBasket'
import UserFavorites from '../pages/User/UserFavorites'
import AdminDashBoard from '../pages/Admin/AdminDashBoard'
import AdminAddBook from '../pages/Admin/AdminAddBook'
import UserNoPage from '../pages/User/UserNoPage'
import UserHome from '../pages/User/UserHome'
import UserBooks from '../pages/User/UserBooks'
import UserBookDetail from '../pages/User/UserBookDetail'
import AdminBookDetail from '../pages/Admin/AdminBookDetail'
import AdminBooks from '../pages/Admin/AdminBooks'
import AdminEditBook from '../pages/Admin/AdminEditBook'
import UserRoot from '../pages/User/UserRoot'
import AdminRooter from '../pages/Admin/AdminRoot'

const routes = [
{
    path: "/",
    element: <UserRoot/>,
    children: [
        {
            path: "",
            element:<UserHome/>
        },
        {
            path: "/userbooks",
            element: <UserBooks/>,
        },
        {
            path: "/userbooks/:id",
            element: <UserBookDetail/>,
        },
        {
            path: "/userbasket",
            element: <UserBasket/>,
        },
        {
            path: "userfavorites",
            element: <UserFavorites/>,
        },
        {
            path: "*",
            element: <UserNoPage/>,
        }
    ]
},
{
    path: "/admin",
    element: <AdminRooter/>,
    children: [
        {
            path: "",
            element: <AdminDashBoard/>,
        },
        {
            path: "adminaddbook",
            element:<AdminAddBook/>
        },
        {
            path: "adminbooks/:id",
            element: <AdminBookDetail/>,
        },
        {
            path: "adminbooks",
            element: <AdminBooks/>,
        },
        {
            path: "admineditbook",
            element: <AdminEditBook/>,
        }
    ]
}
]
export default routes