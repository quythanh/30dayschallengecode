var upload = document.querySelector('#inp__img'),
    error = document.querySelector('.error'),
    prevImg

upload.addEventListener('change', () => {
    let file = upload.files[0]

    if (file.size / (1024 * 1024) > 16)
        error.innerText = "Image must be smaller than 16MB"
    
    // use blob
    else {
        error.innerText = ""
        let newImg = document.createElement('img')
        newImg.src = URL.createObjectURL(file)
        document.querySelector('.preview').appendChild(newImg)
        if (prevImg)
            prevImg.remove()
        prevImg = newImg
    }

    // use base64
    // else {
    //     error.innerText = ""
    //     let newImg = document.createElement('img')
        
    //     let fileReader = new FileReader()
    //     fileReader.readAsDataURL(file)
    //     fileReader.onloadend = e => newImg.src = e.target.result
        
    //     document.querySelector('.preview').appendChild(newImg)
    //     if (prevImg)
    //         prevImg.remove()
    //     prevImg = newImg
    // }

})