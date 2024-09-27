import React from 'react';
import DeficitDisplay from './user_deficit';
import LoanButton from './user_loan_button';
import ActionContainer from './user_action_container';
import SearchContainer from './user_search_container';
import LoanSheet from './user_loan_sheet';
import Header from './user_header';

const user_main: React.FC = () => {
  return (
    <main className="main-content">
        <Header title={'Credit App'}/>
      <DeficitDisplay amount={0.0} />
      <LoanButton />
      <ActionContainer />
      <SearchContainer />
      <LoanSheet />
    </main>
  );
};

export default user_main;