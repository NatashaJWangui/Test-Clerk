// app/admin/login/page.js
'use client'
import { SignIn, useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const { isLoaded, signIn, setSession } = useSignIn();

  // Handle successful sign-in
  const handleSignInSuccess = () => {
    // Redirect to dashboard after successful login
    router.push('/admin/dashboard');
  };

  if (isLoaded) {
    return (
      <div>
        <SignIn 
          path="/admin/login" 
          onSuccess={handleSignInSuccess} // Handle manual redirection
        />
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default Login;
