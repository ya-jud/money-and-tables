function sendData() {
    console.log("start")
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:5000/somedata"
    
    xhr.open('POST', url, true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onreadystatechange = res => {
        console.log("center")
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(res)
        }
    };
    console.log("end")
}

export default sendData