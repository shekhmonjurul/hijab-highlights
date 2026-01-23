const colorSelect = document.getElementById('colorSelect');
const colorList = document.getElementById('colorList');
const orderForm = document.getElementById('order-form');
const total = document.getElementById('total');
const delivery = document.getElementById('delivery');
const grandTotal = document.getElementById('grand-total');

const colors = {};
const fixdPrice = 650;
const bdDivisions = [
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh"
];




colorSelect.addEventListener('change', (evnt) => {
    const color = colorSelect.value;
    if (!color || colors[color]) return;

    colors[color] = 1;

    const item = document.createElement('div');
    item.className = 'flex items-center justify-between border rounded-xl p-3';
    item.dataset.color = color;

    item.innerHTML = `
        <span class="font-medium">${color}</span>
        <div class="flex items-center gap-2">
          <button type="button" class="px-3 py-1 rounded-lg bg-gray-200" onclick="updateQty('${color}', -1)">-</button>
          <span id="qty-${color}">1</span>
          <button type="button" class="px-3 py-1 rounded-lg bg-gray-200" onclick="updateQty('${color}', 1)">+</button>
          <button type="button" class="ml-2 px-3 py-1 rounded-lg bg-red-500 text-white" onclick="removeColor('${color}')">✕</button>
        </div>
      `;

    colorList.appendChild(item);
    colorSelect.value = '';
});

orderForm.addEventListener("submit", (evnt) => {
    evnt.preventDefault();
    const formData = new FormData(evnt.target);
    const formFileds = ['name', 'phone', 'address', 'thana', 'district', 'division', 'total'];
    const formValues = {};

    formFileds.forEach((filed) => {
        formValues[filed] = encodeURIComponent(formData.get(filed));
    });

    formValues['color'] = encodeURIComponent(JSON.stringify(colors));

    const prefillLink = `https://docs.google.com/forms/d/e/1FAIpQLSfzbHc_Juv4z4ObauHgQb-owoSbzzcz9zh7FO96IvELV3cPTQ/viewform?usp=pp_url&entry.1889973036=${formValues?.name}&entry.1545546885=${formValues?.phone}&entry.439599756=${formValues?.address}&entry.738126846=${formValues?.thana}&entry.665969784=${formValues?.district}&entry.140247102=${formValues?.division}&entry.22687757=${formValues?.color}&entry.892842935=${total.textContent}&entry.1500929870=${delivery.textContent}&entry.1289613468=${grandTotal.textContent}`


    window.location.href = prefillLink;

    console.log("form data: ", prefillLink)
})

window.addEventListener("change", () => {
    const values = Object.values(colors);
    const sum = values.reduce((acc, current) => acc + current, 0);


    const subTotal = fixdPrice * sum;
    total.textContent = `Totol : ${subTotal} BDT`;

    const formData = new FormData(orderForm);

    const division = formData.get('division');
    let inDhaka = (division === 'Dhaka') ? 80 : 130;
    inDhaka = (bdDivisions.includes(division)) ? inDhaka : 0;

    delivery.textContent = `Delivery : ${inDhaka} BDT`;

    grandTotal.textContent = `Grand Total : ${subTotal + inDhaka} BDT`;

})


function removeColor(color) {
    delete colors[color];
    const item = document.querySelector(`[data-color="${color}"]`);
    if (item) item.remove();
}

function updateQty(color, change) {
    if (!colors[color]) return;
    colors[color] = Math.max(1, colors[color] + change);
    document.getElementById(`qty-${color}`).innerText = colors[color];



    const values = Object.values(colors);
    const sum = values.reduce((acc, current) => acc + current, 0);


    const subTotal = fixdPrice * sum;
    total.textContent = `Totol : ${subTotal} BDT`;

    const formData = new FormData(orderForm);

    const division = formData.get('division');

    let inDhaka = (division === 'Dhaka') ? 80 : 130;
    inDhaka = (bdDivisions.includes(division)) ? inDhaka : 0;


    delivery.textContent = `Delivery : ${inDhaka} BDT`;

    grandTotal.textContent = `Grand Total : ${subTotal + inDhaka} BDT`;

}