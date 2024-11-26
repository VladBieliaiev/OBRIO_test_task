'use client';

import { useRouter } from 'next/navigation';
import { Button, Header, Icon, VectorImage } from './Header.style';

const HeaderComponent = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <Header>
      <Button onClick={handleBackClick}>
        <Icon src="/Chevron.svg" alt="previous page button" />
      </Button>
      <VectorImage src="/logo.svg" alt="Logo" />
    </Header>
  );
};

export default HeaderComponent;
