import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';
import { Password } from 'phosphor-react';



export const AuthContext = createContext();
const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)


useEffect(() => {
   const unsubscribe = onAuthStateChanged (Auth, currentUser => {
    setUser(currentUser) ;
    console.log(currentUser)
   })

  return () => {
    unsubscribe()
    
  }
}, [])


const AuthRegister = (email,Password) =>{
    return createUserWithEmailAndPassword(Auth,email,Password)

}
const AuthLogIn = (email,password) =>{
    return signInWithEmailAndPassword(Auth,email,password)
}

const logOut = async() => {
    return await signOut(Auth).then(() => {
        console.log('Sign-out successful.')
      }).catch((error) => {
       console.log(error.message)
      });
}



const ShareValue = {AuthRegister,
    logOut,
    user,
    AuthLogIn

}



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