import {generateUniqueId} from "../../utils/app";
import {Note, NoteClass} from "./notes.model";

export const availableColors = [
    '#FFD99E', '#9EEE21', '#3399FF', '#B69CFF', '#91F48F',
    '#00FFFF', '#779EFF', '#FF9E9E', '#FFFF9E', '#99FF9E',
    '#8EFFFF', '#2F9EFF', '#6F9E9E', '#74FF9E', '#11FF9E',
]


export const notes: Note[] = [
    {
        id: generateUniqueId(),
        title: 'Note 1',
        description: 'Description 1'
    },
    {
        id: generateUniqueId(),
        title: 'Note 2 (with extra text)',
        description: 'Description 2'
    },
    {
        id: generateUniqueId(),
        title: 'Note 3',
        description: 'Description 3'
    },
    // {
    //     id: 4,
    //     title: 'Note 4',
    //     description: 'Description 4'
    // },
    // {
    //     id: 5,
    //     title: 'Note 5',
    //     description: 'Description 5'
    // },
    // {
    //     id: 6,
    //     title: 'Note 6',
    //     description: 'Description 6'
    // },
    // {
    //     id: 7,
    //     title: 'Note 7',
    //     description: 'Description 7'
    // },
    // {
    //     id: 8,
    //     title: 'Note 8',
    //     description: 'Description 8'
    // }
]