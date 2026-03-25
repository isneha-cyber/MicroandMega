import Navbar from '@/M&M/Navbar';
import Footer from '@/M&M/Footer';

export default function SiteLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
