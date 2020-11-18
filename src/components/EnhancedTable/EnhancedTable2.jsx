import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import styles from './EnhancedTable2.module.css'


function createData(name, category, ticker, ipodate, ipoprice, curprice, roi) {
    return { name, category, ticker, ipodate, ipoprice, curprice, roi };
}

// Data For the Chart
const rows = [
    createData(`'86 Mac Plus (Signed)`, '📋 ', '#JOBSMAC', new Date("11-01-2020").toLocaleDateString(), 10.00, 10.00, 0),
    createData(`'99 Pokemone 1st Ed. Complete Set`, '📋 ', '#POKEMON1', new Date("06-01-2020").toLocaleDateString(), 25.00, 95.00, 280),
    createData(`'77 Lotus ESPRIT S1`, '🏎 ', '#77LE1', new Date("06-01-2020").toLocaleDateString(), 38.85, 65.95, 69.76),
    createData(`'90 Ford Mustang 7UP Ed.`, '🏎 ', '#90FM1', new Date("07-01-2018").toLocaleDateString(), 8.25, 22.60, 173.94),
    createData(`'18 Rolex GMT Master II Pepsi Jubilee`, '⌚️', '#RLEXPEPSI', new Date("11-01-2019").toLocaleDateString(), 8.90, 13.50, 51.69),
    createData(`Hermès 30cm Himalaya Birkin`, '👜', '#HIMALAYA', new Date("05-01-2020").toLocaleDateString(), 70.90, 75.00, 7.14),
    createData(`Harry Potter and The Philosopher's Stone`, '📘', '#POTTER', new Date("11-01-2019").toLocaleDateString(), 24.00, 45.00, 87.50),
    createData(`'16 Chateau Petrus`, '🍷', '#16PETRUS', new Date("09-01-2020").toLocaleDateString(), 5.00, 5.00, 0),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// Column 
const headCells = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Offering' },
    { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
    { id: 'ticker', numeric: false, disablePadding: false, label: 'Ticker' },
    { id: 'ipo-date', numeric: true, disablePadding: false, label: 'IPO Date' },
    { id: 'ipo-price', numeric: true, disablePadding: false, label: 'IPO Price' },
    { id: 'current-price', numeric: true, disablePadding: false, label: 'Current Price' },
    { id: 'roi', numeric: true, disablePadding: false, label: 'ROI%' },
];

function EnhancedTableHead(props) {
    const { classes, order, orderBy, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell>
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    title: {
        flex: '1 1 100%',
    },
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            <Typography className={classes.title} variant="h5" id="tableTitle" component="div">
                Portfolio
            </Typography>
        </Toolbar>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function EnhancedTable2() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className = { styles.container }>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size='medium'
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover={true}
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.name}
                                        >
                                            <TableCell padding="checkbox">
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left" >{row.category}</TableCell>
                                            <TableCell align="left" >{row.ticker}</TableCell>
                                            <TableCell align="right" >{row.ipodate}</TableCell>
                                            <TableCell align="right" >${row.ipoprice}</TableCell>
                                            <TableCell align="right" >${row.curprice}</TableCell>
                                            <TableCell align="right" >{row.roi}%</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}