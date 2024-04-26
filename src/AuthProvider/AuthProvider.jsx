import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';
import { Password } from 'phosphor-react';



export const AuthContext = createContext();
const AuthProvider = ({children}) => {
// auth USer 
const [user,setUser] = useState(null)

// set loading 

const [loading,setLoading] =useState(true) ;


// set loading 




// model model  

const [modelHead,setModelHead] = useState("");
const [modelMessage,setModelMessage] = useState("");

const [isSuccessOpen, setIsSuccessOpen] = useState(false)
const openSuccessModal = () => {
  setIsSuccessOpen(true)
}
const closeModal = () => {
  setIsSuccessOpen(false)
}


// Success model 
// error model
const [isErrorOpen, setIsErrorOpen] = useState(false)
const openErrorModal = () => {
  setIsErrorOpen(true)
}
const closeErrorModal = () => {
  setIsErrorOpen(false)
}


//error model
// preserve login  Auth
useEffect(() => {
   const unsubscribe = onAuthStateChanged (Auth, currentUser => {
    setUser(currentUser) ;
    setLoading(false)
    console.log(currentUser)
   
   })

  return () => {
    unsubscribe()
    
  }
}, [])


const AuthRegister = (email,Password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(Auth,email,Password)

}
const AuthLogIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(Auth,email,password)
}

const logOut = async() => {
    setLoading(true)
    return await signOut(Auth).then(() => {
        console.log('Sign-out successful.')
      }).catch((error) => {
       console.log(error.message)
      });
}



const ShareValue = {AuthRegister,
    logOut,
    user,
    AuthLogIn,
    closeModal,
    isSuccessOpen,
    setIsSuccessOpen,
    setModelMessage,
    setModelHead,
    modelHead,
    modelMessage,
    openSuccessModal,
    loading,setLoading,
    closeErrorModal,openErrorModal,isErrorOpen , 

    

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