import React from 'react';
import styles from './Sidebar.module.css';

interface MenuItem {
  icon: string;
  label: string;
  isActive?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/82943497689cb64810e7ebeb423a5aadb7a0586713deac02035bcd9a863ca615?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Dashboard", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c8a53c3bb2ee749bc451e29e38957a7acba9e5d91343d66996b013f53d1894d6?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Borrowers" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a3a00a97f14839c3b4806edc313798e8fc774255ae3cd9b4ca6fb894eb94466?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Loans" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d43f855d7436e6d417dd0183fba9df295145e3b43a04651064f6b33694c7793d?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Repayments" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/846338db28f9a0e423baea4634c2a01a0f00bb37c21e1eedd1fd99a57409b6a0?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Loan Parameters" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/40d7ed71311526d95874fd338ca30b1cfed080104018473a7c4de01ef0cbe99f?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Accounting" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/77843f378c19c9c72b3ba2c87f421e53ce4faf8bb8ac5e1c35a9067631beb0f2?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Reports" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d51c241ad6935075025aa59c4f10377dbfac77ec9d16e8eeefd4c8cd9df0cf8c?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Collateral" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bee617e3abccbb642d5dfa8558dfc35ab43dba2aa6b47e2c3ee230234b6ad265?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Access Configuration" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4a5eec49611dbc81b3a342b02ba39fd0bea8c415e8e5b5aa0ff99eef0ad1243?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Savings" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/364e09f7e321668e0bb730da70222b06656005ec46eb4d06a479178862c79f1b?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Expenses" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c273caa8b118a004f7116b117a06162fb11feedcfa3a9294c9b8d773eff11b67?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "E-signature" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fde92e541fa262e3c4d34274224ca1bae611504c5122d722841ac6ee0a018ed?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Investor Accounts" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/879a760d43465a6d685fd90d24311be3310b0da09ad70c786dc1cc6e720d89dd?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Calendar" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/89b3f0618cac85ca8a1431470ad2140c994cf037a926585e818c1341891d93d9?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Settings" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5b4869f4c74e781e8b040a0ec3459e826b56f14dd5b4f730380a8e41f6db443?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", label: "Sign Out" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.userProfile}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0207bc5a017ece3f689cb3c680a8ebf8067a6ab38c248cfdbcdbe83048916f54?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="User avatar" className={styles.userAvatar} />
        <span className={styles.userName}>John Okoh</span>
      </div>
      <nav className={styles.sidebarNav}>
        {menuItems.map((item, index) => (
          <a key={index} href="#" className={`${styles.navItem} ${item.isActive ? styles.active : ''}`}>
            <img src={item.icon} alt="" className={styles.navIcon} />
            <span className={styles.navLabel}>{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;