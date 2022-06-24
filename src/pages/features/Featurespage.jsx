import React from 'react'
import style from './features.module.css'

export default function Featurespage() {
  return (
    <>
    <main className={style.home_container}>
      <h1>Features page</h1>
      <p>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
      <p><button>Learn more</button></p>
    </main>
    <footer>
    Cover template for <a href='https://getbootstrap.com/'> Bootstrap</a>, by <a href='https://twitter.com/mdo'>@mdo.</a>
    </footer>
    </>
  )
}
