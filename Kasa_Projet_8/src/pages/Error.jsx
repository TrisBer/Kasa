import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorPage } from '../components/error/ErrorPage'

export const Error = () => {
  //utilisezNavigate pour accéder à la page d'erreur
 const navigateError = useNavigate();

 //useEffect pour rediriger après 10 millisecondes
 useEffect(() => {
  //régler une minuterie
   const redirectionTimer = setTimeout(() => {
    //rediriger vers la page d'erreur
    navigateError("/error");
   }, 10); 

   //nettoyer avec une oblitération si le composant est démonté
   return() => clearTimeout(redirectionTimer);
 }, [navigateError]);

 return (
    <>
    <ErrorPage/>
    </>
 )
}