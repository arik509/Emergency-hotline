const historyData = [];

let heartCount = parseInt(document.getElementById('heart-count').innerText);

const hearts = document.getElementsByClassName('heart');

for (const heart of hearts) {
    heart.addEventListener('click', function () {
        heartCount = heartCount + 1;

        document.getElementById('heart-count').innerText = heartCount;
    })
}


let coinCount = parseInt(document.getElementById('coin-count').innerText);

document.getElementById('national-emergency-call-button').addEventListener('click', function () {

    if (coinCount < 20) {
        alert('Not available coin ❌');
        return;
    }

    alert('📞 Calling National Emergency Service 999...');

    coinCount = coinCount - 20;

    document.getElementById('coin-count').innerText = coinCount;

    const data = {
        name: "জাতীয় জরুরি সেবা",
        number: "999",
        time: new Date().toLocaleTimeString()
    }

    historyData.push(data);

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ""

    for (const data of historyData) {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="bg-[#fafafa] rounded-[8px] mt-4 p-[16px] flex justify-between items-center">
      <div>
          <p>${data.name}</p>
          <p>${data.number}</p>
      </div>
      <div>
          ${data.time}
      </div>
    </div>
    `

        historyContainer.appendChild(div)
    }
})

document.getElementById('national-emergency-copy-button').addEventListener('click', function () {
    let copyCount = parseInt(document.getElementById('copy-count').innerText)

    navigator.clipboard.writeText('999').then(() => alert('Copied: 999'))

    copyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = copyCount;

})

document.getElementById('police-calling-button').addEventListener('click', function () {

    if (coinCount < 20) {
        alert('Not available coin ❌');
        return;
    }

    alert('👮 Calling police 999...');

    coinCount = coinCount - 20;

    document.getElementById('coin-count').innerText = coinCount;

    const data = {
        name: "পুলিশ",
        number: "999",
        time: new Date().toLocaleTimeString()
    }

    historyData.push(data);

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ""

    for (const data of historyData) {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="bg-[#fafafa] rounded-[8px] mt-4 p-[16px] flex justify-between items-center">
      <div>
          <p>${data.name}</p>
          <p>${data.number}</p>
      </div>
      <div>
          ${data.time}
      </div>
    </div>
    `

        historyContainer.appendChild(div)
    }
})

document.getElementById('police-copy-button').addEventListener('click',function(){
    let copyCount = parseInt(document.getElementById('copy-count').innerText)

    navigator.clipboard.writeText('999').then(() => alert('Copied: 999'))

    copyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = copyCount;
      
})


document.getElementById('fire-service-calling-button').addEventListener('click', function () {
    if (coinCount < 20) {
        alert('Not available coin ❌');
        return;
    }
    alert('🚒 Calling Fire Service 999...');


    coinCount = coinCount - 20;

    document.getElementById('coin-count').innerText = coinCount;

    const data = {
        name: "ফায়ার সার্ভিস",
        number: "999",
        time: new Date().toLocaleTimeString()
    }

    historyData.push(data);

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ""

    for (const data of historyData) {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="bg-[#fafafa] rounded-[8px] mt-4 p-[16px] flex justify-between items-center">
      <div>
          <p>${data.name}</p>
          <p>${data.number}</p>
      </div>
      <div>
          ${data.time}
      </div>
    </div>
    `

        historyContainer.appendChild(div)
    }
})

document.getElementById('fire-copy').addEventListener('click',function(){
    let copyCount = parseInt(document.getElementById('copy-count').innerText)

    navigator.clipboard.writeText('999').then(() => alert('Copied: 999'))

    copyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = copyCount;
      
})

document.getElementById('ambulance-calling-button').addEventListener('click', function () {

    if (coinCount < 20) {
        alert('Not available coin ❌');
        return;
    }

    alert('🚑 Calling Ambulance 1994-999999...');

    coinCount = coinCount - 20;

    document.getElementById('coin-count').innerText = coinCount;

    const data = {
        name: "অ্যাম্বুলেন্স",
        number: "1994-999999",
        time: new Date().toLocaleTimeString()
    }

    historyData.push(data);

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ""

    for (const data of historyData) {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="bg-[#fafafa] rounded-[8px] mt-4 p-[16px] flex justify-between items-center">
      <div>
          <p>${data.name}</p>
          <p>${data.number}</p>
      </div>
      <div>
          ${data.time}
      </div>
    </div>
    `

        historyContainer.appendChild(div)
    }
})

document.getElementById('ambulance-copy').addEventListener('click',function(){
    let copyCount = parseInt(document.getElementById('copy-count').innerText)

    navigator.clipboard.writeText('1994-999999').then(() => alert('Copied: 1994-999999'))

    copyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = copyCount;
      
})


