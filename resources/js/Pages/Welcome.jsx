import { Head, Link } from '@inertiajs/react';
import Home from './Home';
import ScrollToTop from '@/Components/ScrollToTop';
import About from './About';

export default function Welcome({}) {
  return (
        <>
            <Head title="Welcome" />
           <Home/>
           <About/>
           <ScrollToTop/>
        </>
    );
}
