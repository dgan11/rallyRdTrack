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
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';

import styles from './EnhancedTable.module.css'

function createData(name, category, ticker, ipodate, ipoprice, curprice, roi) {
    return { name, category, ticker, ipodate, ipoprice, curprice, roi };
}

const rows = [
    // CARS
    createData(`'99 LOTUS ESPRIT SPORT 350`, '🏎 ', '#99LE1', new Date("11-01-2018"), 28.25, 48.5, 39.57),
    createData(`'80 LAMBORGHINI COUNTACH TURBO`, '🏎 ', '#80LC1', new Date("07-01-2018"), 127, 80.00, -37.01),
    createData(`'65 MUSTANG FASTBACK`, '🏎 ', '#65FM1', new Date("05-01-2019"), 41.25, 51, 23.64),
    createData(`'88 BMW M3`, '🏎 ', '#88BM1', new Date("01-01-2019"), 47, 50, 6.38),
    createData(`'83 FERRARI 512 BBI`, '🏎 ', '#83FB1', new Date("07-01-2018"), 70, 57.5, -17.86),
    createData(`'92 LANCIA DELTA MARTINI 5`, '🏎 ', '#92LD1', new Date("12-01-2018"), 55, 60, 9.09),
    createData(`'65 ALFA ROMEO GIULIA SS`, '🏎 ', '#65AG1', new Date("04-01-2019"), 89.25, 103.60, 16.08),
    createData(`'55 PORSCHE 356 SPEEDSTER`, '🏎 ', '#55PS1', new Date("03-01-2018"), 212.50, 250.00, 17.65),
    createData(`'72 MAZDA COSMO SPORT`, '🏎 ', '#72MC1', new Date("12-01-2018"), 62.25, 50, -19.68),
    createData(`'02 ACURA NSX-T`, '🏎 ', '#02AX1', new Date("11-01-2018"), 54, 49, -9.26),
    createData(`'89 FERRARI 328 GTS`, '🏎 ', '#89FG2', new Date("11-01-2019"), 75, 70, -6.67),
    createData(`'88 LAMBORGHINI LM002`, '🏎 ', '#88LL1', new Date("11-01-2019"), 146, 133.45, -8.60),
    createData(`'80 PORSCHE 928`, '🏎 ', '#80PN1', new Date("11-01-2019"), 9.6, 10, 4.17),
    createData(`'11 BMW 1M`, '🏎 ', '#11BM1', new Date("11-01-2019"), 42.00, 43.75, 4.17),
    createData(`'85 FERRARI TESTAROSSA`, '🏎 ', '#85FT1', new Date("02-01-2018"), 82.5, 103, 24.85),
    createData(`'95 BMW M3 LIGHTWEIGHT`, '🏎 ', '#95BL1', new Date("06-01-2018"), 59.25, 60, 1.27),
    createData(`'94 DODGE VIPER RT/10`, '🏎 ', '#94DV1', new Date("12-01-2018"), 28.75, 32.5, 13.04),
    createData(`'69 BOSS 302 MUSTANG`, '🏎 ', '#69BM1', new Date("11-01-2016"), 57.50, 84, 46.09),
    createData(`'89 FERRARI TESTAROSSA`, '🏎 ', '#89FT1', new Date("09-01-2019"), 45, 40, -11.11),
    createData(`'76 PORSCHE TURBO CARRERA`, '🏎 ', '#76PT1', new Date("03-01-2019"), 63.30, 66.65, 5.29),
    createData(`'98 DODGE VIPER GTS-R`, '🏎 ', '#98DV1', new Date("09-01-2018"), 65, 69.50, 6.92),
    createData(`'93 FERRARI 348TS SERIE SPECIALE`, '🏎 ', '#93FS1', new Date("04-01-2019"), 68.75, 75, 9.09),
    createData(`'61 JAGUAR E-TYPE`, '🏎 ', '#61JE1', new Date("04-01-2019"), 82, 95, 15.85),
    createData(`'75 RENAULT ALPINE A110`, '🏎 ', '#75RA1', new Date("03-01-2019"), 28, 29.00, 3.57),
    createData(`'88 LAMBORGHINI JALPA`, '🏎 ', '#88LJ1', new Date("02-01-2018"), 67.5, 87, 28.89),
    createData(`'99 SHELBY SERIES 1`, '🏎 ', '#99SS1', new Date("09-01-2019"), 137.50, 141.50, 2.91),
    createData(`'02 BMW Z8`, '🏎 ', '#02BZ1', new Date("01-01-2019"), 65.00, 50.50, -22.31),
    createData(`'90 MAZDA MIATA`, '🏎 ', '#90MM1', new Date("04-01-2019"), 5.32, 6.65, 25.00),
    createData(`'91 MITSUBISHI 3000GT VR4`, '🏎 ', '#91MV1', new Date("11-01-2018"), 19, 17.75, -6.58),
    createData(`'77 LOTUS ESPRIT S1`, '🏎 ', '#77LE1', new Date("11-01-2016"), 38.85, 65.95, 69.76),
    createData(`'88 PORSCHE 944 TURBO S`, '🏎 ', '#88PT1', new Date("05-01-2019"), 30, 40.25, 34.17),
    createData(`'89 PORSCHE 911 SPEEDSTER`, '🏎 ', '#89PS1', new Date("07-01-2018"), 82.50, 110.6, 34.06),
    createData(`'94 LAMBORGHINI DIABLO SE30 JOTA`, '🏎 ', '#94LD1', new Date("07-01-2019"), 119.50, 65.25, -45.40),
    createData(`'93 JAGUAR XJ220`, '🏎 ', '#93XJ1', new Date("08-01-2018"), 99, 52.15, -47.32),
    createData(`'63 CHEVROLET CORVETTE SPLIT WINDOW`, '🏎 ', '#63CC1', new Date("03-01-2019"), 63, 69.10, 9.68),
    createData(`'92 CHEVROLET CORVETTE ZR1`, '🏎 ', '#92CC1', new Date("09-01-2019"), 26.25, 17.50, -33.33),
    createData(`'94 FERRARI 348 SPIDER`, '🏎 ', '#94FS1', new Date("09-01-2019"), 72.50, 69, -4.83),
    createData(`'06 FORD GT`, '🏎 ', '#06FG1', new Date("12-01-2018"), 64, 70, 9.38),
    createData(`'61 MASERATI 3500 GT`, '🏎 ', '#61MG1', new Date("09-01-2018"), 68, 64, -5.88),
    createData(`'90 FORD MUSTANG 7UP EDITION`, '🏎 ', '#90FM1', new Date("07-01-2018"), 8.25, 22.60, 173.94),

    // MEMORABILLA
    createData(`APOLLO 11 CREW-SIGNED NEW YORK TIMES`, '📋 ', '#APOLLO11', new Date("04-01-2020"), 32, 38.10, 19.06),
    createData(`'56 TOPPS #135 MICKEY MANTLE CARD`, '📋 ', '#56MANTLE', new Date("01-01-2020"), 1, 4.1, 310),
    createData(`'88 MICHAEL JORDAN GAME-WORN SNEAKERS`, '📋 ', '#88JORDAN', new Date("01-01-2020"), 11.00, 49.95, 354.09),
    createData(`'75 ALI FIGHT-WORN BOOTS`, '📋 ', '#75ALI', new Date("12-01-2019"), 46, 52, 10.4),
    createData(`'24 BABE RUTH AL BATTING TITLE BAT`, '📋 ', '#24RUTHBAT', new Date("04-01-2020"), 85, 110, 29.41),
    createData(`BABE RUTH SINGLE SIGNED BASEBALL`, '📋 ', '#RUTHBALL1', new Date("05-01-2020"), 14.5, 16.7, 15.17),
    createData(`'38 GOUDEY JOE DIMAGGIO "HEADS-UP" CARD`, '📋 ', '#DIMAGGIO', new Date("05-01-2020"), 22, 28, 27.27),
    createData(`'55 ROBERTO CLEMENTE ROOKIE CARD`, '📋 ', '#CLEMENTE', new Date("05-01-2020"), 38, 39, 2.63),
    createData(`'33 GOUDEY #144 BABE RUTH CARD`, '📋 ', '#33RUTH', new Date("02-01-2020"), 38.5, 50, 9.77),
    createData(`'52 TOPPS #311 MICKEY MANTLE CARD`, '📋 ', '#52MANTLE', new Date("09-01-2019"), 132, 170, 29.87),
    createData(`1910 TY COBB E98 CARD`, '📋 ', '#10COBB', new Date("11-01-2019"), 39, 65, 66.67),
    createData(`ZION WILLIAMSON GAME-WORN SNEAKERS`, '📋 ', '#18ZION', new Date("03-01-2020"), 30, 57, 90),
    createData(`'71 WILLIE MAYS SF GIANTS JERSEY`, '📋 ', '#71MAYS', new Date("09-01-2019"), 28.50, 41, 43.86),
    createData(`'99 POKEMON 1ST EDITION COMPLETE SET`, '📋 ', '#POKEMON1', new Date("06-01-2020"), 25.00, 80.16, 220.64),
    createData(`'56 GAME-WORN TED WILLIAMS JERSEY`, '📋 ', '#56TEDWILL', new Date("07-01-2020"), 45, 45.05, 0.11),
    createData(`'68 WILLIE MAYS GAME-USED BAT (SIGNED)`, '📋 ', '#68MAYS', new Date("07-01-2020"), 19.5, 24.5, 25.64),
    createData(`HONUS WAGNER "T206" CARD`, '📋 ', '#HONUS', new Date("12-01-2019"), 52, 75, 44.23),
    createData(`'03 UD EXQUISITE COLLECTION MICHAEL JORDAN CARD`, '📋 ', '#03JORDAN', new Date("08-01-2020"), 20.50, 28.75, 40.24),
    createData(`'51 BOWMAN MICKEY MANTLE ROOKIE CARD`, '📋 ', '#51MANTLE', new Date("07-01-2020"), 17, 18.5, 8.82),

    //WATCHES + LUXURY
    createData(`'70 ROLEX 5100 BETA 21 “THE TEXAN”`, '⌚️', '#70RLEX', new Date("11-01-2019"), 20, 25, 25),
    createData(`OMEGA SPEEDMASTER "SILVER SNOOPY"`, '⌚️', '#SNOOPY', new Date("04-01-2020"), 12.75, 17.95, 40.78),
    createData(`HERMÈS 35CM BORDEAUX CROCODILE BIRKIN`, '👜', '#BIRKINBOR', new Date("02-01-2020"), 26.25, 27.05, 3.05),
    createData(`HERMÈS 30CM HIMALAYA BIRKIN`, '👜', '#HIMALAYA', new Date("02-01-2020"), 26.25, 27.05, 3.05),
    createData(`AUDEMARS PIGUET ROYAL OAK A-SERIES "JUMBO"`, '⌚️', '#APROAK', new Date("12-01-2019"), 75, 70.25, -5.07),
    createData(`HERMÈS 30CM TANGERINE OSTRICH BIRKIN`, '👜', '#BIRKINTAN', new Date("06-01-2020"), 28, 28, 0),
    createData(`'85 ROLEX GMT-MASTER "NIPPLE DIAL"`, '⌚️', '#GMTBLACK1', new Date("06-01-2020"), 28, 28, 0),
    createData(`'18 ROLEX GMT MASTER II "PEPSI JUBILEE"`, '⌚️', '#RLEXPEPSI', new Date("11-01-2019"), 8.90, 13.50, 51.69),
    createData(`HERMÈS 25CM BLEU LÉZARD BIRKIN`, '👜', '#BIRKINBLU', new Date("02-01-2020"), 58, 62.10, 7.07),
    createData(`ROLEX SUBMARINER "SMURF"`, '⌚️', '#SMURF', new Date("11-01-2019"), 17.25, 18, 4.35),

    //COMICS + LITERATURE
    createData(`ALBERT EINSTEIN: PHILOSOPHER-SCIENTIST (SIGNED, 1ST ED.)`, '📘', '#EINSTEIN', new Date("12-01-2019"), 7.25, 11.50, 58.62),
    createData(`YOKO ONO: GRAPEFRUIT (SIGNED, 1ST ED.)`, '📘', '#YOKO', new Date("05-01-2020"), 80.00, 81.20, 1.50),
    createData(`'62 MARVEL INCREDIBLE HULK #1`, '📘', '#HULK1', new Date("05-01-2020"), 44.50, 45.60, 2.47),
    createData(`THEODORE ROOSEVELT: AFRICAN GAME TRAILS (SIGNED, 1ST ED.)`, '📘', '#ROOSEVELT', new Date("11-01-2019"), 19.50, 26.50, 35.90),
    createData(`'63 MARVEL AMAZING SPIDER-MAN #1`, '📘', '#SPIDER1', new Date("11-01-2019"), 22.00, 28.30, 28.64),
    createData(`'40 DC COMICS BATMAN #3`, '📘', '#BATMAN3', new Date("02-01-2020"), 78.00, 82.25, 5.45),
    createData(`JAMES JOYCE: ULYSSES (MATISSE SIGNED)`, '📘', '#ULYSSES', new Date("03-01-2020"), 51.00, 61.00, 19.61),
    createData(`J.R.R. TOLKIEN: THE LORD OF THE RINGS TRILOGY (1ST ED.)`, '📘', '#LOTR', new Date("06-01-2020"), 29.00, 32.00, 10.34),
    createData(`IAN FLEMING: CASINO ROYALE (1ST ED.)`, '📘', '#BOND1', new Date("06-01-2020"), 39.00, 42.05, 7.82),
    createData(`'43 DC COMICS SUPERMAN #21`, '📘', '#SUPER21', new Date("07-01-2020"), 1, 1.55, 55.00),
    createData(`J.D. SALINGER: THE CATCHER IN THE RYE (1ST ED.)`, '📘', '#CATCHER', new Date("06-01-2020"), 25.00, 35.00, 40),
    createData(`ALLEN GINSBERG: HOWL & OTHER POEMS (SIGNED,1ST ED.)`, '📘', '#AGHOWL', new Date("03-01-2020"), 38, 52, 36.84),
    createData(`CHARLES DICKENS: A TALE OF TWO CITIES (1ST ED.)`, '📘', '#TWOCITIES', new Date("11-01-2019"), 72.5, 102.5, 41.38),
    createData(`1864 SIGNED ABRAHAM LINCOLN PORTRAIT`, '📘', '#LINCOLN', new Date("07-01-2020"), 20, 20.25, 1.25),
    createData(`INAUGURAL ADDRESSES (INSCRIBED BY JACKIE KENNEDY)`, '📘', '#61JFK', new Date("06-01-2020"), 11.50, 11.60, 0.87),
    createData(`ROBERT FROST: A BOY'S WILL (1ST ED.)`, '📘', '#FROST', new Date("11-01-2019"), 67.50, 73.00, 8.15),
    createData(`'84 TEENAGE MUTANT NINJA TURTLES #1`, '📘', '#TMNT1', new Date("07-01-2020"), 78.2, 85, 30.77),
    createData(`'77 MARVEL STAR WARS #1`, '📘', '#STARWARS1', new Date("7-01-2020"), 1, 1.70, 70),
    createData(`HARRY POTTER AND THE PHILOSOPHER'S STONE`, '📘', '#POTTER', new Date("11-01-2019"), 24.00, 45.00, 87.50),
    createData(`SHAKESPEARE: COMEDIES, HISTORIES, & TRAGEDIES`, '📘', '#SHKSPR4', new Date("07-01-2020"), 115, 200, 0),
    createData(`'41 TIMELY COMICS CAPTAIN AMERICA COMICS #3`, '📘', '#CAPTAIN3', new Date("07-01-2020"), 37, 42, 13.51),
    createData(`CHURCHILL: THE SECOND WORLD WAR (SIGNED, 1ST ED.)`, '📘', '#CHURCHILL', new Date("07-01-2020"), 1, 1.80, 80),

    //WINE + WHISKEY
    //createData(`'13 DOMAINE LEROY VOSNE-ROMANEE LES BEAUX MONTS (12)`, '🍷', '#13BEAUX', new Date("11-01-2020"), 5.00, 5.00, 0),
    createData(`'14 DOMAINE DE LA ROMANEE-CONTI ASSORTMENT (12)`, '🍷', '#14DRC', new Date("09-01-2020"), 54.00, 54.00, 0),
    createData(`'16 SCREAMING EAGLE (12)`, '🍷', '#16SCREAG', new Date("09-01-2020"), 39.00, 39.00, 0),
    createData(`'05 CHATEAU LATOUR (12)`, '🍷', '#05LATOUR', new Date("09-01-2020"), 9.80, 9.80, 0),
    createData(`'16 CHATEAU PETRUS`, '🍷', '#16PETRUS', new Date("09-01-2020"), 5.00, 5.00, 0),
];

