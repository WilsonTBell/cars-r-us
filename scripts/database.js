/*

    This module contains all of the data, or state, for the
    application. It exports functions that allow other
    modules to get copies of the state.

*/

const database = {
    paints: [
        {id: 1, name: "Silver", price: 1000},
        {id: 2, name: "Midnight Blue", price: 1500},
        {id: 3, name: "Firebrick Red", price: 2000},
        {id: 4, name: "Spring Green", price: 1800}
    ],
    technologies: [
        {id: 1, name: "Basic Package (basic sound system)", price: 1000},
        {id: 2, name: "Navigation Package (includes integrated navigation controls)", price: 1300},
        {id: 3, name: "Visibility Package (includes side and rear cameras)", price: 1500},
        {id: 4, name: "Ultra Package (includes navigation and visibility packages)", price: 2200}
    ],
    interiors: [
        {id: 1, name: "Beige Fabric", price: 800},
        {id: 2, name: "Charcoal Fabric", price: 800},
        {id: 3, name: "White Leather", price: 1200},
        {id: 4, name: "Black Leather", price: 1400}
    ],
    wheels: [
        {id: 1, name: "17-inch Pair Radial", price: 1000},
        {id: 2, name: "17-inch Pair Radial Black", price: 1200},
        {id: 3, name: "18-inch Pair Spoke Silver", price: 1800},
        {id: 4, name: "18-inch Pair Spoke Black", price: 1500}
    ],
    carBuilder: {},
    cars: [
        {
            id: 1,
            paintId: 4,
            techId: 4,
            interiorId: 3,
            wheelId: 3,
            timestamp: 1614659931693
        }
    ]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getCars = () => {
    return database.cars.map(car => ({...car}))
}

export const setPaint = (id) => {
    database.carBuilder.paintId = id
}

export const setTechnology = (id) => {
    database.carBuilder.techId = id
}

export const setWheels = (id) => {
    database.carBuilder.wheelId = id
}

export const setInteriors = (id) => {
    database.carBuilder.interiorId = id
}

export const addCar = () => {
    // Copy the current state of user choices
    const newCar = {...database.carBuilder}

    // Add a new primary key to the object
    const lastIndex = database.cars.length - 1
    newCar.id = database.cars[lastIndex].id + 1

    // Add a timestamp to the order
    newCar.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.cars.push(newCar)

    // Reset the temporary state for user choices
    database.carBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}