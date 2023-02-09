import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import HistoryPage from '../pages/HistoryPage';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/history' element={<HistoryPage />} />
        </Routes>
    );
};

export default MainRoutes;