var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
const navList = document.querySelector('nav ul');
for(let i=0;i<navMenuAnchorTags.length;i++)
{
    navMenuAnchorTags[i].addEventListener('click',function(event){
       
        const checkbox = document.getElementById('check');
        event.preventDefault();
        var targetSectioId=this.textContent.trim().toLowerCase();
        
        var targetsection=document.getElementById(targetSectioId);
       
        var interval=setInterval(function(){
            var targetSectioncoordinates=targetsection.getBoundingClientRect();
           
            if(targetSectioncoordinates.bottom<=(window.innerHeight || document.documentElement.clientHeight))
            {
                clearInterval(interval);
                return ;
            }
            window.scrollBy(0,50);
        },20);
        checkbox.checked = false;
    });
}

var progressbars=document.querySelectorAll('.skill-progress > div');
var skillscontainer=document.getElementById('skillsContainer');
window.addEventListener('scroll',checkScroll);
var animationDone=false;
function initial(){
    for(let bar of  progressbars)
    {
        bar.style.width=0+'%';
    }

}
initial();
function fillbars(){
    for(let bar of progressbars)
    {
        let tarwidth=bar.getAttribute('data-bar-width');
        let  currentwidth=0;
        let interval=setInterval(function(){
            if(currentwidth>tarwidth){
                clearInterval(interval);
                return;
            }
            currentwidth++;
            bar.style.width=currentwidth+'%';
        },3);
    }
}
function checkScroll(){
    var coordinate=skillscontainer.getBoundingClientRect();
    if(coordinate.top<window.innerHeight&&!animationDone)
    {
        animationDone=true;
        fillbars();
    }
    else if(coordinate.top>window.innerHeight)
    {
        animationDone=false;
        initial();
    }
}
document.addEventListener('click',function(event){
    const checkbox = document.getElementById('check');
    if (event.target !== checkbox && !navList.contains(event.target)) {
        checkbox.checked = false;}
    if(event.target===checkbox&&!checkbox.checked){
        checkbox.checked = false;
    }
  
})
