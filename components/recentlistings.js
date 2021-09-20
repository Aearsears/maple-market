import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Recentlistings extends React.Component {
    render (props) {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>
                                <Typography
                                    variant="h6"
                                    id="tableTitle"
                                    component="div"
                                >
                                    Recent Listings
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key="test">
                            <TableCell component="th" scope="row">
                                TBA
                            </TableCell>
                            <TableCell align="right">TBA</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default Recentlistings;
