import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';
import { AuthContext } from './src/contexts/auth';

import RegisterStack from './src/navigation/registerStack';
import DrawerNav from './src/navigation/drawerNav';


const AppContent = () => {
    const { signed } = React.useContext(AuthContext);

    return ( signed ? <DrawerNav/> : <RegisterStack/> );
};

export default function App() {
    return ( 
        <AuthProvider>
            <NavigationContainer>
                <AppContent/>
            </NavigationContainer>
        </AuthProvider>
    );
}
