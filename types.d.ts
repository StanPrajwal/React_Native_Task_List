type TaskItemType = {
  itemData: {
    item: string;
    index: number;
  };
  removeTaskFromList: (index: number) => void;
};
type TaskInputType = {
  addTask: (enteredTask:string) => void;
  isVisible:boolean,
  controlModal:()=>void
};
