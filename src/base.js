import Rebase from 're-base'
//optimisation (plus rapide et plus légère)
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtNxwUdXcV9Gz_ztQ5HwryR4zAbJe0rNk",
    authDomain: "chatbox-f2846.firebaseapp.com",
    databaseURL: "https://chatbox-f2846-default-rtdb.europe-west1.firebasedatabase.app",
})

const base =  Rebase.createClass(firebase.database()) //gestion de la base de donnée

export {firebaseApp} //initialisation de l'application

export default base
