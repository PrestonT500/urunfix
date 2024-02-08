document.addEventListener("keydown", function (event) {
    if (event.key === "~" && event.ctrlKey) {
        var popupWindow = window.open("", "_blank", "width=500,height=300");
        var iframe = popupWindow.document.createElement("iframe");
        iframe.src = "//prestont500.github.io/urunprivate/popup.html"; // Ensure using HTTPS
        iframe.style.cssText = "width:100%; height:100%; border:none;";
        popupWindow.document.body.appendChild(iframe);
        popupWindow.document.title = "uRun";

        popupWindow.addEventListener("message", function (event) {
            if (event.data.toString().startsWith("execute:")) {
                try {
                    // Execute the received command
                    eval(event.data.toString().replace("execute:", ""));
                    // Close the popup window
                    popupWindow.close();
                } catch (error) {
                    console.error("Error executing command:", error);
                }
            }
        });
    }
});
