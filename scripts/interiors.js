import { getInteriors, setInteriors } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInteriors(parseInt(event.target.value))
        }
    }
)

export const interiorsHTML = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}