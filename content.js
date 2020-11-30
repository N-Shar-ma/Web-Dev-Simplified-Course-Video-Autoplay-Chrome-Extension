let autoplay
let delay

const timer = setInterval(() => {
    const videoElem = document.getElementsByTagName("video")[0];
    if(!videoElem) return
    console.log("Video Found")
    clearInterval(timer)
    const nextButton = document.querySelectorAll("a.btn.btn-static.btn-block")[1]
    if(!nextButton) return
    console.log("Next Button Found")
    videoElem.addEventListener("ended", () => {
        chrome.storage.sync.get(["WDSCourseAutoplay"], function (data) {
            data = data.WDSCourseAutoplay
            if (data) {
                autoplay = data.autoplay
                delay = data.delay * 1000
            } else {
                autoplay = true
                delay = 5000
            }
            if(!autoplay) return console.log("Autoplay turned off")
            setTimeout(() => {
                console.log("clicked Next")
                window.location = nextButton.href
            }, delay)
        })
    })
}, 500)