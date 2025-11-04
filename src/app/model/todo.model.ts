// import { TodoStatus } from "../constants";

export default interface ITodo {
  id: string | number,
  title: string;
  status: "todo" | "in progress" | "done";
  isEditing?: boolean
}
