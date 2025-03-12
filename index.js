// FETCH THE IP ADDRESS {YOU CAN ALSO CHECK IT FROM WHAT IS MY IP? ON GOOGLE.}
// THE IP YOU WILL GET FROM IP CONFIG WILL BE DIFFERENT AS IT WILL BE PRIVATE, THANKS.

fetch("https://api64.ipify.org?format=json")
    .then(response => response.json())
    .then(data => document.getElementById("ip-dekhao").innerText = "Hey👋 { " + data.ip + " }")
    .catch(error => console.error("Error fetching IP:", error));


// THIS IS THE MAIN SCRIPT TO BASICALLY INVOE THE BROWSER LOCAL STORAGE, INSTEAD OF USING
// SESSIONS TOKEN, SO NOW IF EVEN YOU REFRESH THE PAGE IT WONT GET BUSTED,
// REASON: AN ENTITY WILL BE CREATED IN KEY PAIR. WHAT?
// ARRAY[I] : ENTERY YOU HAVE TYPED, HOPE YOU CAN TYPE GOOD. :D 
{
    const khata = JSON.parse(localStorage.getItem('khata') || '[]');
    const khata_form = document.getElementById('khata_form');
    const khata_list = document.getElementById('khata_list');

    function RENDER_KHATA() {
        khata_list.innerHTML = '';
        khata.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                khata.splice(index, 1);
                localStorage.setItem('khata', JSON.stringify(khata));
                RENDER_KHATA();
            });
            li.appendChild(removeButton);
            khata_list.appendChild(li);
        });
    }

    khata_form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = document.getElementById('task').value;
        khata.push(task);
        localStorage.setItem('khata', JSON.stringify(khata));
        RENDER_KHATA();
        document.getElementById('task').value = '';
    });

    document.addEventListener('DOMContentLoaded', RENDER_KHATA);

}


// JUST A SIMPLE THEME TOGGLE, INSPIRED BY MY OTHER SITES.
{
    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        document.querySelector(".theme-switch").classList.toggle("active");
    }
}


// ADDING SOME RESTRUCTIONS
{
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });
    
    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "i" || event.key === "j")) {
            event.preventDefault();
        }
        if (event.key === "F12") {
            event.preventDefault();
        }
    });

    document.addEventListener("keydown", function(event) {
        if (
            (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) || // Ctrl+Shift+I/J/C
            (event.ctrlKey && event.key === "U") || // Ctrl+U
            (event.key === "F12") // F12
        ) {
            event.preventDefault();
        }
    });
}