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
  selectedCategory: null,
  selectedCustomer: null,
  numFormRows: 1,
  formRows: [],
  orderTotal: null,
  orders: [],
  users: [],
  orderedProducts: []
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
      return {...currentState, openDashboard: currentState.openDashboard = true, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, productSelected: false}
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
    case "FETCH_ORDERS_BEGIN":
      return {...currentState, loading: true,
        error: null}
    case "FETCH_ORDERS_SUCCESS":
      return {...currentState, loading: false,
        orders: action.payload.orders}
    case "FETCH_ORDERS_FAILURE":
      return {...currentState, loading: false,
        orders: []}
    case "FETCH_USERS_BEGIN":
      return {...currentState, loading: true,
        error: null}
    case "FETCH_USERS_SUCCESS":
      return {...currentState, loading: false,
        users: action.payload.users}
    case "FETCH_USERS_FAILURE":
      return {...currentState, loading: false,
        users: []}
    case "FETCH_ORDERED_PRODUCTS_BEGIN":
      return {...currentState, loading: true,
        error: null}
    case "FETCH_ORDERED_PRODUCTS_SUCCESS":
      return {...currentState, loading: false,
        orderedProducts: action.payload.ordered_products}
    case "FETCH_ORDERED_PRODUCTS_FAILURE":
      return {...currentState, loading: false,
        orderedProducts: []}
    case "VIEW_THIS_CUSTOMER":
      return {...currentState, viewThisCustomer: action.payload, openDashboard: currentState.openDashboard = false, viewProducts: currentState.viewProducts = false, createOrder: currentState.createOrder = false, viewToys: currentState.viewToys = false, viewElectronics: currentState.viewElectronics = false, editNote: currentState.editNote = false, editThisNote: currentState.editThisNote = null, selectedCategory: false, productSelected: false}
    case "EDIT_NOTE":
      return {...currentState, editNote: currentState.editNote = true, editThisNote: action.payload, customerNoteInput: action.payload.body}
    case "HANDLE_NOTE_INPUT":
      return {...currentState, customerNoteInput: action.payload}
    case "HANDLE_SELECT_CUSTOMER":
      return {...currentState, selectedCustomer: currentState.customers.filter(customer => customer.id == action.payload)}
    case "HANDLE_ADD_ROW":
      return {...currentState, numFormRows: currentState.numFormRows+1}

      break;
    default:
      return currentState
  }
}

export default reducer
