import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { fetchProducts } from '../../shop/fetchProductfromDb';
import EditProductModal from './EditProductModal';
import AddProductModal from './AddProductModal';
import Swal from 'sweetalert2';
import { base_api } from '../../base_api';


async function createData() {
      const response = await fetchProducts();
      const jsonProd = await response.json();
      const AllProdFromDb = jsonProd.All_prod_response;


      console.log(AllProdFromDb)
      // I am getting the response, now show the data in the table.
      return AllProdFromDb.map((product) => (
            {
                  id: product._id.toString(),
                  name: product.ProductName,
                  price: product.Price,
                  category: product.Category,
                  description: product.Description,
                  ImagePath: product.ImagePath,
                  Quantity: product.Quantity,
                  DiscountTag: product.DiscountTag,
                  AddedDate: new Date(product.createdAt).toLocaleDateString(),
                  EditedDate: new Date(product.updatedAt).toLocaleDateString(),
                  ExpiryDate: new Date(product.ExpiryDate).toLocaleDateString(),
                  SuitableFor: product.SuitableFor,
                  Allergens: product.Allergens
            })
      )
}

const rows = await createData();
// console.log(rows)



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
            if (order !== 0) {
                  return order;
            }
            return a[1] - b[1];
      });
      return stabilizedThis.map((el) => el[0]);
}

const headCells = [
      {
            id: 'ProductName',
            numeric: false,
            disablePadding: true,
            label: 'ProductName',
      },
      {
            id: 'Category',
            numeric: false,
            disablePadding: false,
            label: 'Category',
      },
      {
            id: 'Price',
            numeric: false,
            disablePadding: false,
            label: 'Price',
      },
      {
            id: 'Description',
            numeric: false,
            disablePadding: false,
            label: 'Description',
      },
      {
            id: 'ImageUrl',
            numeric: false,
            disablePadding: false,
            label: 'ImageUrl',
      },
      {
            id: 'DiscountTag',
            numeric: false,
            disablePadding: false,
            label: 'Discount(%)',
      },
      {
            id: 'Quantity',
            numeric: true,
            disablePadding: false,
            label: 'Quantity',
      },
      {
            id: 'Added_Date',
            numeric: true,
            disablePadding: false,
            label: 'Added Date',
      },
      {
            id: 'Updated_Date',
            numeric: true,
            disablePadding: false,
            label: 'Last updated',
      },
      {
            id: 'Expiry_Date',
            numeric: true,
            disablePadding: false,
            label: 'Expiry Date',
      },
      {
            id: 'SuitableFor',
            numeric: true,
            disablePadding: false,
            label: 'Suitable for',
      },
      {
            id: 'Allergens',
            numeric: true,
            disablePadding: false,
            label: 'Common Allergens',
      },
];

function EnhancedTableHead(props) {
      const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
      const createSortHandler = (property) => (event) => {
            onRequestSort(event, property);
      };

      return (
            <TableHead>
                  <TableRow>
                        <TableCell padding="checkbox">
                              <Checkbox
                                    color="primary"
                                    indeterminate={numSelected > 0 && numSelected < rowCount}
                                    checked={rowCount > 0 && numSelected === rowCount}
                                    onChange={onSelectAllClick}
                                    inputProps={{
                                          'aria-label': 'select all products',
                                    }}
                              />
                        </TableCell>
                        {/* In below code , change it when you have store the dicounttag as a string in the dtabase. */}
                        {
                              headCells.map((headCell) => {
                                    headCell.id === "DiscountTag" ? (
                                          rows[headCell.numeric] = "true"
                                    ) : (
                                          rows[headCell.id] = "false"
                                    )

                              })
                        }

                        {headCells.map((headCell) => (

                              <TableCell
                                    key={headCell.id}
                                    align={headCell.id === 'Action' ? 'right' : (headCell.numeric ? 'right' : 'left')}
                                    padding={headCell.disablePadding ? 'none' : 'normal'}
                                    sortDirection={orderBy === headCell.id ? order : false}
                              >


                                    {/* {console.log("rows after modification: ",rows)} */}
                                    <TableSortLabel
                                          active={orderBy === headCell.id}
                                          direction={orderBy === headCell.id ? order : 'asc'}
                                          onClick={createSortHandler(headCell.id)}
                                    >
                                          {headCell.label}
                                          {orderBy === headCell.id ? (
                                                <Box component="span" sx={visuallyHidden}>
                                                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                                </Box>
                                          ) : null}
                                    </TableSortLabel>
                              </TableCell>
                        ))}
                  </TableRow>
            </TableHead>
      );
}

