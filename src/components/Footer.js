import React from 'react'
import { footer, captcha } from './Footer.module.css'

const Footer = () => (
  <div className={footer}>

    <p className={captcha}>
      ©
      {' '}
      {new Date().getFullYear()}
      {' '}
      Mikella Millen | site by
      {' '}
      <a href="https://lesliethe.dev">leslie behum</a>
      {' '}
      |
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/ppacy"> Privacy Policy</a>
      {' '}
      and
      <a href="https://policies.google.com/terms"> Terms of Service</a>
      {' '}
      apply.
    </p>
  </div>
)

export default Footer
