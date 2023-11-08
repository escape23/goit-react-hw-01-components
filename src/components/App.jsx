import { Profile } from './Profile/profile';
import userData from '../data/user.json';

import { Statistics } from './Statistics/statistics';
import statsData from '../data/stat.json';

import { FriendList } from './FriendList/friendList';
import friendsData from '../data/friends.json';

import { Transaction } from './TransactionHistory/transaction';
import transactionsData from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <Transaction transactions={transactionsData} />
    </div>
  );
};
