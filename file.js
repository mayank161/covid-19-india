const header = document.getElementsByClassName('header')[0].children
const one = header[0];
const two = header[1];
const three = header[2];
const four = header[3];

const colors = [
    "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
    "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
    "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
    "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
    "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
    "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
    "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
    "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
    "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
    "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
    "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
    "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
    "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
    "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
    "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
    "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
    "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
    "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
    "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
    "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
    "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
    "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
    "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
    "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
    "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
    "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
    "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
    "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
    "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
    "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
    "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
    "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
    "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
    "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
    "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
    "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
    "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
    "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
    "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
    "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"]

let coChange = 0,coLength = colors.length;

let so = 0,st = 0,sth = 0,sf = 0;
let fo,ft,fth,ff;

let recovered = [];
let confirmedAr = [];
let statesAr = [];
let population = [];

var myPop;
var myChart;
let m;
india();
async function india() {
    const data = await axios.get('https://api.covid19india.org/v4/min/data.min.json')
    m = Object.entries(data.data)
    let f,s;
    header[0].innerHTML = `Selected states <br> ${m.length}`;
    
    let main = document.getElementById('first');

    m.splice(33,1);
    so = m.length;
    for(let i=0; i<m.length; i++) {
        f = m[i][0];
        s = m[i][1].total; 

        main.innerHTML += `
        <div class="ele" >
        <input type='checkbox' onchange="change(event)" value="${i}" checked> 
        <label for="">${f}</label>
        </div>
        `
        coChange +=2;
        st += s.confirmed;
        sth += s.recovered;
        sf += m[i][1].meta.population;              
        statesAr.push(f);
        recovered.push(s.recovered);
        confirmedAr.push(s.confirmed)
        population.push(m[i][1].meta.population);
    }
    fo = so,ft=st,fth=sth,ff=sf;
    one.innerHTML = `selected <br>${so}`;
    two.innerHTML = `confirmed <br>${st}`;
    three.innerHTML = `recovered <br>${sth}`;
    four.innerHTML = `population <br> ${sf}`;

    chart(statesAr,recovered,confirmedAr)

    populate(statesAr,population);
    colCol();
}

function sn(e) {
    const p = e.target;
    const ele = document.getElementsByClassName('ele');
    let val,ar;
    if(p.checked) {
        for(let i=1;i<ele.length;i++) {
            val = ele[i].children[0]
            val.checked = true;
            ar = val
            ar = m[i - 1];
            statesAr[i] = ar[0];
            confirmedAr[i] =  ar[1].total.confirmed
            recovered[i] =  ar[1].total.recovered
            population[i] = ar[1].meta.population
        }
        so = fo,st=ft,sth=fth,sf=ff;   
    }
    else{
        for(let i=1;i<ele.length;i++) {
            ele[i].children[0].checked = false
        }
        statesAr.fill(null)
        recovered.fill(null);
        confirmedAr.fill(null);
        population.fill(null);
        so=0,st=0,sth=0,sf=0;
    }

    myChart.destroy();
    myPop.destroy();
    chart(statesAr,recovered,confirmedAr)
    populate(statesAr,population);

    one.innerHTML = `selected <br>${so}`;
    two.innerHTML = `confirmed <br>${st}`;
    three.innerHTML = `recovered <br>${sth}`;
    four.innerHTML = `population <br>${sf}`;

    colCol();
}

function change(e) {
  const p = e.target;
  let s =m[p.value];
  const conf =  s[1].total.confirmed, rec = s[1].total.recovered, pop = s[1].meta.population;

  console.log(p)
  if(!p.checked) {
    statesAr[p.value] = null;
    recovered[p.value] = null;
    confirmedAr[p.value] = null;
    population[p.value] = null;
    so -= 1,st -= conf,sth -= rec,sf -= pop;
  }
  else {
    statesAr[p.value] = s[0];
    recovered[p.value] = rec;
    confirmedAr[p.value] = conf;
    population[p.value] = pop;
    so += 1,st += conf,sth += rec,sf += pop;
  }

    myChart.destroy();
    myPop.destroy();
    chart(statesAr,recovered,confirmedAr)
    populate(statesAr,population);

    one.innerHTML = `selected <br>${so}`;
    two.innerHTML = `confirmed <br>${st}`;
    three.innerHTML = `recovered <br> ${sth}`;
    four.innerHTML = `population <br> ${sf}`;

    colCol();
}



function chart(states,recovered,confirmed) {
    states = states.filter((num) => { return num != null; })
    recovered = recovered.filter((num) => { return num != null; })
    confirmed = confirmed.filter((num) => { return num != null; })

    var ctx = document.getElementById('myChart').getContext('2d');
         myChart = new Chart(ctx, {
            
            data: {
                labels: states,
                fill: true,
                spanGaps: true,
                datasets: [{
                    type: 'line',
                    lineTension: 0.2,
                    fill: true,
                    spanGaps: true,
                    label: 'recovered',
                    data: recovered,
                    backgroundColor: [
                        'rgba(67, 241, 134, 0.219)'
                    ],
                    borderColor: [
                        '#00ff00'
                    ],
                    borderWidth: 1
                },
                {
                    type: 'line',
                    lineTension: 0.3,
                    spanGaps: true,
                    fill: false,
                    backgroundColor: 'yellow',
                    label: 'confirmed', 
                    data: confirmed,
                    backgroundColor: [
                      'black'
                    ],
                    borderColor: [
                       'black'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    },
                    x: {
                        beginAtZero: true
                    },
                }
            }
        });

}



function populate(states,population) {
    states = states.filter((num) => { return num != null; })
    population = population.filter((num) => { return num != null; })
    var ctx = document.getElementById('myPop').getContext('2d');
         myPop = new Chart(ctx, {
            
            data: {
                labels: states,
                fill: true,
                spanGaps: true,
                datasets: [{
                    type: 'bar',
                    lineTension: 0.2,
                    fill: true,
                    spanGaps: true,
                    label: 'population',
                    data: population,
                    backgroundColor: [
                        `${colors[coChange%coLength]}`
                    ],
                    borderColor: [
                        'blue'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    },
                    x: {
                        beginAtZero: true
                    },
                }
            }
        });

}




function colCol() {
    one.style.backgroundColor = `${colors[coChange%coLength]}`
    two.style.backgroundColor = `${colors[coChange%coLength]}`
    three.style.backgroundColor = `${colors[coChange%coLength]}`
    four.style.backgroundColor = `${colors[coChange%coLength]}`
    coChange++;
}