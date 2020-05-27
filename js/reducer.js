// add code snippets from README
let state 

function reducer(state = {count: 0}, action) {
    switch (action.type) {
        case "INCREASE_COUNT":
            return {count: state.count + 1}
        default:
            return state
    }
}

const container = document.querySelector("#container")

function render() {
    container.innerHTML = state.count
}

function dispatch(action) {
    state = reducer(state, action)
    render()
}

dispatch('@@INIT')

const button = document.querySelector('#button')
button.addEventListener("click", function(event) {
    console.log('state')
    dispatch({type: "INCREASE_COUNT"})
})

