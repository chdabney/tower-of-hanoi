//add click handler to 3 towers
//variable to keep track of what state player is in - source tower to destination tower
//use eventcurrenttarget inside of click handler to determine tower clicked.
//DOM property childElementCount to find how many disks are in a tower.
//DOM property lastElementChild to find the disk on top of tower.
//DOM method append to add disk to selected tower. 
//ElementclientWidth property to get the width of disk elements 

//tower selectors
const sourceTower = document.querySelector('#sourceTower')
const offsetTower = document.querySelector('#offsetTower')
const endTower = document.querySelector('#endTower')
//disk selectors
const disk1 = document.querySelector('#disk1')
const disk2 = document.querySelector('#disk2')
const disk3 = document.querySelector('#disk3')
const disk4 = document.querySelector('#disk4')

//variable to keep track if tower is current active
let isActiveTower = false

//click source tower to make active and get the smallest child
//if no children alert to select a different tower
// click destination tower and check if top disk is bigger or smaller than source disk
//if destination has no children or its child is bigger than source tower
//append source tower's child to destination tower

// console.log(sourceTower.lastElementChild.clientWidth)
// // console.log(sourceTower.clientWidth) this just gives the parent's width
// console.log(sourceTower.childElementCount)

let topDisk
let sourceDiskWidth
let targetDiskWidth
let currentTower
let diskCount
function handleClick(event) {
    currentTower = event.currentTarget
    diskCount = currentTower.childElementCount

    if (isActiveTower === false && diskCount === 0) {
        console.log('select a tower with disks')
    } else if (isActiveTower === false) {
        topDisk = currentTower.lastElementChild
        topDisk.setAttribute('class', 'highlight')
        sourceDiskWidth = currentTower.lastElementChild.clientWidth
        isActiveTower = true

        console.log(topDisk)
        console.log(sourceDiskWidth)
        console.log(isActiveTower)
    } else if (isActiveTower === true && diskCount > 0) {
        targetDiskWidth = currentTower.lastElementChild.clientWidth
        if (sourceDiskWidth < targetDiskWidth) {
            topDisk.removeAttribute('class')
            currentTower.append(topDisk)

            isActiveTower = false
        }

        console.log(topDisk)
        console.log(targetDiskWidth)
        console.log(isActiveTower)
    } else if (isActiveTower === true && diskCount === 0) {
        topDisk.removeAttribute('class')
        currentTower.append(topDisk)
        isActiveTower = false
    }


}

sourceTower.addEventListener('click', handleClick)
offsetTower.addEventListener('click', handleClick)
endTower.addEventListener('click', handleClick)
