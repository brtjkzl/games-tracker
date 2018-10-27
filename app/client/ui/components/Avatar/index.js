// @flow
import * as React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { url } from "gravatar";
import "./avatar.css";

const mapStateToProps = ({ Auth }) => ({
  currentUserEmail: Auth.currentUser.email
});

type Props = {
  currentUserEmail: string,
  onClick?: Function
};

const Avatar = ({ currentUserEmail, onClick }: Props) => {
  if (!currentUserEmail) return null;

  return (
    <img
      data-cy="avatar"
      src={url(currentUserEmail, { size: 96 })}
      alt="Avatar"
      className={cx("avatar", { "cursor-pointer": onClick })}
      onClick={onClick}
    />
  );
};

export default connect(mapStateToProps)(Avatar);