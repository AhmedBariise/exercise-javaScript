
function changeImage() {
    const image = document.querySelector('.image');
    const url = prompt('Enter your new image URL.')
    image.setAttribute('src', url)
    const border = prompt('Enter your own border')
    image.setAttribute('style', border)
    const width = prompt('Enter your own width')
    image.setAttribute('width', width)
    const height = prompt('Enter your own height')
    image.setAttribute('height', height)
    const borderRadius = prompt('Enter your own borderRadius')
    image.setAttribute('borderRadius', borderRadius)

}