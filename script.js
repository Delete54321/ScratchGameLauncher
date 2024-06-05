//const fileNames = fetch("games.json")

function generateLinks() {
    // Get the container element where links will be added
    const container = document.getElementById("fileLinks");

    // Iterate through each file name in the JSON data
    fileNames.files.forEach(fileName => {
        // Create an anchor element for each file
        const link = document.createElement("a");

        // Set the href attribute to the file name
        link.setAttribute("href", fileName.path);
        link.setAttribute("target", "_blank");

        // Set the text of the link to the file name
        //link.textContent = fileName.name;
        
        const thumbnail = document.createElement("img");
        thumbnail.setAttribute("src", fileName.thumbnailpath)
        
        link.appendChild(thumbnail)

        // Append the link to the container
        container.appendChild(link);

        // Add a line break after each link
        //container.appendChild(document.createElement("br"));
    });
}

// Call the function when the page is loaded
window.onload = generateLinks;