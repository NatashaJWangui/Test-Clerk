'use client';
import { ClerkProvider, RedirectToSignIn, useAuth, useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const Layout = ({ children }) => {
  return (
    // ClerkProvider wrapping the admin routes to handle authentication
    <ClerkProvider>
      <div>{children}</div>;
    </ClerkProvider>
  );
};

export default Layout;