const testData = [
    createData(`'86 Mac Plus (Signed)`, '📋 ', '#JOBSMAC', new Date("11-01-2020"), 10.00, 10.00, 0),
    createData(`'99 Pokemone 1st Ed. Complete Set`, '📋 ', '#POKEMON1', new Date("06-01-2020"), 25.00, 95.00, 280),
    createData(`'77 Lotus ESPRIT S1`, '🏎 ', '#77LE1', new Date("06-01-2020"), 38.85, 65.95, 69.76),
    createData(`'90 Ford Mustang 7UP Ed.`, '🏎 ', '#90FM1', new Date("07-01-2018"), 8.25, 22.60, 173.94),
    createData(`'18 Rolex GMT Master II Pepsi Jubilee`, '⌚️', '#RLEXPEPSI', new Date("11-01-2019"), 8.90, 13.50, 51.69),
    createData(`Hermès 30cm Himalaya Birkin`, '👜', '#HIMALAYA', new Date("05-01-2020"), 70.90, 75.00, 7.14),
    createData(`Harry Potter and The Philosopher's Stone`, '📘', '#POTTER', new Date("11-01-2019"), 24.00, 45.00, 87.50),
    createData(`'16 Chateau Petrus`, '🍷', '#16PETRUS', new Date("09-01-2020"), 5.00, 5.00, 0),
];

