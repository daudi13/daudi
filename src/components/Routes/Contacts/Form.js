import React from 'react'

const Form = () => {
  return (
  <>
    <form id="form">
      <label for="userName"><input  type="text" required placeholder="Full Name" maxlength="30" id="userName" /></label>
      <label for="userEmail"><input name="Email" id="userEmail" type="email" required maxlength="30" placeholder="Your email" /></label>
      <textarea cols="30" rows="10" maxlength="500" id="message" placeholder="Write your message here" required></textarea>
      <div class="btn__submit">
        <p class="callAction"></p>
        <button type="submit">Get in touch</button>
      </div>
      </form>
  </>
  )
}

export default Form