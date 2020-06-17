import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ViewModeWarning = ({ alert, setAlert }) => {
  const history = useHistory();

  const handleClose = () => {
    setAlert(false);
  };
  const handleCancel = () => {
    setAlert(false);
    history.goBack();
  };

  return (
    <>
      <Dialog
        open={alert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Activating View Mode'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            On <strong>touchscreen</strong> swipe left and right to change
            pages. Swipe up to exit.
            <br />
            <br />
            On <strong>laptop/desktop</strong> use left and right cursor keys
            and your browser's back button to exit.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewModeWarning;