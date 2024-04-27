import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';
import { Password } from 'phosphor-react';
import { Navigate } from 'react-router-dom';



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
const closeSuccessModal = () => {
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


//github 





const githubProvider = new GithubAuthProvider()
const githubLogin = ()=>{

console.log("okey")

  setLoading(true)
  if(user !== null ){
  setModelHead("Error");
  setModelMessage("you are already logged in" );
  openErrorModal()
return

  }
  console.log("you are not logged in")


  signInWithPopup(Auth,githubProvider)
  .then(res=>{
   const userName = res.user.displayName ;
    setModelMessage(<span>
  Welcome  <span className='font-semibold text-[#103cd9b6] capitalize'>{userName}</span>
</span>)

setModelHead("Login SuccessFull")
openSuccessModal();
  })
  .catch(error => {
  
    const err =   error.message ;
setModelHead("Error");
setModelMessage({err})
openErrorModal()
  })
   
    

}
// google with github





const logOut = async() => {
    setLoading(true)
    return await signOut(Auth).then(() => {
        console.log('Sign-out successful.')

setModelHead("LogOut Successful")
setModelMessage(
  ""
);

openSuccessModal()

      }).catch((error) => {
       console.log(error.message)
      });
}



const ShareValue = {AuthRegister,
    logOut,
    user,
    AuthLogIn,
    closeSuccessModal,
    isSuccessOpen,
    setIsSuccessOpen,
    setModelMessage,
    setModelHead,
    modelHead,
    modelMessage,
    openSuccessModal,
    loading,setLoading,
    closeErrorModal,openErrorModal,isErrorOpen , 
    githubLogin

    

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