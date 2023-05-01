$(() => {
  // grab users information first
  function handleFormSubmit(event) {
    event.preventDefault();

    const firstName = $("input[name='first-name']").val();
    const email = $("input[name='email']").val();

    const responseContent = `
          <section>
            <h2>Thank you for your submission, ${firstName}.</h2>
            <p>I will get back to you on ${email}.</p>
          </section>
          <button id="return-button" class="ui button">Return</button>
        `;

    $("main").empty().html(responseContent);
  }

  // delete the information for users and return to old screen
  function handleReturnButtonClick() {
    const originalContent = `
  <div id="original-content">
          <section>
            <h2>Get in touch</h2>
            <p>
              If you want to get in touch with me, leave your first/last name
              and email and a short message and I will get back to you as soon
              as possible.
            </p>
          </section>

          <form class="ui form">
            <div class="field">
              <label>First Name</label>
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                required
              />
            </div>
            <div class="field">
              <label>Last Name</label>
              <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <div class="field">
              <label for="">Email Address</label>
              <input type="email" name="email" placeholder="Email Address" />
            </div>
            <div class="field">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Leave a short message ..."
              ></textarea>
            </div>
            <button class="ui button" type="submit">Submit</button>
          </form>
        </div>
  `;
    $("main").empty().html(originalContent);
  }

  $("main").on("submit", "form", handleFormSubmit);
  $("main").on("click", "#return-button", handleReturnButtonClick);
});
