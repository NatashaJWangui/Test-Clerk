**Clerk Authentication Issues in ENIN**

# Overview

We are currently facing issues with the Clerk authentication integration in the Test Clerk project. Despite configuring Clerk to handle authentication for the admin/ routes, the system is not functioning as expected. Users are unable to log in, session handling is failing, and API authentication is not working correctly.

## Current Implementation

**Frontend**:

* Clerk is used for authentication on the admin/login route.

* After login, users should be redirected to admin/dashboard.

* ClerkProvider wraps only the admin/ routes for now. Located at app/admin/layout.js

**Backend:**

* Using @clerk/express for authentication middleware.

* API authentication relies on Clerk session tokens.

# Issues Encountered

* Users Cannot Log In

* Login attempts fail without clear error messages.

* Redirection after login does not work properly.

* Session Handling Failing

* Clerk is not maintaining active sessions.

* Users get logged out unexpectedly or don’t stay authenticated across requests.

* API Authentication Not Working

* Backend fails to verify Clerk session tokens.

* API routes requiring authentication reject valid Clerk-authenticated requests.

* Publishable key not being noticed yet available in the .env file.

* Page keeps redirecting to sign in in an endless loop.

## Debugging Attempts

* Verified Clerk credentials in .env.local and in .env in the backend route

* Checked if ClerkProvider is correctly wrapping the admin/ routes.

* Ensured backend requests include valid Clerk authentication headers.

* Tested with both @clerk/express and @clerk/clerk-sdk-node which has depreciated.

* Reviewed Clerk logs for errors.

**Running the Project**

To start the project, follow these steps:

* Navigate to the frontend directory(test-clerk-app) and run:

>>>>> npm run dev

>>This should open the application at localhost:3000.

* Navigate to the backend directory and run:

>>> cd backend
>>> npm start

>> This should start the backend server at localhost:5000.

**Next Steps**

* Investigate if ClerkProvider is properly initializing in the Next.js frontend.

* Debug Clerk middleware in Express backend to confirm session handling.

* Check if Clerk’s authentication tokens are correctly passed and validated.

* Consult Clerk documentation or reach out to support for further insights.Used the following documentation links for references :
    * https://clerk.com/docs/quickstarts/nextjs >> Full stack :Next.js (App Router)
    * https://clerk.com/docs/references/nextjs/clerk-middleware
    * https://clerk.com/docs/quickstarts/express ?? Backend
    * https://clerk.com/docs/quickstarts/nextjs >> Quick start Next.js

**Notes**

If you have any insights or potential fixes, feel free to contribute or suggest solutions!

