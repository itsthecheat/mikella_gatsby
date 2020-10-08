import React from 'react'
import {
  Grid, TextField, Button,
} from '@material-ui/core'

import styles from './ContactForm.module.css'

const ContactForm = () => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <h2 id="contact">Contact</h2>
    <form name="contactMe" method="post" className={styles.contactForm}>
      <TextField
        style={{ margin: 8 }}
        required
        label="Name"
        id="outlined-required"
        defaultValue=""
        variant="outlined"
      />
      <br />
      <TextField
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
        style={{ margin: 8 }}
        id="outlined-multiline-static"
        label="Message"
        multiline
        rows={4}
        defaultValue=""
        variant="outlined"
      />
      <br />
      <Button variant="contained">Submit</Button>
    </form>
  </Grid>
)

export default ContactForm