document.getElementById('woman-help-button').addEventListener('click', function () {
    if (coinCount < 20) {
        alert('Not available coin ❌');
        return;
    }

    alert('📞 Calling Women & Child Helpline 109...');

    coinCount = coinCount - 20;

    document.getElementById('coin-count').innerText = coinCount;

    const data = {
        name: "নারী ও শিশু সহায়তা",
        number: "109",
        time: new Date().toLocaleTimeString()
    }

    historyData.push(data);

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ""

    for (const data of historyData) {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="bg-[#fafafa] rounded-[8px] mt-4 p-[16px] flex justify-between items-center">
      <div>
          <p>${data.name}</p>
          <p>${data.number}</p>
      </div>
      <div>
          ${data.time}
      </div>
    </div>
    `

        historyContainer.appendChild(div)
    }
})

document.getElementById('women-copy').addEventListener('click',function(){
    let copyCount = parseInt(document.getElementById('copy-count').innerText)

    navigator.clipboard.writeText('109').then(() => alert('Copied: 109'))

    copyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = copyCount;
      
})


document.getElementById('dudok-button').addEventListener('click', function () {
    if (coinCount < 20) {
        alert('Not available coin ❌');
        return;
    }

    alert('📞 Calling Anti-Corruption Helpline 106...');

    coinCount = coinCount - 20;

    document.getElementById('coin-count').innerText = coinCount;

    const data = {
        name: "দুদক",
        number: "106",
        time: new Date().toLocaleTimeString()
    }

    historyData.push(data);

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ""

    for (const data of historyData) {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="bg-[#fafafa] rounded-[8px] mt-4 p-[16px] flex justify-between items-center">
      <div>
          <p>${data.name}</p>
          <p>${data.number}</p>
      </div>
      <div>
          ${data.time}
      </div>
    </div>
    `

        historyContainer.appendChild(div)
    }
})

document.getElementById('dudok-copy').addEventListener('click',function(){
    let copyCount = parseInt(document.getElementById('copy-count').innerText)

    navigator.clipboard.writeText('106').then(() => alert('Copied: 106'))

    copyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = copyCount;
      
})


document.getElementById('current-button').addEventListener('click', function () {

    if (coinCount < 20) {
        alert('Not available coin ❌');
        return;
    }

    alert('📞 Calling Electricity Outage Helpline 16216...');

    coinCount = coinCount - 20;

    document.getElementById('coin-count').innerText = coinCount;

    const data = {
        name: "বিদ্যুৎ বিভ্রাট",
        number: "16216",
        time: new Date().toLocaleTimeString()
    }

    historyData.push(data);

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ""

    for (const data of historyData) {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="bg-[#fafafa] rounded-[8px] mt-4 p-[16px] flex justify-between items-center">
      <div>
          <p>${data.name}</p>
          <p>${data.number}</p>
      </div>
      <div>
          ${data.time}
      </div>
    </div>
    `

        historyContainer.appendChild(div)
    }
})

document.getElementById('current-copy').addEventListener('click',function(){
    let copyCount = parseInt(document.getElementById('copy-count').innerText)

    navigator.clipboard.writeText('16216').then(() => alert('Copied: 16216'))

    copyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = copyCount;
      
})

document.getElementById('brac-button').addEventListener('click', function () {

    if (coinCount < 20) {
        alert('Not available coin ❌');
        return;
    }

    alert('📞 Calling Brac Helpline 16445...');

    coinCount = coinCount - 20;

    document.getElementById('coin-count').innerText = coinCount;

    const data = {
        name: "ব্র্যাক",
        number: "16445",
        time: new Date().toLocaleTimeString()
    }

    historyData.push(data);

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ""

    for (const data of historyData) {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="bg-[#fafafa] rounded-[8px] mt-4 p-[16px] flex justify-between items-center">
      <div>
          <p>${data.name}</p>
          <p>${data.number}</p>
      </div>
      <div>
          ${data.time}
      </div>
    </div>
    `

        historyContainer.appendChild(div)
    }
})

document.getElementById('brac-copy').addEventListener('click',function(){
    let copyCount = parseInt(document.getElementById('copy-count').innerText)

    navigator.clipboard.writeText('16445').then(() => alert('Copied: 16445'))

    copyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = copyCount;
      
})

document.getElementById('rail-button').addEventListener('click', function () {

    if (coinCount < 20) {
        alert('Not available coin ❌');
        return;
    }

    alert('📞 Calling Bangladesh Railway helpline 163...');

    coinCount = coinCount - 20;

    document.getElementById('coin-count').innerText = coinCount;

    const data = {
        name: "বাংলাদেশ রেলওয়ে",
        number: "163",
        time: new Date().toLocaleTimeString()
    }

    historyData.push(data);

    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = ""

    for (const data of historyData) {
        const div = document.createElement("div")
        div.innerHTML = `
    <div class="bg-[#fafafa] rounded-[8px] mt-4 p-[16px] flex justify-between items-center">
      <div>
          <p>${data.name}</p>
          <p>${data.number}</p>
      </div>
      <div>
          ${data.time}
      </div>
    </div>
    `

        historyContainer.appendChild(div)
    }
})

document.getElementById('rail-copy').addEventListener('click',function(){
    let copyCount = parseInt(document.getElementById('copy-count').innerText)

    navigator.clipboard.writeText('163').then(() => alert('Copied: 163'))

    copyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = copyCount;
      
})

document.getElementById('clear-btn').addEventListener('click', function () {
    const historyContainer = document.getElementById('history-container')
    historyContainer.innerText = "";
    historyData.length = 0;
})


