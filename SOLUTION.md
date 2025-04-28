# AVIV technical test solution

You can use this file to write down your assumptions and list the missing features or technical revamp that should
be achieved with your implementation.

## Notes

I implemented two main pages:

- Listing Page ( / ) : displays all listings, allows creating new listings
- Price History Page: ( /:listingId/prices ): shows price history for a specific listing

## Questions

This section contains additional questions your expected to answer before the debrief interview.

- **What is missing with your implementation to go to production?**

  - Form validation!! user can submit empty strings for name or description, or 0 as a price or square meters
  - Loading states in creating new listing
  - Sanitization of user inputs and prevention of XSS attacks, etc...
  - passing all test, 2 are failing now, didn't have time to solve everything
  - better testing, unit, integration and e2e tests
  - Error handling
  - More user friendly errors
  - Me opening new branch for each feature, I had limited time
  - move API URLs to enviroment variables

- **How would you deploy your implementation?**

  - containarized app using Docker + AWS or Azure
  - Github Actions for automatic build and deployment on commiting to master branch
  - static files on CDN or Vercel / Netlify
  - this would of course be discussed with colleagues and would be done same way their other apps are done

- **If you had to implement the same application from scratch, what would you do differently?**

  - this was done very good and i believe most of it could remain same
  - i would build reusable UI components ( inputs in form, etc )

- **The application aims at storing hundreds of thousands listings and millions of prices, and be accessed by millions
  of users every month. What should be anticipated and done to handle it?**

  - paginate api responses
  - add infinite scrolling or lazy loading for listings
  - CDN for static files and servers

  NB : You can update the [given architecture schema](./schemas/Aviv_Technical_Test_Architecture.drawio) by importing it
  on [diagrams.net](https://app.diagrams..net/)
