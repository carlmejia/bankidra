const dropdown = document.querySelectorAll('.dropdown-btn')
/* const button = document.querySelector('#reactions-btn') */
const closeBtn = document.querySelector('#icon-menu')
const openBtn = document.querySelector('#icon-close')
const sidebar = document.querySelector('.sidebar')
const main = document.querySelector('.main')


  function showItems (e) {
    e.preventDefault()
    e.target.classList.toggle('active')
   /*  e.target.classList.toggle('active') */
    const dropdownContent = this.nextElementSibling
    return (dropdownContent.style.display === 'block') ? dropdownContent.style.display = 'none' : dropdownContent.style.display = 'block';
  }
  

  const openSider = () => {
    
      document.querySelector('.sidebar').style.width = "0";
      document.querySelector(".main").style.marginLeft= "0";
      
  }
  const closeSider = () => {
    if(screen.width > 393 || screen.width < 822) {
      sidebar.style.width = '300px'
      main.style.marginLeft = '0px'
    } if(screen.width > 822) {
      sidebar.style.width = '300px'
      main.style.marginLeft = '300px'
    }

 
     /*   document.querySelector('.overlay').classList.toggle('visible') */
  }

  const loadEventList = () => {
    for(let ele of dropdown) {
        ele.addEventListener('click', showItems)
        
    }

    closeBtn.addEventListener('click', closeSider)
    openBtn.addEventListener('click', openSider)
  }

/*   function areReactionsVisible(reactionsList) {
    return reactionsList = reactionsList.classList.contains('open')
  }
   */
/*   button.addEventListener('click', function () {
    const reactionsList = this.children[1]
    reactionsList.classList.toggle('open')
    overlay.classList.toggle('visible')
  }) */



  loadEventList()
