const btnInputs = document.getElementById('btnInputs')
const modal = document.getElementById('modal')
const modalChild = document.getElementById('modalChild')
const close =document.getElementById('close')
const avatarOne = document.getElementById('avatarOne')
const avatarTwo = document.getElementById('avatarTwo')
const btnSave =document.getElementById('btnSave')
const mainImg = document.getElementById('mainImg')
const userInput = document.getElementById('userInput')
const userName = document.getElementById('userName')
const themeInputs = document.getElementById('themeInputs')
const secondInputs = document.getElementById('secondInputs')
const profile = document.getElementById('profile')


const inputs = [avatarOne , avatarTwo]

const showModal = () => {
    modal.style.top = '0%'
}

const changeImg = () => {

    inputs.forEach(item => {
    item.addEventListener('click' , e => {

        mainImg.src = e.target.previousElementSibling.src;
        saveIt();
    })

})
} 
changeImg();


btnInputs.addEventListener('click' , showModal);


close.addEventListener('click' , e => {
    e.preventDefault();
    modal.style.top = '-1000%';
})



const noneModal = () => {
    modal.style.top = '-1000%'
    
}

const saveIt = () => {
    btnSave.addEventListener('click' , e => {
        e.preventDefault();
        console.log(themeInputs.value)
        console.log(secondInputs.value)
        document.body.style.background = `linear-gradient(53deg, ${themeInputs.value} 0% 10%,${secondInputs.value} 10% 20%,${themeInputs.value} 20% 30%, var(--white) 30% 90% , ${secondInputs.value} 90% 95%, ${themeInputs.value} 95% 100%)`;
        profile.style = `background-image: linear-gradient(53deg,${themeInputs.value} 0% 50%,var(--white) 50% 100%);`;
        btnInputs.style.backgroundColor = themeInputs.value;
        userInput.style.border = `1px solid ${themeInputs.value}`
        btnSave.style.backgroundColor = themeInputs.value
        if(userInput.value){
            userName.innerHTML = userInput.value

        }else{
            userName.innerHTML = 'Username'
        }
        noneModal()
        
    })
    
   
}




