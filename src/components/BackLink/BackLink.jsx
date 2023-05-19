import { StyledLink, ArrowLink } from './Backlink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to || '/'}>
      <ArrowLink />
      {children}
    </StyledLink>
  );
};
BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
export default BackLink;
