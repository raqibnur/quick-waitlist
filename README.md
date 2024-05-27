# Quick Waitlist

![Quick Waitlist Cover](https://repository-images.githubusercontent.com/749803152/3b10a59a-5183-45bf-8f91-c2ce4f999364)

**Quick Waitlist** is an open-source "coming soon" and waiting list page for SaaS platforms and websites. This project empowers you to collect email addresses from prospective customers with ease. Built using Next.js 14, and integrated with [Resend](https://resend.com/) for email management, Quick Waitlist offers a user-friendly and SEO-optimized solution to ignite the launch of any product or service.

Authored by [@raqibnur](https://github.com/Raqibnur), Quick Waitlist is here to help you kickstart your journey with an efficient and effective waiting list page.

## Features

- **Next.js 14 Powered**: Take advantage of the latest features of Next.js for a fast, SEO-friendly, and scalable waiting list page.
- **Integrated with Resend**: Seamlessly send and manage emails using the robust email service from Resend.
- **User and SEO Friendly**: Keep users and search engines equally happy with a well-designed, clear user interface and optimized content.
- **Customizable Email Templates**: Personalize your communication with flexible email templates powered by [React Email](https://react.email/docs/introduction).
- **Easy One-Click Deployment to Vercel**: Get your waiting list page up and running in no time with Vercel's hassle-free deployment.
- **Environment Variables**: Configure your settings with ease using the provided `.env.example` as a guide.

## Getting Started

To launch Quick Waitlist for your project, please follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Raqibnur/quick-waitlist.git
   ```

2. Navigate to the project directory and install dependencies:

   ```sh
   cd quick-waitlist
   npm install
   ```

3. Configure environment variables:

   - Duplicate `.env.example` to `.env.local`:
     ```sh
     cp .env.example .env.local
     ```
   - Fill in the environment variables in `.env.local` with your Resend API Key and Audience ID:
     ```
     NEXT_PUBLIC_RESEND_API_KEY=<Your Resend API Key>
     NEXT_PUBLIC_AUDIENCE_ID=<Your Audience ID>
     NEXT_PUBLIC_SITE_NAME=
     NEXT_PUBLIC_DOMAIN=
     NEXT_PUBLIC_LOGO=
     NEXT_PUBLIC_FROM_EMAIL=
     NEXT_PUBLIC_LINKEDIN=""
     NEXT_PUBLIC_TWITTER=""
     NEXT_PUBLIC_GITHUB=""
     NEXT_PUBLIC_HERO_TITLE=
     NEXT_PUBLIC_HERO_SUBTITLE=
     NEXT_PUBLIC_PRIVACY=
     ```

4. Start the development server:

   ```sh
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

5. Deploy your Quick Waitlist page to Vercel with just one click:

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRaqibnur%2Fquick-waitlist&project-name=quick-waitlist&repository-name=quick-waitlist&demo-title=Quick%20Waitlist&demo-description=Quick%20Waitlist%20and%20coming%20soon%20page%20for%20your%20SAAS%20and%20website.&demo-url=https%3A%2F%2Fquick-waitlist.vercel.app&demo-image=https%3A%2F%2Fi.ibb.co%2FnsQgkmw%2Fog.png)

## Customizing Email Templates

To customize the email templates sent through Resend using React Email, please refer to their documentation here: [React Email Documentation](https://react.email/docs/introduction)

## Contributing

Your contributions are always welcome! Please feel free to report issues, suggest enhancements, or submit a pull request to improve the Quick Waitlist project.

Start by forking the repo and follow these steps to contribute:

- Create a feature branch (`git checkout -b feature/YourAmazingFeature`)
- Commit your changes (`git commit -m 'Add some YourAmazingFeature'`)
- Push to the branch (`git push origin feature/YourAmazingFeature`)
- Open a pull request

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgements

- Thanks to the contributors and the community for supporting and improving open-source initiatives.

## Contact

For any inquiries, please reach out to Raqib Nur - [@raqibnur](https://twitter.com/mdraqibnur)

Project Link: [https://github.com/Raqibnur/quick-waitlist](https://github.com/Raqibnur/quick-waitlist)
