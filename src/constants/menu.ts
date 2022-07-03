import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
// import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

interface MenuItem  {
    name: String
    icon: any,
    sectionId: string
}

export const menuItems: MenuItem[] = [
    {name: 'Home', icon: HomeOutlinedIcon, sectionId: 'header'},
    {name: 'About', icon: PersonOutlineOutlinedIcon, sectionId: 'about'},
    {name: 'Skills', icon: BookOutlinedIcon, sectionId: 'skills'},
    {name: 'Projects', icon: CodeOutlinedIcon, sectionId: 'projects'},
    {name: 'Contact', icon: MessageOutlinedIcon, sectionId: 'contact'},

];

