import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Books from "./components/books.jsx";
import background from '../public/background.webp'
function App() {
    const body = document.querySelector('body')
    body.style.backgroundImage = `url(${background})`
  const books= [
              {
                  name:"book 1",
                  description:'description',
                  img:'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY='
              },
              {
                  name:"book 2",
                  description:'description',
                  img:'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY='
              },
              {
                  name:"book 3",
                  description:'description',
                  img:'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY='
              },
              {
                  name:"book 4",
                  description:'description',
                  img:'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY='
              },
              {
                  name: "book 5",
                  description: 'description',
                  img: 'https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY='
              }
      ]



  return (
    <>
        <Header/>
        <Books books={books}/>
        <Footer/>
    </>
  )
}

export default App
