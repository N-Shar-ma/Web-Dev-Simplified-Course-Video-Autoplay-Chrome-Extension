let autoplay = true
let delay = 5000

chrome.runtime.onMessage.addListener( function (req) {
    autoplay = req.autoplay
    delay = req.delay * 1000
})

const timer = setInterval(() => {
    const videoElem = document.getElementsByTagName("video")[0];
    if(!videoElem) return
    console.log("Video Found")
    clearInterval(timer)
    const nextButton = document.querySelectorAll("a.btn.btn-static.btn-block")[1]
    if(!nextButton) return
    console.log("Next Button Found")
    videoElem.addEventListener("ended", () => {
        if(!autoplay) return
        setTimeout(() => {
            console.log("clicked next")
            window.location = nextButton.href
        }, delay)
    })
}, 500)