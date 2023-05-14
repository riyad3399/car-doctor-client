import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='text-center my-4'>
            <button className="btn btn-primary loading">Loading...</button>
        </div>
    }
    
    if (user?.email) {
        return children
    }

    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoutes;