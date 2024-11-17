import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear local storage
        localStorage.removeItem('LoggedInUser');


                navigate('/');

    }, [navigate]);

    return <div>Logging out...</div>;
};

export default Logout;
