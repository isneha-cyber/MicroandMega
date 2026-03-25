import { Head, Link } from '@inertiajs/react';
import Home from './Home';
import ScrollToTop from '@/Components/ScrollToTop';

export default function Welcome({}) {
  return (
        <>
            <Head title="Welcome" />
           <Home/>
        
           <ScrollToTop/>
        </>
    );
}
