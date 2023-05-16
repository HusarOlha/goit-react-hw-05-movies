import { StyledLink, ArrowLink } from './Backlink.styled';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <ArrowLink />
      {children}
    </StyledLink>
  );
};
export default BackLink;
