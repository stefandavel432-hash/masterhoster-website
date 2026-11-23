// import './globals.css';

export const metadata = {
  title: 'MasterHoster',
  description: 'Wireless Internet & IT Solutions',
};

import WhatsAppButton from '@/components/WhatsAppButton';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}<WhatsAppButton /></body>
    </html>
  );
}
