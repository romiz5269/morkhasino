import Loading from "Components/loading/Loading";
import { BiFilterAlt } from "react-icons/bi";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

const { createTheme } = require("@mui/material");


const theme = createTheme({
    typography: {
      fontFamily: 'yekanbakh',
      
    },
    direction:'rtl'
})

const FilterAndColumnCustomize ={
  columnMenuHideColumn:"مخفی کردن",
  columnMenuUnsort:"حذف مرتب سازی",
  columnMenuSortAsc:"مرتب سازی بر اساس asc",
  columnMenuSortDesc:"مرتب سازی بر اساس desc",
  columnMenuFilter:"فیلتر کردن",
  columnMenuShowColumns :"مدیریت ستون ها",
  filterOperatorAfter:"بعد",
  filterOperatorBefore:"قبل",
  filterOperatorContains:"شامل",
  filterOperatorEquals:"برابر",
  filterOperatorEndsWith:"به پایان رسد با",
  filterOperatorIs:"مساوی",
  filterOperatorIsNotEmpty :"خالی نباشد",
  filterOperatorIsEmpty:"خالی باشد",
  filterOperatorIsAnyOf :"",
  columnsPanelHideAllButton :"مخفی کردن همه",
  columnsPanelShowAllButton :"نمایش همه",
  columnsPanelTextFieldLabel:"جستجو",
  columnsPanelTextFieldPlaceholder:"عنوان ستون"
}

const CustomComponents = {
  NoRowsOverlay:()=><div className='flex flex-col justify-center items-center h-full text-xl' >موردی برای نمایش وجود ندارد</div>,
  NoResultsOverlay:()=><div className='flex flex-col justify-center items-center h-full text-xl' >موردی برای نمایش وجود ندارد</div>,
  ColumnMenuIcon : () => <button>
    <BiFilterAlt size={"23"} />
  </button>,
  ColumnSortedAscendingIcon:() => <MdArrowUpward size={"23"} className="ml-3" />,
  ColumnSortedDescendingIcon : () => <MdArrowDownward size={"23"} className="ml-3" />,
  LoadingOverlay : () => <div className="flex flex-col justify-center items-center h-full">
    <Loading />
  </div>,
  
  
  
}

export {theme,FilterAndColumnCustomize,CustomComponents}