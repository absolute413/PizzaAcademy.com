import React, { Fragment } from 'react'

export default () => (
  <Fragment>
    <h4 className="text-center">Contact</h4>

    <div className="text-center">
      <address>
        <a href="tel:6037725515">(603) 772-5515</a> or <a href="tel:6037725518">(603) 772-5518</a>
        <br />
        159 Front Street, Exeter NH, 03833
      </address>

      <hr />
      <h4>We Deliver All Day!</h4>
      <hr />

      {/* <!-- Facebook Like Button --> */}
      <iframe
        className="social-button social-button-facebook"
        src="https://facebook.com/plugins/like.php?href=https://facebook.com/PizzaAcademyExeter&layout=button&action=like&show_faces=false"
      />
      {/* <!-- Twitter Follow Button --> */}
      <iframe
        className="social-button social-button-twitter"
        src="https://platform.twitter.com/widgets/follow_button.html#screen_name=PizzaAcademyExeter&show_count=false&show_screen_name=false"
      />
    </div>
  </Fragment>
)