EnhancedTableHead.propTypes = {
      numSelected: PropTypes.number.isRequired,
      onRequestSort: PropTypes.func.isRequired,
      onSelectAllClick: PropTypes.func.isRequired,
      order: PropTypes.oneOf(['asc', 'desc']).isRequired,
      orderBy: PropTypes.string.isRequired,
      rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
      const { numSelected, selected } = props;
      const [localSelected, setLocalSelected] = useState([]);
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);
      const [onProduxtUpdate, setOnProductUpdate] = useState({});

      const handleEditItem = () => {
            setIsEditModalOpen(!isEditModalOpen)
      }

      const handleUpdatedData = (updatedData) => {
            console.log('handleUpdatedData -> ', updatedData)
            setOnProductUpdate(updatedData);
      }

      const handleAddItemInDb = () => {
            // open the modal for adding the product:



      }

      const handleDeleteItemFromDb = async () => {
            // code for deleting items from the db.
            try {
                  const response = await fetch(`${base_api}/api/deleteProductByAdmin`, {
                        method: "DELETE",
                        headers: {
                              'Content-Type': "application/json"
                        },
                        body: JSON.stringify({ _id: selected })
                  })
                  if (!response.ok) {
                        Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: "Error in deleting",
                        });
                  }

                  else {
                        Swal.fire({
                              position: "center",
                              icon: "success",
                              title: "Deleted successfully",
                              showConfirmButton: false,
                              timer: 1500
                        });
                        createData();
                  }
            } catch (error) {
                  console.log("exception takes place ", error)
                  Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Internal server error",
                  });
            }

            // There is a problem that after successful deletion , that element still selected and I have to handle that error bcoz after deletion it is not in the db , so clicking again on the delete button, i got error.
      }

      React.useEffect(() => {
            setLocalSelected(selected);
      }, [selected])

      return (
            <Toolbar
                  sx={{
                        pl: { sm: 2 },
                        pr: { xs: 1, sm: 1 },
                        ...(numSelected > 0 && {
                              bgcolor: (theme) =>
                                    alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                        }),
                  }}
            >
                  {numSelected > 0 ? (
                        <Typography
                              sx={{ flex: '1 1 100%' }}
                              color="inherit"
                              variant="subtitle1"
                              component="div"
                        >
                              {numSelected} selected
                        </Typography>
                  ) : (
                        <Typography
                              sx={{ flex: '1 1 100%' }}
                              variant="h6"
                              id="tableTitle"
                              component="div"
                        >
                              Products
                        </Typography>
                  )}

                  {numSelected > 0 ? (
                        <>

                              <Tooltip title="Delete Selected Item">
                                    <IconButton onClick={handleDeleteItemFromDb}>
                                          <DeleteIcon />
                                    </IconButton>
                              </Tooltip>

                              {
                                    numSelected === 1 && (
                                          <Tooltip title="Edit">
                                                <EditProductModal onUpdateProduct={handleUpdatedData} numSelected={numSelected} selectedRowId={selected[0]} />
                                          </Tooltip>
                                    )
                              }

                        </>
                  ) : (
                        <>
                              <AddProductModal />
                              <Tooltip title="filter">
                                    <IconButton>
                                          <FilterListIcon />
                                    </IconButton>
                              </Tooltip>

                        </>
                  )}
            </Toolbar>
      );
}

EnhancedTableToolbar.propTypes = {
      numSelected: PropTypes.number.isRequired,
      selected: PropTypes.array.isRequired,

};
// EnhancedTableToolbar.defaultProps = {
//       selected: ["65a0efe743064ab8aca9057d"]
// }

