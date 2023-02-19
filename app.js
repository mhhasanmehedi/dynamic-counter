const addCounter = document.getElementById("addCounter");
const counterContainer = document.querySelector(".counterContainer");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_COUNTER = "ADD_COUNTER";

// Action creators
const increment = (id) => {
  return {
    type: INCREMENT,
    id,
  };
};
const decrement = (id) => {
  return {
    type: DECREMENT,
    id,
  };
};
const add_counter = () => {
  return {
    type: ADD_COUNTER,
  };
};

// Reducer function
const changeCounter = (state = {}, action) => {
  switch (action.type) {
    case INCREMENT:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

let nextId = 0;

const counterReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return [...state, { id: nextId++, count: 0 }];
    case INCREMENT:
      return state.map((counter) => changeCounter(counter, action));
    case DECREMENT:
      return state.map((counter) => changeCounter(counter, action));
    default:
      return state;
  }
};

const store = Redux.createStore(counterReducer);

addCounter.addEventListener("click", () => {
  counterContainer.innerHTML += `<div class="singleCounter">
  <span>${store.getState().count}</span>
  <button>+</button>
  <button>-</button>
</div>`;
});
