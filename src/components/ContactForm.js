import React, { useState } from 'react'
import {
  Grid, TextField, Button, FormControl,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import styles from './ContactForm.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}))

const ContactForm = () => {
  const [error, isError] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    name.length < 2 ? isError(true) : isError(false)
  }
  const classes = useStyles()
  return (
    <Grid
      className={styles.formContainer}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <h2 className={styles.header}>Contact</h2>
      <form name="contactMe" method="post" className={classes.root}>
        <TextField
          size="small"
          error={error}
          helperText=""
          style={{ margin: 8 }}
          required
          label="Name"
          id="outlined-required"
          defaultValue=""
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          size="small"
          error={error}
          style={{ margin: 8 }}
          required
          id="outlined-required"
          label="Email"
          type="email"
          defaultValue=""
          value={email}
          variant="outlined"
        />
        <br />
        <TextField
          style={{ margin: 8 }}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        />
        <br />
        <Button onClick={handleSubmit} variant="contained">Submit</Button>
      </form>
    </Grid>
  )
}
export default ContactForm
