import React, { useEffect, useState } from 'react';
import Heropage from './Heropage';
import HeroSkeleton from './HeroSkeleton';

export default function HeroLoaderWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Simulated loading time
    return () => clearTimeout(timer);
  }, []);

  return loading ? <HeroSkeleton /> : <Heropage />;
}