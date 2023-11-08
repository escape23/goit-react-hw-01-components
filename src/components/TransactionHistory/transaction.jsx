import PropTypes from 'prop-types';
import css from './transaction.module.css';

export const Transaction = ({ transactions }) => {
  return (
    <>
      <h2 className={css.title}>Transaction History</h2>
      <table className={css.transaction_history} id="task-4">
        <thead className={css.table_head}>
          <tr>
            <th className={css.data}>Type</th>
            <th className={css.data}>Amount</th>
            <th className={css.data}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr className={css.table_raw} key={id}>
              <td className={css.type}>{type}</td>
              <td className={css.amount}>{amount}</td>
              <td className={css.currency}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Transaction.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
