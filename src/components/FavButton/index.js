import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Button } from './styles';

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size={'32px'} cursor={'pointer'} />
      {likes} likes!
    </Button>
  );
};

FavButton.prototypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FavButton;
