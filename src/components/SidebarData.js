import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { IoIosColorPalette, IoMdContrast, IoMdCreate , IoMdPeople} from "react-icons/io";

export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },{
        title: 'Logotipo',
        path: '/logotipo',
        icon: <IoMdContrast/>,
        cName: 'nav-text'
    },{
        title: 'Tipografia',
        path: '/tipografia',
        icon: <IoMdCreate/>,
        cName: 'nav-text'
    },{
        title: 'Color',
        path: '/color',
        icon: <IoIosColorPalette/>,
        cName: 'nav-text'
    },{
        title: 'Familia',
        path: '/familia',
        icon: <IoMdPeople/>,
        cName: 'nav-text'
    },
];