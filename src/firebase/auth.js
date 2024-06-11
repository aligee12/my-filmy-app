import {auth} from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (auth,email,password,userName) =>{
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email, password);
        const user = userCredential.user;
        // Update user profile with userName
        // await updateProfile(user, { displayName: userName });
        await updateProfile(user, {displayName:userName})
        console.log(user);
        return user;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
        
    
};
export const doSignInWithEmailAndPassword = (auth,email,password) =>{
    try {
        const userCredential = signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};
export const doSignInWithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    // result.user 
    return result;
};
export const doSignOut = () =>{
    return auth.signOut();
}
// export const doPasswordReset = (email) =>{
//     return sendPasswordResetEmail(auth,email);
// };
// export const doPasswordChange = (password) =>{
//     return updatePassword(auth.currentUser,password);
// };
// export const doSendEmailVerification = () =>{
//     return sendEmailVerification(auth.currentUser,{
//        url: $(window.location.origin)/home, 
//     })
// }
