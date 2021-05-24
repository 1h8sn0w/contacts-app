import { Button, ClickAwayListener, Tooltip } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { useCopyToClipboard } from "react-use";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);

export const CopyToClipboard = ({ text }) => {
  const classes = useStyles();
  const [, copyToClipboard] = useCopyToClipboard();
  const [statusCopy, setStatusCopy] = useState("copy");

  const getTooltipTitle = () => {
    switch (statusCopy) {
      case "copy":
        return "Copy";
      case "copied":
        return "Copied";
      default:
        return "";
    }
  };

  const onClickCopy = useCallback(() => {
    setStatusCopy("copied");
    copyToClipboard(text);
  }, [setStatusCopy, copyToClipboard, text]);

  const onClickAway = useCallback(() => {
    setStatusCopy("copy");
  }, [setStatusCopy]);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <Tooltip title={getTooltipTitle()} placement="top" arrow>
        <Button display="flex" className={classes.root} onClick={onClickCopy}>
          <AssignmentOutlinedIcon fontSize="small" className={classes.icon} />
          {text}
        </Button>
      </Tooltip>
    </ClickAwayListener>
  );
};

CopyToClipboard.prototype = {
  text: PropTypes.string.isRequired,
};
