import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  margin-top: 3rem;
  font-size: 30px;
`;

const Weight = ({ totalWeight }) => {
  return (
    <Root>
      <span>Weight : {totalWeight}</span>
    </Root>
  );
};

Weight.propTypes = {
  weight: PropTypes.number
};

export default React.memo(Weight);