function findAvgReturn(array) {
    let count = 0;
    let sumReturn = 0
    var i;
    for (i = 0; i < array.length; i++) {
        count += 1;
        sumReturn += array[i].roi;
    }
    return (sumReturn / count).toFixed(2)
}
///console.log("AVG RETURN: ", findAvgReturn(rows))

// Shuffle the rows element
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
shuffleArray(rows);


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

//name, category, ticker, ipodate, ipoprice, curprice, roi
const headCells = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Offering' },
    { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
    { id: 'ticker', numeric: false, disablePadding: false, label: 'Ticker' },
    { id: 'ipodate', numeric: true, disablePadding: false, label: 'IPO Date' },
    { id: 'ipoprice', numeric: true, disablePadding: false, label: 'IPO Price' },
    { id: 'curprice', numeric: true, disablePadding: false, label: 'Current Price' },
    { id: 'roi', numeric: true, disablePadding: false, label: 'ROI %' },

];

// const headCells = [
//     { id: 'name',  disablePadding: false, label: 'Name' },
//     { id: 'category',  disablePadding: false, label: 'Category' },
//     { id: 'ticker',  disablePadding: false, label: 'Ticker' },
//     { id: 'ipodate',  disablePadding: false, label: 'IPO Date' },
//     { id: 'ipoprice',  disablePadding: false, label: 'IPO Price' },
//     { id: 'curprice',  disablePadding: false, label: 'Current Price' },
//     { id: 'roi',  disablePadding: false, label: 'ROI %' },

// ];



function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox"></TableCell>
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
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Portfolio
        </Typography>

        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
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

export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={ styles.container}>
            <Paper className={classes.paper}>
                {/* <EnhancedTableToolbar numSelected={0} /> */}
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                        //fixedHeader={false}
                        //style={{ width: "auto", tableLayout: "auto" }}
                        // style={{tableLayout: "auto" }}
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
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
                                    ////name, category, ticker, ipodate, ipoprice, curprice, roi

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.name}
                                        >
                                            <TableCell padding="checkbox"></TableCell>
                                            <TableCell component="th" id={labelId} scope="row" padding="none">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left">{row.category}</TableCell>
                                            <TableCell align="left">{row.ticker}</TableCell>
                                            <TableCell align="right" >{row.ipodate.toLocaleDateString(undefined, { month: "numeric", year: "numeric" })}</TableCell>
                                            <TableCell align="right">${row.ipoprice.toFixed(2)}</TableCell>
                                            <TableCell align="right">${row.curprice.toFixed(2)}</TableCell>
                                            <TableCell align="right">{row.roi.toFixed(2)}%</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
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