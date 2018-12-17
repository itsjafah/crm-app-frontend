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
  console.log(currentState);
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {...currentState, products: currentState.products}
    case "TOGGLE_VIEW_PRODUCTS":
        return {...currentState, viewProducts: currentState.viewProducts = true, createOrder: currentState.createOrder = false, openDashboard: currentState.openDashboard = false}
    case "TOGGLE_CREATE_ORDER":
        return {...currentState, createOrder: currentState.createOrder = true, viewProducts: currentState.viewProducts = false, openDashboard: currentState.openDashboard = false}
    case "TOGGLE_OPEN_DASHBOARD":
        return {...currentState, openDashboard: currentState.openDashboard = true, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false}
    case "TOGGLE_VIEW_DOLLS_ACTION_FIGURES":
        return {...currentState, viewDollsActionFigures: currentState.viewDollsActionFigures = true, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, viewToys: currentState.viewToys = false, viewBooks: currentState.viewBooks = false, viewMovies: currentState.viewMovies = false, viewElectronics: currentState.viewElectronics = false, viewBoardGames: currentState.viewBoardGames = false}
    case "TOGGLE_VIEW_MOVIES":
        return {...currentState, viewMovies: currentState.viewMovies = true, viewDollsActionFigures: currentState.viewDollsActionFigures = false, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, viewToys: currentState.viewToys = false, viewBooks: currentState.viewBooks = false, viewElectronics: currentState.viewElectronics = false, viewBoardGames: currentState.viewBoardGames = false}
    case "TOGGLE_VIEW_BOOKS":
        return {...currentState, viewBooks: currentState.viewBooks = true, viewMovies: currentState.viewMovies = false, viewDollsActionFigures: currentState.viewDollsActionFigures = false, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, viewToys: currentState.viewToys = false, viewElectronics: currentState.viewElectronics = false, viewBoardGames: currentState.viewBoardGames = false}
    case "TOGGLE_VIEW_TOYS":
        return {...currentState, viewToys: currentState.viewToys = true, viewBooks: currentState.viewBooks = false, viewMovies: currentState.viewMovies = false, viewDollsActionFigures: currentState.viewDollsActionFigures = false, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, viewElectronics: currentState.viewElectronics = false, viewBoardGames: currentState.viewBoardGames = false}
    case "TOGGLE_VIEW_ELECTRONICS":
        return {...currentState, viewElectronics: currentState.viewElectronics = true, viewBooks: currentState.viewBooks = false, viewMovies: currentState.viewMovies = false, viewDollsActionFigures: currentState.viewDollsActionFigures = false, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, viewToys: currentState.viewToys = false, viewBoardGames: currentState.viewBoardGames = false}
    case "TOGGLE_VIEW_BOARD_GAMES":
        return {...currentState, viewBoardGames: currentState.viewBoardGames = true, viewBooks: currentState.viewBooks = false, viewMovies: currentState.viewMovies = false, viewDollsActionFigures: currentState.viewDollsActionFigures = false, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, viewToys: currentState.viewToys = false, viewElectronics: currentState.viewElectronics = false}
      break;
    default:
      return currentState
  }
}

export default reducer
