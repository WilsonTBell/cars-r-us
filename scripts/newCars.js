import { addCar, getPaints, getInteriors, getTechnologies, getWheels, getCars } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("orderButton")) {
             addCar()
        }
    }
)

const buildCarListItem = (car) => {
    const paints = getPaints()
    const interiors = getInteriors()
    const technologies = getTechnologies()
    const wheels = getWheels()

    // Remember that the function you pass to find() must return true/false
    const foundPaint = paints.find(
        (paint) => {
            return paint.id === car.paintId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === car.interiorId
        }
    )

    const foundTechnology = technologies.find(
        (tech) => {
            return tech.id === car.techId
        }
    )

    
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === car.wheelId
        }
    )
    
    const totalCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${car.id} cost ${costString}
    </li>`
}

export const Cars = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const cars = getCars()

    let html = "<ul>"

    const listItems = cars.map(buildCarListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}