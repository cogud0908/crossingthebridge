import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  margin-top: 3rem;
  font-size: 30px;
`;

const Weight = ({ weight }) => {
  return (
    <Root>
      <span>Weight : {weight}</span>
    </Root>
  );
};

Weight.propTypes = {
  weight: PropTypes.number
};

export default React.memo(Weight);
