import { atom, Selector } from 'recoil';

export const farmState = atom({
    key: 'farmState', // unique ID (with respect to other atoms/selectors)
    default: 1, // default value (aka initial value)
});

export const todoListState = atom({
    key: "todoListState",
    default: [{ id: 1, text: "Study React JS", isCompleted: true },
    { id: 2, text: "Practice Recoil State Management", isCompleted: false }]
}); 
  