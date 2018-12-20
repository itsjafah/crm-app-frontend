let defaultState = {
  viewProducts: false,
  createOrder: false,
  openDashboard: false,
  customers: [],
  products: [],
  loading: false,
  error: null,
  viewThisCustomer: null,
  notes: [],
  editNote: false,
  editThisNote: null,
  customerNoteInput: '',
  productSelected: false,
  selectedCategory: null
}

const reducer = (currentState = defaultState, action) =>
 {
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
      return {...currentState, productSelected: true, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, selectedCategory: action.payload}
    case "TOGGLE_VIEW_MOVIES":
      return {...currentState, productSelected: true, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, selectedCategory: action.payload}
    case "TOGGLE_VIEW_BOOKS":
      return {...currentState, productSelected: true, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, selectedCategory: action.payload}
    case "TOGGLE_VIEW_TOYS":
      return {...currentState, productSelected: true, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, selectedCategory: action.payload}
    case "TOGGLE_VIEW_ELECTRONICS":
      return {...currentState, productSelected: true, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, selectedCategory: action.payload}
    case "TOGGLE_VIEW_BOARD_GAMES":
      return {...currentState, productSelected: true, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, selectedCategory: action.payload}
    case "FETCH_PRODUCTS_BEGIN":
      return {...currentState, loading: true,
        error: null}
    case "FETCH_PRODUCTS_SUCCESS":
      return {...currentState, loading: false,
        products: action.payload.products}
    case "FETCH_PRODUCTS_FAILURE":
      return {...currentState, loading: false,
        products: []}
    case "FETCH_CUSTOMERS_BEGIN":
      return {...currentState, loading: true,
        error: null}
    case "FETCH_CUSTOMERS_SUCCESS":
      return {...currentState, loading: false,
        customers: action.payload.customers}
    case "FETCH_CUSTOMERS_FAILURE":
      return {...currentState, loading: false,
        customers: []}
    case "FETCH_NOTES_BEGIN":
      return {...currentState, loading: true,
        error: null}
    case "FETCH_NOTES_SUCCESS":
      return {...currentState, loading: false,
        notes: action.payload.notes}
    case "FETCH_NOTES_FAILURE":
      return {...currentState, loading: false,
        notes: []}
    case "VIEW_THIS_CUSTOMER":
      return {...currentState, viewThisCustomer: action.payload, viewBoardGames: currentState.viewBoardGames = false, viewBooks: currentState.viewBooks = false, viewMovies: currentState.viewMovies = false, viewDollsActionFigures: currentState.viewDollsActionFigures = false, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, viewToys: currentState.viewToys = false, viewElectronics: currentState.viewElectronics = false, editNote: currentState.editNote = false, editThisNote: currentState.editThisNote = null}
    case "EDIT_NOTE":
      return {...currentState, editNote: currentState.editNote = true, editThisNote: action.payload, customerNoteInput: action.payload.body}
    case "HANDLE_NOTE_INPUT":
      return {...currentState, customerNoteInput: action.payload}
      break;
    default:
      return currentState
  }
}

export default reducer
