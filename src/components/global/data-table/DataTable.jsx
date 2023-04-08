import { Box } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid'
import { CustomComponents, FilterAndColumnCustomize } from 'Configs/mui-configs/MuiConfigs'
import React from 'react'
import {BiFilterAlt} from 'react-icons/bi'
import {MdArrowDownward, MdArrowUpward} from 'react-icons/md'
const DataTable = ({rows,columns,page,currentPage,setCurrentPage,ref,loading}) => {

  return (
    <Box 
        
          sx={{
            height: 520,
            width: '100%',
            '& .table-header': {
              backgroundColor: '#212135',
              color: '#fff',
              fontFamily:'yekanbakh',
              textAlign:'center',
              fontWeight: '600',
              borderRight:'none !important'
            },
            '& .table-row-odd': {
                background: 'white',
                fontFamily:'yekanbakh',
                textAlign:'center',
                fontWeight: '600',
                borderRight:'none !important'
            },
            '& .table-row-even': {
                fontFamily:'yekanbakh',
                background: 'rgba(248, 248, 248, 0.818)',
                textAlign:'center',
                fontWeight: '600',
                borderRight:'none !important'
            },
            '& .text-center': {
              textAlign:'center',
              fontWeight:'800'
          },
            
          }}
        >

            <DataGrid
                ref={ref}
                rows={rows}
                
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'table-row-even' : 'table-row-odd'
                }

                components={CustomComponents}  
                loading = {loading}
                localeText={FilterAndColumnCustomize}
                columns={columns}
                hideFooterPagination
                hideFooter
                
                hideFooterSelectedRowCount
                pageSize={page}
                // disableColumnMenu
                // disableColumnFilter
                // paginationMode="server"
                disableSelectionOnClick
                rowsPerPageOptions={[page]}
                page={currentPage-1}
                onPageChange={(p)=>setCurrentPage(p)}
                showCellRightBorder={true}
               
                
                // experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
  )
}

export default DataTable
