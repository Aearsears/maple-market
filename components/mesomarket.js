import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Mesomarket extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount () {
        fetch('https://maple-market-db.herokuapp.com/api/mesomarket', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((response) => {
                return response.json();
            }) // RETURN RESPONSE.JSON()
            .then(
                (data) => {
                    // console.log(typeof data);
                    this.setState({
                        isLoaded: true,
                        items: Object.values(data)
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render () {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>404 Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
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
                                        Meso Market
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>World</TableCell>
                                <TableCell>Server</TableCell>
                                <TableCell align="right">
                                    Exchange Rate
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((row,index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {row.region}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.server}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.rate}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
        }
    }
}

export default Mesomarket;
