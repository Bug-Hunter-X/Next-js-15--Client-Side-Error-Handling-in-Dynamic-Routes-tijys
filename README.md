# Next.js 15 Client-Side Error Handling Bug

This repository demonstrates a bug in Next.js 15 where client-side errors in dynamic routes (or any route for that matter) are not handled gracefully, resulting in a blank page rather than a proper error display. 

## Bug Description

The `pages/about.js` file intentionally throws an error.  In a production Next.js 15 application, this would result in a blank page, making debugging difficult. This is particularly problematic in dynamic routes.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.

## Expected Behavior

A user-friendly error page should be displayed explaining the issue.

## Actual Behavior

A blank page is displayed.

## Solution

Refer to the `solutionContent` section of the JSON response for improved error handling.