 function onDOMLoad() {
            // Write "DOM load success" to the document
            document.write("DOM load success");

            // // Clear the body content
            // document.body.innerHTML = "";
        }

        // Add an event listener for DOMContentLoaded
        document.addEventListener("DOMContentLoaded", onDOMLoad);