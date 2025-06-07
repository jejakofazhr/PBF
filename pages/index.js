import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../public/profile.png';

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>, 
  ssr: false,                         
});

export default function Home() {
  return (
    <>
    <h1>Profil</h1>
    <Image src={profilePic} alt="Profil" width={300} height={300} priority />
      <h1>Beranda</h1>
      <Link href="/posts">Lihat Post</Link>
      <HeavyComponent />
    </>
  );
}
