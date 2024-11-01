import "./App.css";
import MuiAccordion from "./components/MuiAccordion";
import MuiAlert from "./components/MuiAlert";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiBox from "./components/MuiBox";
import MuiBreadCrumbs from "./components/MuiBreadCrumbs";
import { MuiButton } from "./components/MuiButton";
import MuiButtonGroup from "./components/MuiButtonGroup";
import MuiCard from "./components/MuiCard";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiChips from "./components/MuiChips";
import MuiDialog from "./components/MuiDialog";
import MuiDrawer from "./components/MuiDrawer";
import MuiGrid from "./components/MuiGrid";
import MuiImageList from "./components/MuiImageList";
import MuiLink from "./components/MuiLink";
import MuiList from "./components/MuiList";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiMenu from "./components/MuiMenu";
import MuiNav from "./components/MuiNav";
import MuiPaper from "./components/MuiPaper";
import MuiProgress from "./components/MuiProgress";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiSpeedDialComp from "./components/MuiSpeedDialComp";
import MuiStack from "./components/MuiStack";
import MuiSwitch from "./components/MuiSwitch";
import MuiTable from "./components/MuiTable";
import MuiTextField from "./components/MuiTextField";
import MuiToggleButton from "./components/MuiToggleButton";
import MuiToolTip from "./components/MuiToolTip";
import { MuiTypography } from "./components/MuiTypography";
import MuiPicker from "./components/MuiPicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MuiDateRangePicker from "./components/MuiDateRangePicker";
import MuiTabs from "./components/MuiTabs";
import MuiTimeline from "./components/MuiTimeline";
import MuiMasonary from "./components/MuiMasonary";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        {/* <MuiTypography></MuiTypography> */}
        {/* <MuiButton></MuiButton> */}
        {/* <MuiButtonGroup></MuiButtonGroup> */}
        {/* <MuiToggleButton></MuiToggleButton> */}
        {/* <MuiTextField></MuiTextField> */}
        {/* <MuiSelect></MuiSelect> */}
        {/* <MuiRadioButton></MuiRadioButton> */}
        {/* <MuiCheckbox></MuiCheckbox> */}
        {/* <MuiSwitch></MuiSwitch> */}
        {/* <MuiRating></MuiRating> */}
        {/* <MuiAutoComplete></MuiAutoComplete> */}
        {/* <MuiBox></MuiBox> */}
        {/* <MuiStack></MuiStack> */}
        {/* <MuiGrid></MuiGrid> */}
        {/* <MuiPaper></MuiPaper> */}
        {/* <MuiCard></MuiCard> */}
        {/* <MuiAccordion></MuiAccordion> */}
        {/* <MuiImageList></MuiImageList> */}
        {/* <MuiNav></MuiNav> */}
        {/* <MuiMenu></MuiMenu> */}
        {/* <MuiLink></MuiLink> */}
        {/* <MuiBreadCrumbs></MuiBreadCrumbs> */}
        {/* <MuiDrawer></MuiDrawer> */}
        {/* <MuiSpeedDialComp></MuiSpeedDialComp> */}
        {/* <MuiBottomNavigation></MuiBottomNavigation> */}
        {/* <MuiAvatar></MuiAvatar> */}
        {/* <MuiBadge></MuiBadge> */}
        {/* <MuiList></MuiList> */}
        {/* <MuiChips></MuiChips> */}
        {/* <MuiToolTip></MuiToolTip> */}
        {/* <MuiTable></MuiTable> */}
        {/* <MuiAlert></MuiAlert> */}
        {/* <MuiSnackbar></MuiSnackbar> */}
        {/* <MuiDialog></MuiDialog> */}
        {/* <MuiProgress></MuiProgress> */}
        {/* <MuiSkeleton></MuiSkeleton> */}
        {/* from @mui/lab */}
        {/* <MuiLoadingButton></MuiLoadingButton> */}
        {/* from @mui/x-date-pickers */}
        {/* <MuiPicker></MuiPicker> */}
        {/* <MuiDateRangePicker></MuiDateRangePicker> */}
        {/* <MuiTabs></MuiTabs> */}
        {/* <MuiTimeline></MuiTimeline> */}
        <MuiMasonary></MuiMasonary>
      </div>
    </LocalizationProvider>
  );
}

export default App;
