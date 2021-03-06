import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = () => {
    this.props.onChangePage(0);
  };

  handleBackButtonClick = () => {
    this.props.onChangePage(this.props.page - 1);
  };

  handleNextButtonClick = () => {
    this.props.onChangePage(this.props.page + 1);
  };

  handleLastPageButtonClick = () => {
    this.props.onChangePage(
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, theme, count, page, rowsPerPage } = this.props;
    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

const actionsStyles = (theme) => ({
  'root': {
    'flexShrink': 0,
    'color': theme.palette.text.secondary,
    'marginLeft': theme.spacing.unit * 2.5
  }
});

TablePaginationActions.propTypes = {
  'classes': PropTypes.object.isRequired,
  'onChangePage': PropTypes.func.isRequired,
  'theme': PropTypes.object.isRequired
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { 'withTheme': true })(
  TablePaginationActions,
);

export default TablePaginationActionsWrapped;
