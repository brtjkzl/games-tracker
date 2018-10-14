import React from "react";
import PropTypes from "prop-types";
import { SPACING_SMALL, COLOR_ACCENT } from "ui/quarks";
import { Flex, Box } from "ui/atoms/FlexBox";
import Icon from "ui/atoms/Icon";
import $RatingToggleUnrate from "./$RatingToggleUnrate";
import $RatingToggle from "./$RatingToggle";

const RatingToggle = ({ onClick, rating }) => {
  return (
    <$RatingToggle onClick={onClick}>
      {rating !== null ? (
        <Flex alignItems="center">
          <Box>
            {rating !== 0 ? (
              rating
            ) : (
              <$RatingToggleUnrate>Unrate?</$RatingToggleUnrate>
            )}
          </Box>

          <Box>
            <Icon type="star" color={COLOR_ACCENT} before={SPACING_SMALL} />
          </Box>
        </Flex>
      ) : (
        "Rate"
      )}
    </$RatingToggle>
  );
};

RatingToggle.propTypes = {
  rating: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default RatingToggle;