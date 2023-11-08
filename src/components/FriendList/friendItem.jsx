import PropTypes from 'prop-types';
import css from './friendList.module.css';

export const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <li className={css.item}>
        <span
          className={`${css.check} ${isOnline ? css.online : css.ofline}`}
        ></span>
        <img src={avatar} alt="User avatar" className={css.avatar} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    </>
  );
};

FriendItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
