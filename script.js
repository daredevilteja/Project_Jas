let count = 0;

function addStudent() {
    count += 1;
    const name = document.getElementById("name");
    const table = document.getElementById("table");
    
    if(name.value === "") {
        count -= 1;
    } else {
        const tr = document.createElement("tr");
        tr.setAttribute("class", "tr");

        const a = [count, name.value];

        a.forEach((val) => {
            const td = document.createElement("td");
            td.innerText = val;
            tr.appendChild(td);
        });
        name.value = "";
        table.appendChild(tr);
    }

}

function reset() {
    const table = document.getElementById("table");
    const tr = document.createElement("tr");
    table.remove();

    const table1 = document.createElement("table");
    const head = ["S.No", "Name"];
    head.forEach((val) => {
        const th = document.createElement("th");
        th.innerText = val;

        tr.appendChild(th);
    });

    table1.appendChild(tr);
    document.body.appendChild(table1);
    count = 0;

}

function attendance() {
    const div = document.getElementById("diva");
    if(div !== null) {
        div.remove();
        render();
    } else {
        render();
    }
}

function render() {
    const diva = document.createElement("div");
    diva.setAttribute("id", "diva");
    const p = document.createElement('p');
    p.innerHTML = `Attendance upto now is ${count}`;

    diva.appendChild(p);
    document.body.appendChild(diva);
}