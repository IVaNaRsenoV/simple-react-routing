import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <NavLink to='/'>Главная страница</NavLink>
            <NavLink to='/users'>Пользователи</NavLink>
            <NavLink to='/shop'>Магазин</NavLink>
            <div>
                <Outlet />
            </div>
        </>
    );
}