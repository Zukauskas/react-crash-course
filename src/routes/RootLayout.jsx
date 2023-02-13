import { Outlet } from 'react-router-dom';
import { MainHeader } from '../components/MainHeader';

export function RootLayout() {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
}
