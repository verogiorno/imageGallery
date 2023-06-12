const images = document.querySelectorAll ('.img');
const closeImgPopup = document.querySelector ('.close-img-popup');
const imgShow = document.querySelector ('.img-show');
const copy = document.querySelector ('.copy');
const closeSpan = document.querySelector ('.close');


images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'),image.getAttribute('alt'));
    })
})

const addImage = (srcImage, altImage)=>{
    closeImgPopup.classList.toggle('popup');
    imgShow.src = srcImage;
    copy.innerHTML = altImage
}

closeSpan.addEventListener('click', ()=>{
    closeImgPopup.classList.toggle('popup');
})



const gridContainer = document.querySelectorAll('.grid-container .img')
let spanClose = closeImgPopup .querySelector('img')
let altImg = closeImgPopup .querySelector('.copy')
let btnClose = closeImgPopup .querySelector('.close')
let contFig = document.querySelectorAll('.grid-container .img-cont')
console.log(contFig)

window.onload = ()=>{
    for(let i = 0; i < gridContainer.length; i++){
        let newIndex = i
        let clickImg 
        contFig[i].onclick = ()=>{
            clickImg = newIndex
            function preview(){
                let selectedImgUrl = gridContainer[newIndex].src
                spanClose.src = selectedImgUrl 
                altImg.innerHTML = gridContainer[newIndex].alt
                console.log(selectedImgUrl)
            }

// PREVIOUS & NEXT SLIDE gridContainer
            const prevBtn = document.querySelector('.previous')
            const nextBtn = document.querySelector('.next')

            if(newIndex == 0){
                prevBtn.style.display = 'none'
            }
            if(newIndex >= gridContainer.length - 1){
                nextBtn.style.display = 'none'
            }

            prevBtn.onclick = ()=>{
                newIndex--
                if(newIndex == 0){
                    preview()
                    prevBtn.style.display = 'none'
                }else{
                    preview()
                    nextBtn.style.display = 'block'
                }
            }

            nextBtn.onclick = ()=>{
                newIndex++
                if(newIndex >= gridContainer.length - 1){
                    preview()
                    nextBtn.style.display = 'none'
                }else{
                    preview()
                    prevBtn.style.display = 'block'
                }
            }

            preview()
            document.querySelector('body').style.overflow ='hidden'

            btnClose.onclick = ()=>{
                newIndex = clickImg
                prevBtn.style.display = 'block'
                nextBtn.style.display = 'block'
                closeImgPopup .classList.remove('img-show')
                document.querySelector('body').style.overflow ='auto'
            }
        }
    }
}