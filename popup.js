const inputs = [...document.querySelectorAll("input")]

inputs.forEach( input => input.addEventListener("change", sendMessage))

function sendMessage () {
    const data = {
        autoplay: inputs[0].checked,
        delay: inputs[1].valueAsNumber
    }
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, data)
    })
}