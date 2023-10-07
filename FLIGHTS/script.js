const tableBody = document.getElementById("table-body");

//Array
let flights = [
    {
        time: "10:08",
        destination: "MADRID",
        flight: "OX 204",
        gate: "A 10",
        remarks: "CANCELLED" 
    },

    {
        time: "21:39",
        destination: "PARIS",
        flight: "CL 100",
        gate: "B 04",
        remarks: "ON TIME"
    },

    {
        time: "15:22",
        destination: "LISBOA",
        flight: "OX 222",
        gate: "C 18",
        remarks: "DELAYED"
    },

    {
        time: "04:00",
        destination: "RIO DE JANEIRO",
        flight: "CL 304",
        gate: "A 11",
        remarks: "CANCELLED"
    },

    {
        time: "20:07",
        destination: "LUANDA",
        flight: "OX 101",
        gate: "C 42",
        remarks: "ON TIME"
    },

    {
        time: "10:01",
        destination: "DUBAI",
        flight: "OX 11",
        gate: "B 12",
        remarks: "DEYALED"
    }
]


function table(){
    for(const flight of flights){
        const tableRow = document.createElement("tr");
        
        for(const flightDetail in flight){
            const tableCell = document.createElement("td");
    
            const word = Array.from(flight[flightDetail]);
            for(const letter of word){
                const letterElement = document.createElement("div");
                letterElement.classList.add("flip");
                letterElement.textContent = letter;

                tableCell.append(letterElement);
            }
            tableCell.innerText = flight[flightDetail];

          tableRow.append(tableCell);
    
       
        }

       tableBody.append(tableRow);
    }

}

table();
