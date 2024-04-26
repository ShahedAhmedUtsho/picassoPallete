import  { createContext } from 'react';
import PropTypes from 'prop-types'



export const AuthContext = createContext();
const AuthProvider = ({children}) => {


const ShareValue = {}
    return (
        <AuthContext.Provider value={ShareValue}>
            {children}
        </AuthContext.Provider>
    );
};





AuthProvider.propTypes = {
    children : PropTypes.node
}
export default AuthProvider;