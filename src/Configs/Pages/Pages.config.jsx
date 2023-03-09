export const RootPages = {

    ROOT:'/',
    LOGIN:'/login',
}

export const UsersPages = {

    PANEL:'/user/dashboard',
    VACATION:'/user/dashboard/vacation',
    TICKETS:'/user/dashboard/tickets',
    ADD_TICKET:'/user/dashboard/tickets/create',
    SINGLE_TICKET:'/user/dashboard/tickets/detail/:id'
    
}

export const AdminPages = {

    DASHBOARD:'/admin/dashboard',
    REQUESTS:'/admin/dashboard/requests',
    SINGLE_REQUEST:'/admin/dashboard/requests/:id',
    ADD_REQUEST:'/admin/dashboard/requests/create/:id',
    TICKETS:'/admin/dashboard/tickets',
    ADD_TICKET:'/admin/dashboard/tickets/create/:id',
    SINGLE_TICKET:'/admin/dashboard/tickets/detail/:id',
    SHOW_USERS:'/admin/dashboard/users',
    ADD_USER:'/admin/dashboard/users/create',
    EDIT_USER:'/admin/dashboard/users/update/:id'

}

export const ManagerPages = {

    DASHBOARD:'/manager/dashboard',
    REQUESTS:'/manager/dashboard/requests',
    SINGLE_REQUEST:'/manager/dashboard/requests/detail/:id',
    ADD_REQUEST:'/manager/dashboard/requests/create/:id',
    TICKETS:'/manager/dashboard/tickets',
    ADD_TICKET:'/manager/dashboard/tickets/create',
    SINGLE_TICKET:'/manager/dashboard/tickets/detail/:id',
    SHOW_USERS:'/manager/dashboard/users',
    ADD_USER:'/manager/dashboard/users/create',
    EDIT_USER:'/manager/dashboard/users/update/:id',
    RULE:'/manager/dashboard/rules'

}