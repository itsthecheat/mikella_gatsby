import React, { useState, useEffect } from 'react'
import {
  Grid,
  TextField,
  Button,
  Input,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import * as styles from './Form.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}))

const Form = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: 'https://getform.io/f/40437bee-4e31-4434-85e0-b7fcb6d5224f',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thank you for reaching out.', form)
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  const classes = useStyles()
  // eslint-disable-next-line prefer-destructuring
  const GATSBY_CAPTCHA = process.env.GATSBY_CAPTCHA
  const handleLoaded = () => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(`${GATSBY_CAPTCHA}`, { action: 'homepage' })
        .then((token) => {
          document.getElementById('captchaResponse').value = token
        })
    })
  }
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/api.js?render=${GATSBY_CAPTCHA}`
    script.addEventListener('load', handleLoaded)
    document.body.appendChild(script)
  }, [])

  return (

    <Grid item className={styles.form}>
      <form onSubmit={handleSubmit} action="https://getform.io/f/40437bee-4e31-4434-85e0-b7fcb6d5224f" name="contactMe" method="post" className={classes.root} target="_blank">
        <TextField
          name="name"
          size="small"
          helperText=""
          style={{ margin: 8 }}
          required
          label="Name"
          id="outlined-required"
          defaultValue=""
          variant="outlined"
        />
        <br />
        <TextField
          name="email"
          size="small"
          style={{ margin: 8 }}
          required
          id="outlined-required"
          label="Email"
          type="email"
          defaultValue=""
          variant="outlined"
        />
        <br />
        <TextField
          name="message"
          style={{ margin: 8 }}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        />
        <Input
          type="hidden"
          id="captchaResponse"
          name="g-recaptcha-response"
        />
        <br />
        <Button
          className={styles.button}
          size="small"
          type="submit"
          variant="outlined"
          disabled={serverState.submitting}
        >
          Submit
        </Button>
        {serverState.status && (
          <p className={styles.message}>
            {!serverState.status.ok ? 'Error' : serverState.status.msg}
          </p>
        )}
      </form>
    </Grid>
  )
}

export default Form
