// import { TodoStatus } from "../constants";

export default interface ITodo {
  id: string | number,
  title: string;
  status: "todo" | "inProgress" | "done";
  isEditing?: boolean
}
