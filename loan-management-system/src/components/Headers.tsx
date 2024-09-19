import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <h1 className={styles.appTitle}>CREDIT APP</h1>
        <div className={styles.logoWrapper}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a64679dbdaf31658a2e239e108952657e32a20e4e861e1e13571d2bbabceb4db?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="" className={styles.logoImage} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c34a819d00b5355d431798b558d462b3714dcfe5268dc520f725c54816c7a200?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="" className={styles.logoImage} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f80ed70e813c5c1623beb8e51afa99deb62397edcfc31ed37f7c419607cc9f8?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="" className={styles.logoImage} />
        </div>
      </div>
      <nav className={styles.headerNav}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/701b394a06f9a33fe2562b455d6fce4d39f1accbcc804bba8dbcb588fa4b3a48?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="Notification" className={styles.navIcon} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/10688d80354960bab8b5dff0af1f9d45825b95a156ef52e71e75a10d810738f6?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="Settings" className={styles.navIcon} />
        <div className={styles.verifierWrapper}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8d264ee01533c9677756df8b4a257f6e4d142b9e0542f060e74b7225fae4f14?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="" className={styles.verifierIcon} />
          <span className={styles.verifierText}>Verifier</span>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f2f84f03022276cbf58bad62580c17cab0c79c2385553a68339afdd420b9fa0?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="More options" className={styles.moreOptionsIcon} />
      </nav>
    </header>
  );
};

export default Header;