import React from 'react';
import { CardWrapper, ButtonClose, InfoWrapper, Info } from './ContactCard.styles';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactCard = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <CardWrapper>
    <InfoWrapper>
      <Info>{name}</Info>
      <Info>{number}</Info>
    </InfoWrapper>
      <ButtonClose onClick={() => dispatch(deleteContact(id))}>Delete</ButtonClose>
    </CardWrapper>
  );
};

export default ContactCard;
