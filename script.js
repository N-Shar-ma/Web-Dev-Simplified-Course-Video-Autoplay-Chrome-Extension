const timer = setInterval(() => {
    const videoElem = document.getElementsByTagName("video")[0];
    if(!videoElem) return
    console.log("Video Found")
    clearInterval(timer)
    const nextButton = document.querySelectorAll("a.btn.btn-static.btn-block")[1]
    if(!nextButton) return
    console.log("Next Button Found")
    videoElem.addEventListener("ended", () => {
        setTimeout(() => {
            console.log("clicked next")
            window.location = nextButton.href
        }, 2000)
    })
}, 500)