import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'NiyogGen | Career, Campus & Hiring Ecosystem',
  description:
    'NiyogGen connects talent, campuses, events, and employers through a unified career ecosystem.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}