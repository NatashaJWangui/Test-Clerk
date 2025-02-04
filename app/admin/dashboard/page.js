"use client";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from '@/components/Spinner'; 

const AdminDashboard = () => {
  const { isSignedIn, user } = useUser(); // Clerk's user hook
  const { signOut } = useClerk(); // Clerk's signOut method
  const router = useRouter();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Handle logout
  const handleLogout = () => {
    signOut(); // Clerk handles logout automatically
    router.push('/admin/login'); // Redirect to login
  };

  // Fetch dashboard data once logged in
  useEffect(() => {
    if (!isSignedIn) {
      router.push('/admin/login'); // Redirect to login if not signed in
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard/`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${user?.getIdToken()}`, // Use Clerk's ID token
          },
        });

        const result = await response.json();

        if (response.ok) {
          setData(result); // Set data if the request is successful
        } else {
          setError(result.message || 'Failed to fetch dashboard data');
        }
      } catch (err) {
        setError('Error fetching data');
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, [isSignedIn, user, router]); // Re-run if sign-in status or user changes

  if (!isSignedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner /> {/* Show the spinner while checking login status */}
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to the Admin Dashboard, {user?.firstName}!</h1>
      {error && <p>Error: {error}</p>}
      {data ? (
        <div>
          {/* Render your dashboard data here */}
          <p>{data.someKey}</p> {/* Example rendering of data */}
        </div>
      ) : (
        <p>Loading dashboard data...</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
