import { getPaints, setPaint } from "./database.js";

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

export const paintsHTML = () => {
    let html = "<h2>Paint Colors</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}" name="paint">${paint.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}