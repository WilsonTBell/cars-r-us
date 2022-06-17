import { interiorsHTML } from "./interiors.js";
import { paintsHTML } from "./paints.js";
import { technologiesHTML } from "./technologies.js";
import { wheelsHTML } from "./wheels.js";
import { Cars } from "./newcars.js";

export const carsHTML = () => {
    return `
    <h1>Cars-R-Us</h1>
    
    <article class="choices">
        <section class="choices__paints options">
            ${paintsHTML()}
        </section>
        <section class="choices__interiors options">
            ${interiorsHTML()}
        </section>
        <section class="choices__technologies options">
            ${technologiesHTML()}
        </section>
        <section class="choices__wheels options">
            ${wheelsHTML()}
        </section>
    </article>

    <article>
        <button id="orderButton">Create Custom Car</button>
    </article>

    <article class="customOrders">
            <h2>Custom Car Orders</h2>
                ${Cars()}
    </article>
      `
}