import { VISIBILITY_FILTERS } from "../constants";

// visibilityFilter
export type VisibilityFilterTypes =
  typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS]; // "all" | "completed" | "incomplete"

//   visibilityfilterには"all", "completed", "incomplete"
//   いずれかの値がセットされるunion型です。

// todos
export type TodoState = {
  allIds: Array<number>;
  byIds: { [key: string]: TodoItemState };
};
export type TodoItemState = {
  content: string;
  completed: boolean;
};

// state
export type State = {
  visibilityFilter: VisibilityFilterTypes;
  todos: TodoState;
};

// アプリケーションのStateはTodoリストの内容を管理するtodosと、
// Todoをフィルタリングする際に利用するフィルターの状態を管理するvisibilityfilterで
// 構成されています。
// example
// {
//     todos: {
//       allIds: [
//         1,
//         2
//       ],
//       byIds: {
//         '1': {
//           content: 'do something',
//           completed: false
//         },
//         '2': {
//           content: 'go somewhere',
//           completed: false
//         }
//       }
//     },
//     visibilityFilter: 'all'
//   }
