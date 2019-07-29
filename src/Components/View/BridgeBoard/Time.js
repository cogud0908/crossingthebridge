import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  margin-bottom: 3rem;
  font-size: 30px;
`;

const Time = ({ time }) => {
  return (
    <Root>
      <span>Time : {time}s</span>
    </Root>
  );
};

Time.propTypes = {
  time: PropTypes.number
};

export default React.memo(Time);
