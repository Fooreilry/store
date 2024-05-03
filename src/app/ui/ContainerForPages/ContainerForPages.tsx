'use client';

import Sidebar from '@/src/widgets/SideMenu';
import { useState } from 'react';
import styles from './ContainerForPage.module.css';

const ContainerForPages = ({ childrenPage }: { childrenPage: React.ReactNode }) => {
  const [IsOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className={styles.divMain}>
      <Sidebar IsOpen={IsOpen} setIsOpen={setIsOpen} />
      <div className={IsOpen ? styles.div : styles.divMini}>{childrenPage}</div>
    </div>
  );
};

export default ContainerForPages;
