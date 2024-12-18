```javascript
// pages/about.js

export default function About() {
  try {
    // Code that might throw an error
    throw new Error('Something went wrong!');
  } catch (error) {
    // Handle the error gracefully
    return (
      <div>
        <h1>An error occurred</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}
```

Alternatively, using Next.js's built-in error handling with the `ErrorBoundary` component:

```javascript
// pages/about.js
import { ErrorBoundary } from 'next/error-boundary';

function MyErrorBoundary({ error }) {
  return (
    <div>
      <h1>Error: {error.message}</h1>
    </div>
  );
}

export default function About() {
  throw new Error('Something went wrong!');
}

function MyComponent() {
  return (
    <ErrorBoundary
      FallbackComponent={MyErrorBoundary}
    >
       <About />
    </ErrorBoundary>
  );
}
export default MyComponent;
```