export default function ShowTabularProducts() {
      const [order, setOrder] = React.useState('asc');
      const [orderBy, setOrderBy] = React.useState('Quantity');
      const [selected, setSelected] = React.useState([]);
      const [page, setPage] = React.useState(0);
      const [dense, setDense] = React.useState(false);

      const [rowsPerPage, setRowsPerPage] = React.useState(5);

      const handleRequestSort = (event, property) => {
            const isAsc = orderBy === property && order === 'asc';
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(property);
      };

      const handleSelectAllClick = (event) => {
            if (event.target.checked) {
                  const newSelected = rows.map((n) => n.id);
                  setSelected(newSelected);
                  return;
            }
            setSelected([]);
      };

      // to resolve the problem, we have to make a system that when selected gets changed , then it should change in the above component.

      const handleClick = (event, id) => {
            const selectedIndex = selected.indexOf(id);
            let newSelected = [];

            if (selectedIndex === -1) {
                  newSelected = newSelected.concat(selected, id);
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
            // localStorage.setItem("selectedCheckboxArray" , newSelected);
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

      const isSelected = (id) => selected.indexOf(id) !== -1;

      // Avoid a layout jump when reaching the last page with empty rows.
      const emptyRows =
            page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

      const visibleRows = React.useMemo(
            () =>
                  stableSort(rows, getComparator(order, orderBy)).slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage,
                  ),
            [order, orderBy, page, rowsPerPage],
      );


      return (
            <Box sx={{ width: '100%' }}>
                  <Paper sx={{ width: '100%', mb: 2 }}>
                        <EnhancedTableToolbar numSelected={selected.length} selected={selected} />
                        <TableContainer>
                              <Table
                                    sx={{ minWidth: 750 }}
                                    aria-labelledby="tableTitle"
                                    size={dense ? 'small' : 'medium'}
                              >
                                    <EnhancedTableHead
                                          numSelected={selected.length}
                                          order={order}
                                          orderBy={orderBy}
                                          onSelectAllClick={handleSelectAllClick}
                                          onRequestSort={handleRequestSort}
                                          rowCount={rows.length}
                                    />
                                    <TableBody>
                                          {console.log("visible rows", visibleRows)}
                                          {visibleRows.map((row, index) => {
                                                const isItemSelected = isSelected(row.id);
                                                const labelId = `enhanced-table-checkbox-${index}`;
                                                return (
                                                      <TableRow
                                                            hover
                                                            onClick={(event) => handleClick(event, row.id)}
                                                            role="checkbox"
                                                            aria-checked={isItemSelected}
                                                            tabIndex={-1}
                                                            key={row.id}
                                                            selected={isItemSelected}
                                                            sx={{ cursor: 'pointer' }}
                                                      >
                                                            <TableCell padding="checkbox">
                                                                  <Checkbox
                                                                        color="primary"
                                                                        checked={isItemSelected}
                                                                        inputProps={{
                                                                              'aria-labelledby': labelId,
                                                                        }}
                                                                  />
                                                            </TableCell>
                                                            <TableCell
                                                                  component="th"
                                                                  id={labelId}
                                                                  scope="row"
                                                                  padding="none"
                                                            >
                                                                  {row.name}
                                                            </TableCell>
                                                            <TableCell align="right">{row.category}</TableCell>
                                                            <TableCell align="right">{row.price}</TableCell>
                                                            <TableCell align="left">{row.description}</TableCell>
                                                            <TableCell align="right">{row.ImagePath}</TableCell>
                                                            <TableCell align="right">{row.DiscountTag}</TableCell>
                                                            <TableCell align="right">{row.Quantity}</TableCell>
                                                            <TableCell align="right">{row.AddedDate}</TableCell>
                                                            <TableCell align="right">{row.EditedDate}</TableCell>
                                                            <TableCell align="right">{row.ExpiryDate}</TableCell>
                                                            <TableCell align="right">{row.SuitableFor}</TableCell>
                                                            {
                                                                  row.Allergens.map((ele) => {
                                                                        return <TableCell align="center">{ele}</TableCell>
                                                                  })
                                                            }
                                                      </TableRow>
                                                );
                                          })}
                                          {emptyRows > 0 && (
                                                <TableRow
                                                      style={{
                                                            height: (dense ? 33 : 53) * emptyRows,
                                                      }}
                                                >
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
                              onPageChange={handleChangePage}
                              onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                  </Paper>

            </Box>
      );
}
