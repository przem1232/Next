"use client"
import { signIn, signOut, useSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <SessionProvider session={session}>
      <div>
        {!session && (
          <>
            <h1>Proszę się zalogować</h1>
            <button onClick={() => signIn('google')}>Zaloguj się przez Google</button>
            {/* Dodaj tutaj inne przyciski logowania, jeśli chcesz */}
          </>
        )}
        {session && session.user && (
          <>
            <h1>Zalogowany jako {session.user.email}</h1>
            <button onClick={() => signOut()}>Wyloguj się</button>
          </>
        )}
      </div>
    </SessionProvider>
  );
}
