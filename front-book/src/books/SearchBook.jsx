import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Typography } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import FormTextField from "../forms/FormTextField";
import NavBar from "../navigation/NavBar";
import api from "../utils/api";

const SearchBook = () => {

    const { control, handleSubmit } = useForm();
    const [searchResults, setSearchResults] = useState([]);
    const { t } = useTranslation(['books', 'commons']);
    const navigate = useNavigate();

    const [pageSize, setPageSize] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchValue, setSearchValue] = useState("");



    const search = useCallback(() => {
        api.post(`/books/search?pageSize=${pageSize}&pageNumber=${pageNumber}`, {
            "value": searchValue
        }
        ).then(resp => {
            setSearchResults(resp.data);
        }).catch(err => console.log(err));
    }, [searchValue, pageSize, pageNumber]);

    useEffect(() => {
        console.log('use effect');
        search();
    }, [search]);

    const onSubmit = () => {
        search();
    }

    const onPageNumberChanges = (event, nextPage) => {
        console.log('TODO: set search params + call backend');
        console.log(nextPage);
    }

    const onPageSizeChanges = (event) => {
        console.log(event.target.value)
    }

    return (
        <NavBar>
            <Container maxWidth={false}>
                <Typography variant="h2">{t('books:searchBooks', 'Search Books')}</Typography>
                <Paper sx={{ py: 5 }}>
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <Grid container sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                                <Grid item xs={12} sm={6} sx={{ py: 2 }}>
                                    <FormTextField
                                        label={t('commons:search')}
                                        name="search"
                                        control={control} />

                                </Grid>
                            </Grid>
                            <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                    >{t('commons:search', 'Search')}</Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </form>
                </Paper>

                <TableContainer component={Paper} sx={{ my: 5, border: 1, borderRadius: 5 }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="h4">{t('books:title', 'Title')}</Typography></TableCell>
                                <TableCell><Typography variant="h4">{t('books:author', 'Author')}</Typography></TableCell>
                                <TableCell><Typography variant="h4">{t('books:publictionDate', 'Publication date')}</Typography></TableCell>
                                <TableCell><Typography variant="h4"></Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {searchResults?.map((result) => (
                                <TableRow key={result.id}>
                                    <TableCell><Typography variant="h6">{result.title}</Typography></TableCell>
                                    <TableCell><Typography variant="h6">{result.author}</Typography></TableCell>
                                    <TableCell><Typography variant="h6">{result.publishDate}</Typography></TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                {/* TODO: pagination in backend */}
                                <TablePagination count={0}
                                    onPageChange={onPageNumberChanges}
                                    page={1}
                                    rowsPerPage={25}
                                    onRowsPerPageChange={onPageSizeChanges}
                                    rowsPerPageOptions={[10, 25, 50]}>


                                </TablePagination>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>

                <Button fullWidth variant="contained" onClick={() => navigate('/books/add')}>
                    {t('books:addNew', 'Add new')}
                </Button>

            </Container >
        </NavBar>
    )
}

export default SearchBook;