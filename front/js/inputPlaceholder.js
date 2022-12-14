const links = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
    "https://www.youtube.com/watch?v=ZHwVBirqD2s&ab_channel=EltonJohnVEVO",
    "https://www.youtube.com/watch?v=SQCSxqScSVQ&ab_channel=CoolioVEVO",
    "https://www.youtube.com/watch?v=7j7twuejxvU&ab_channel=ImagineDragonsVEVO",
    "https://www.youtube.com/watch?v=w5tWYmIOWGk&ab_channel=ImagineDragonsVEVO",
    "https://www.youtube.com/watch?v=dvgZkm1xWPE&ab_channel=Coldplay",
    "https://www.youtube.com/watch?v=PIh2xe4jnpk&ab_channel=ournameismagicVEVO",
    "https://www.youtube.com/watch?v=KRaWnd3LJfs&ab_channel=Maroon5VEVO",
    "https://www.youtube.com/watch?v=qpgTC9MDx1o&ab_channel=Maroon5VEVO",
    "https://www.youtube.com/watch?v=hT_nvWreIhg&ab_channel=OneRepublicVEVO"];


let urlPlaceHolder = document.getElementById("urlPlaceHolder");
let randomNumber = Math.floor(Math.random() * 10);
urlPlaceHolder.placeholder = links[randomNumber];