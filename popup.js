const inputs = [...document.querySelectorAll("input")]

inputs.forEach( input => input.addEventListener("change", storeData))

chrome.storage.sync.get(["WDSCourseAutoplay"], function (data) {
    data = data.WDSCourseAutoplay
    if (data) {
        inputs[0].checked = data.autoplay
        inputs[1].value = data.delay
    } else {
        inputs[0].checked = true
        inputs[1].value = 5
        storeData()
    }
})

function storeData () {
    const data = {
        autoplay: inputs[0].checked,
        delay: inputs[1].valueAsNumber
    }
    chrome.storage.sync.set({ "WDSCourseAutoplay": data })
}