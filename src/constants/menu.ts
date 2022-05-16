import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
// import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

interface MenuItem  {
    name: String
    icon: any
}

export const menuItems: MenuItem[] = [
    {name: 'Home', icon: HomeOutlinedIcon},
    {name: 'About', icon: PersonOutlineOutlinedIcon},
    {name: 'Skills', icon: BookOutlinedIcon},
    {name: 'Projects', icon: CodeOutlinedIcon},
    {name: 'Contact', icon: MessageOutlinedIcon},

];

