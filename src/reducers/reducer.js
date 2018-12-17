let defaultState = {
  viewProducts: false,
  createOrder: false,
  openDashboard: false,
  customers: [],
  products: [],
  viewDollsActionFigures: false,
  viewMovies: false,
  viewBooks: false,
  viewToys: false,
  viewElectronics: false,
  viewBoardGames: false
}

const reducer = (currentState = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_VIEW_PRODUCTS":
        return {...currentState, viewProducts: !currentState.viewProducts, createOrder: currentState.createOrder = false, openDashboard: currentState.openDashboard = false}
    case "TOGGLE_CREATE_ORDER":
        return {...currentState, createOrder: !currentState.createOrder, viewProducts: currentState.viewProducts = false, openDashboard: currentState.openDashboard = false}
    case "TOGGLE_OPEN_DASHBOARD":
        return {...currentState, openDashboard: !currentState.openDashboard, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false}
    case "TOGGLE_VIEW_DOLLS_ACTION_FIGURES":
        return {...currentState, viewDollsActionFigures: !currentState.viewDollsActionFigures}
    case "TOGGLE_VIEW_MOVIES":
        return {...currentState, viewMovies: !currentState.viewMovies}
    case "TOGGLE_VIEW_BOOKS":
        return {...currentState, viewBooks: !currentState.viewBooks}
    case "TOGGLE_VIEW_TOYS":
        return {...currentState, viewToys: !currentState.viewToys}
    case "TOGGLE_VIEW_ELECTRONICS":
        return {...currentState, viewElectronics: !currentState.viewElectronics}
    case "TOGGLE_VIEW_BOARD_GAMES":
        return {...currentState, viewBoardGames: !currentState.viewBoardGames}
      break;
    default:
      return currentState
  }
}

export default reducer
