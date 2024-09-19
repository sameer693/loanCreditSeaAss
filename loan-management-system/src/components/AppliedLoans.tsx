import React from 'react';
import styles from './AppliedLoans.module.css';

interface LoanActivity {
  avatar: string;
  title: string;
  updatedTime: string;
  customerName: string;
  date: string;
  time: string;
  status: 'PENDING' | 'VERIFIED';
}

const loanActivities: LoanActivity[] = [
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/313e861083531dd47b8910228b4c8f8ff5efadf3a1368ec1abb8df0e6ad9993a?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862",
    title: "Contact Email not Linked",
    updatedTime: "Updated 1 day ago",
    customerName: "Tom Cruise",
    date: "June 09, 2021",
    time: "6:30 PM",
    status: "PENDING"
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/afb70cd0bd5883c59e4d0e44de50f2f55ef6599c15440ef94a1dd33394649da6?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862",
    title: "Adding Images to Featured Posts",
    updatedTime: "Updated 1 day ago",
    customerName: "Matt Damon",
    date: "June 09, 2021",
    time: "8:00 AM",
    status: "PENDING"
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b4f1e5173b8dbc22a42d7508f69f10c93395a20d093188fbdb95fa62aff7ec4?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862",
    title: "When will I be charged this month?",
    updatedTime: "Updated 1 day ago",
    customerName: "Robert Downey",
    date: "June 08, 2021",
    time: "7:30 PM",
    status: "PENDING"
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/d702f769411b215cca721a5cdfbcf27ed627eae437107f149f97a4cb8b0332f4?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862",
    title: "Payment not going through",
    updatedTime: "Updated 2 days ago",
    customerName: "Christian Bale",
    date: "June 08, 2021",
    time: "5:00 PM",
    status: "VERIFIED"
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/8db7cca184d48574938d2fd02f25ce4a39b7c38531531f16beaedf32c126e356?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862",
    title: "Unable to add replies",
    updatedTime: "Updated 2 days ago",
    customerName: "Henry Cavil",
    date: "June 08, 2021",
    time: "4:00 PM",
    status: "VERIFIED"
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/ddb77a154dd67aabe272f0595e6b3bbe5051018ea09c849b4c09168f0fccc0ce?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862",
    title: "Downtime since last week",
    updatedTime: "Updated 3 days ago",
    customerName: "Chris Evans",
    date: "June 08, 2021",
    time: "2:00 PM",
    status: "VERIFIED"
  },
  {
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a7862eec248309c8cddc5356e49146b4871f2c14f205421b50e8ffbd2a2971?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862",
    title: "Referral Bonus",
    updatedTime: "Updated 4 days ago",
    customerName: "Sam Smith",
    date: "June 08, 2021",
    time: "11:30 AM",
    status: "PENDING"
  }
];

const AppliedLoans: React.FC = () => {
  return (
    <section className={styles.appliedLoans}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Applied Loans</h2>
        <div className={styles.actionButtons}>
          <button className={styles.actionButton}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b5ac42173076ac1cf469d4d3f5b1dfa45eea0ceefb222da8210901a919039eb?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="" className={styles.actionIcon} />
            Sort
          </button>
          <button className={styles.actionButton}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f4b2b9c5c8805950e07e0e68b6fdd572c91876dd2562ddfb4453ffecab1091b?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="" className={styles.actionIcon} />
            Filter
          </button>
        </div>
      </header>
      <table className={styles.loanTable}>
        <thead>
          <tr>
            <th>User Recent Activity</th>
            <th>Customer name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loanActivities.map((activity, index) => (
            <tr key={index} className={index === 4 ? styles.highlightedRow : ''}>
              <td>
                <div className={styles.activityInfo}>
                  <img src={activity.avatar} alt="" className={styles.activityAvatar} />
                  <div>
                    <div className={styles.activityTitle}>{activity.title}</div>
                    <div className={styles.activityTime}>{activity.updatedTime}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className={styles.customerName}>{activity.customerName}</div>
                <div className={styles.customerDate}>on {activity.date.split(',')[0]}</div>
              </td>
              <td>
                <div className={styles.activityDate}>{activity.date}</div>
                <div className={styles.activityTime}>{activity.time}</div>
              </td>
              <td>
                <div className={styles.actionColumn}>
                  <span className={`${styles.statusBadge} ${styles[activity.status.toLowerCase()]}`}>
                    {activity.status}
                  </span>
                  <button className={styles.moreButton} aria-label="More options">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c05f60e2664dd4a82f6f0103ee407b6fe38957acdb03ca6d66ea1aa671dd16b7?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className={styles.tableFooter}>
        <div className={styles.rowsPerPage}>
          <span>Rows per page:</span>
          <select aria-label="Select rows per page">
            <option>7</option>
          </select>
        </div>
        <div className={styles.pagination}>
          <span>1-7 of 1240</span>
          <button aria-label="Previous page">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/35805a4ebe659fc052837829a299772c018b3ba0a694fedfeb33274b6a6b5003?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="" />
          </button>
          <button aria-label="Next page">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0094b6ccb246d2f6c0da09e3c6e08c47b05f8376be7c41866deaa3d56702475?placeholderIfAbsent=true&apiKey=de797f63314c48b5a91157eb7a3a3862" alt="" />
          </button>
        </div>
      </footer>
    </section>
  );
};

export default AppliedLoans;