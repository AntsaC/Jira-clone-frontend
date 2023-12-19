import { createContext, useContext, useReducer } from "react";

const SelectedContext = createContext(null);
const SelectedDispatchContext = createContext(null);

function selectionReducer(selected, action) {
  switch (action.type) {
    case "selected": {
      return [...selected, action.item];
    }
    case "unselected": {
      return selected.filter((item) => item != action.item);
    }
    case "init": {
      return [];
    }
    default:
      break;
  }
}

export function useSelected() {
  return useContext(SelectedContext);
}

export function useSelectedDispatch() {
  return useContext(SelectedDispatchContext);
}

export default function SelectionProvider({ children }) {
  const [selected, dispatch] = useReducer(selectionReducer, []);

  return (
    <SelectedContext.Provider value={selected}>
      <SelectedDispatchContext.Provider value={dispatch}>
        {children}
      </SelectedDispatchContext.Provider>
    </SelectedContext.Provider>
  );
}
