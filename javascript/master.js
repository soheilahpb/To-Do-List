
    let _btn = document.getElementsByClassName("btn")[0]
    _btn.addEventListener('click' , ()=>{
        _btn.style.transform = "rotate(-4deg)"
        // **************reset rotate
        setTimeout(() => {
            _btn.style.transform = "rotate(6deg)"
            
        },200);
        setTimeout(() => {
            _btn.style.transform = "rotate(0deg)"
            
        },400);
        let _input = document.getElementById("inp")
        let _value = _input.value
        if(_value.length < 3){
            _input.classList.add("animate-bounce")
            setTimeout(() => {
                _input.classList.remove("animate-bounce")
                // _input.focus()
            }, 2500);
        }else{
            let _li = document.createElement("li")
            let _style = _li.style
            _style.color="#252627"
            _style.display = "flex"
            _style.width ="100%"
            _style.justifyContent ="space-between"
            // _style.borderBottom = "1px dashed #3f3e41b3" 
            _style.marginBottom = "4px"

            _li.innerHTML = 
            `
            <input type="checkbox" onclick="_check(event)" id=input>
            <h2 class="relative flex"><span class="absolute left-0 top-[50%] w-[100%] opacity-0 h-[4px] bg-[#48FCD4]"></span><strong class="mx-5" contenteditable="true">${_value}</strong></h2>
            <button onclick="_close(event)"><i class="bi bi-trash3"></i></button>
            `
            document.getElementById("list").appendChild(_li)

            // **************RESET INPUT************
            _input.value = null
            _input.focus()
            let _strong =document.querySelectorAll("li>h2>strong")
            _strong.forEach((val) => {
                val.style.borderBottom=  "1px dashed #3f3e41b3"
            });
        }   
    })

    let _li = document.querySelectorAll("ul>li")
        const _check = (e)=>{
            let _line = e.target.nextElementSibling.children
            if(e.target.checked){
                _line[0].style.opacity = "1"
            }
            else{
                _line[0].style.opacity = "0"
            }
        }
        const _close= (e) =>{
            let _closeStyle = e.target.parentElement
            _closeStyle.parentElement.style.transform = "translateX(-1000px)"
            _closeStyle.parentElement.style.transition = ".4s"
            setTimeout(() => {
                _closeStyle.parentElement.remove()
            }, 400);
        }
