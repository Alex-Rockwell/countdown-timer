
const p1 = document.getElementById('time1')
const p2 = document.getElementById('time2')

const dSpan = document.getElementById('days')
const hSpan = document.getElementById('hours')
const mSpan = document.getElementById('minutes')
const sSpan = document.getElementById('seconds')

render()

setInterval(render, 1000)

function render() {
  const t1 = new Date(2022, 02, 01)
  const t2 = new Date()
  const ms1 = t1.getTime()
  const ms2 = t2.getTime()
  const diff = ms1 - ms2
  const days = Math.floor(diff/(24*60*60*1000))
  const hours = Math.floor(diff/(60*60*1000) - days*24)
  const minutes = Math.floor(diff/(60*1000) - days*24*60 - hours*60)
  const seconds = Math.floor(diff/(1000) - days*24*60*60 - hours*60*60 - minutes*60)

  dSpan.innerHTML = getDigits(days)
  hSpan.innerHTML = getDigits(hours)
  mSpan.innerHTML = getDigits(minutes)
  sSpan.innerHTML = getDigits(seconds)
}

function getDigits(val) {
  let d = String(val)
  d = (d.length < 2) ? '0' + d : d
  return d
}