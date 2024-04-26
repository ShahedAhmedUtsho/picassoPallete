import  { createContext } from 'react';
import PropTypes from 'prop-types'
import { Password } from 'phosphor-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';



export const AuthContext = createContext();
const AuthProvider = ({children}) => {



const AuthRegister = (email,Password) =>{
    return createUserWithEmailAndPassword(Auth,email,Password)

}

const ShareValue = {AuthRegister}
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