import PropTypes from 'prop-types';
import { Item, Text, Button } from './Item.styled';

export const ContactItem = ({ name, id, number, onDeleteContact }) => {
  return (
    <Item key={id}>
      <Text>
        {name} : {number}
      </Text>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func,
};
