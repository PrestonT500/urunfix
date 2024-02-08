document.addEventListener("keydown", function (e) {
    if (e.key === "u" && e.ctrlKey && e.altKey) {
        var popup = window.open("//prestont500.github.io/urunfix/popup.html", "_blank", "width=500,height=300");

        var iframe = popup.document.createElement("iframe");
        iframe.src = "//prestont500.github.io/urunfix/popup.html";
        iframe.style.cssText = "width:100%; height:100%; border:none;";

        popup.document.body.appendChild(iframe);
        popup.document.title = "uRun";

        popup.addEventListener("message", function (event) {
            if (typeof event.data === "string" && event.data.startsWith("execute:")) {
                try {
                    eval(event.data.substring("execute:".length));
                } catch (error) {
                    console.error("Error executing script:", error);
                } finally {
                    popup.close();
                }
            }
        });
    }
});
