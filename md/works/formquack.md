---
title: "FormQuack"
date: "Feb 25, 2025"
excerpt: "FormQuack is a form submission handling service that enables static websites to collect, process, and manage form submissions effortlessly."
cover_image: "/works/formquack.png"
id: 9
---

FormQuack is a **form submission handling service** that enables static websites to collect, process, and manage form submissions effortlessly. It provides developers with an easy-to-use solution that ensures form data is received and managed securely. With FormQuack, you can:

- **Create multiple forms within a website**, each assigned a unique submission URL.
- **Collect and process form data** without a backend.
- **Send real-time email notifications** to specified recipients when a form is submitted.
- **Send automated acknowledgment emails** to users who submit forms.
- **Monitor form performance** with built-in analytics and submission tracking.

<div class="grid lg:grid-cols-2">
![alt text](/works/formquack.png)
</div>

## How It Works

1. **Sign Up & Add Your Website**

   - Register on FormQuack and add your website to the platform.
   - Each website can have multiple forms, each with its own unique endpoint URL.

2. **Create Forms Within Your Website**

   - Easily create and configure forms from the FormQuack dashboard.
   - Each form receives a unique URL, which is used as the `action` attribute in your static site’s HTML form.

3. **Embed the Form URL in Your Website**

   - Copy the generated form URL and use it in your static site’s `<form>` tag.
   - Example:

     ```html
     <form action="https://formquack.com/form/your-form-id" method="POST">
       <input type="text" name="name" required />
       <input type="email" name="email" required />
       <textarea name="message"></textarea>
       <button type="submit">Send</button>
     </form>
     ```

4. **Receive & Process Submissions**

   - FormQuack captures submitted data and stores it securely.
   - It then processes the submission, forwarding it to the configured recipients.

5. **Automated Email Notifications**

   - Instantly notifies website owners and recipients when a new form submission occurs.
   - Optionally, an acknowledgment email can be sent to the person who submitted the form.

6. **Track Submissions & Analytics**
   - View detailed statistics on form submissions, user interactions, and trends through the FormQuack dashboard.

## Tech Stack

FormQuack is built using modern, scalable technologies to ensure reliability and performance:

- **Backend:** Spring Boot with PostgreSQL for robust data management.
- **Frontend:** Next.js for a fast and responsive user interface.
- **Queue Processing:** RabbitMQ for handling email notifications efficiently.

## What’s Next?

We are continuously improving FormQuack and plan to introduce:

- **Third-Party Integrations**: Connecting with Slack, Zapier, and other automation tools.
- **Advanced Spam Protection**: CAPTCHA and AI-based filtering to prevent spam submissions.

[Check it out](https://formquack.oswinjerome.in)
