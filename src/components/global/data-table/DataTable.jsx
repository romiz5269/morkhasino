import { Box } from '@mui/system'
import { DataGrid, GridToolbar,GridFilterModel,GridLinkOperator } from '@mui/x-data-grid'
import React from 'react'

const DataTable = ({rows,columns,page,currentPage,setCurrentPage,ref}) => {

  return (
    <Box 
        
          sx={{
            height: 320,
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
                components={{
                  NoRowsOverlay:()=><div className='flex flex-col justify-center items-center h-full text-xl' style={{fontFamily:'yekanbakh'}}>موردی برای نمایش وجود ندارد</div>,
                  NoResultsOverlay:()=><div className='flex flex-col justify-center items-center h-full text-xl' style={{fontFamily:'yekanbakh'}}>موردی برای نمایش وجود ندارد</div>,
                  Toolbar:GridToolbar,
                  
                  
                }}  
                columns={columns}
                hideFooterPagination
                hideFooter
                
                hideFooterSelectedRowCount
                pageSize={page}
                // disableColumnMenu
                // disableColumnFilter
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
