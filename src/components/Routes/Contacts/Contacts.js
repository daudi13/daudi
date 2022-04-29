import React from 'react'
import Form from './Form'

const Contacts = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form__container">
        <div className="outro__box">
          <h2 className="headline-section__title white">Contact me</h2>
          <p className="headline-section__desc white">If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it </p>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contacts