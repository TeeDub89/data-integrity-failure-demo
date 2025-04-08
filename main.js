function main() {
    loadNotes();
}

function loadNotes() {
    const notesDiv = document.getElementById("notes");
    let notes;
    try {  
        const notesData = localStorage.getItem("notes");  
        notes = notesData ? JSON.parse(notesData) : [];  
      } catch (error) {  
        console.error("Corrupted notes data!");  
        return [];  
    }  
    notesDiv.innerHTML = notes.map(n => `<div class="note">${n}</div>`).join("");
}

function saveNote(note) {
    const formattedNote = formatNote(note);
    console.log("Saving note:", formattedNote);

    if (!note) {
        return;
    }

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
    document.getElementById("noteInput").value = "";
}

function clearNotes() {
    localStorage.removeItem("notes");
    loadNotes();
}

main();