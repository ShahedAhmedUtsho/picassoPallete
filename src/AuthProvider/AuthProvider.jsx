import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,GithubAuthProvider, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import Auth from '../Firebase/Firebase.config';



  

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


// delete model  

const [isDeleteOpen, setIsDeleteOpen] = useState(false)
const openDeleteModal = () => {
  setIsDeleteOpen(true)
}
const closeDeleteModal = () => {
  setIsDeleteOpen(false)
}




// handle delete and trush 

const [deleteID,setDeleteID] =useState();
const [reloadd,setReloadd]=useState();

const handleDelete = (id)=>{
  console.log("delete suck",id);

fetch(`http://localhost:3000/allartandcraftitems/${id}`,{
  method:'DELETE'

}).then(res=>res.json())
.then((data)=>
   { 
    console.log(data) 
    setModelHead('delete successful')
    setModelMessage("")
    openSuccessModal()
    setTimeout(() => {
      window.location.reload();
    }, 500);

}
)






}
const handleTrash = (id,reloaded)=>{
  setReloadd(()=> reloaded)
  //  setReloadd(reloaded)
       setDeleteID(id)
        console.log("trash" ,deleteID) ;
          openDeleteModal()

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
  Auth,
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
    isDeleteOpen, setIsDeleteOpen,openDeleteModal,closeDeleteModal,
    handleDelete,
    handleTrash,
    deleteID,
    // reloadd

  
    // navigate ,
    // location
    

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