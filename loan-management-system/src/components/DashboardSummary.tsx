import React from 'react';
import styles from './DashboardSummary.module.css';

interface SummaryCardProps {
  icon: string;
  value: string;
  label: string;
  bgColor: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, value, label, bgColor }) => (
  <div className={styles.summaryCard} style={{ backgroundColor: bgColor }}>
    <img src={icon} alt="" className={styles.cardIcon} />
    <div className={styles.cardContent}>
      <span className={styles.cardValue}>{value}</span>
      <span className={styles.cardLabel}>{label}</span>
    </div>
  </div>
);

const DashboardSummary: React.FC = () => {
  const summaryData = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6813ef4e092a25e98b4d9cfed01a45218ca4dac4f93cec7e32bae3639bf4f5a2?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", value: "50", label: "LOANS", bgColor: "#0A512F" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d44b090eb96b82a5c55b839fd63440eeb10f25c64942cd65c394246f5aa717a8?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", value: "100", label: "BORROWERS", bgColor: "#FFFFFF" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b95772c07f0732b471f1bf48754065b6517ecdd931842f8241d9b1d20a36bb5f?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", value: "550,000", label: "CASH DISBURSED", bgColor: "#FFFFFF" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/12b4bd908b5dd638fac18455aa65eef01413af4f8a3700e7d13d5a0cb759729b?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", value: "450,000", label: "SAVINGS", bgColor: "#0A512F" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b2e8d2854fdedf1ff6a3d9013a55fba68663fc00206dac9674ecd8d2fd18cba9?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", value: "30", label: "REPAID LOANS", bgColor: "#FFFFFF" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/caa710bc5e6080c2818ffdfa2b2233d8ff7242ebd6663d229702ad5a58765a81?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862", value: "1,000,000", label: "CASH RECEIVED", bgColor: "#FFFFFF" },
  ];

  return (
    <section className={styles.dashboardSummary}>
      {summaryData.map((item, index) => (
        <SummaryCard key={index} {...item} />
      ))}
    </section>
  );
};

export default DashboardSummary;