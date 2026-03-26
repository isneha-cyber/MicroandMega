import ScrollToTop from '@/Components/ScrollToTop';
import Footer from '@/M&M/Footer';
import Navbar from '@/M&M/Navbar';

export default function SiteLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop/>
        </>
    );
}
