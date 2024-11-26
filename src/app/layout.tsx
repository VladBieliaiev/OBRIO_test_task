import type { Metadata } from 'next';

import ReduxProvider from './components/ReduxProvider';
import HeaderComponent from './components/header/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nebula questionnare',
  description: 'User questionnare app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <HeaderComponent />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
