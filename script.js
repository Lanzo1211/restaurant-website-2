function showSidebar(){
  const menu = document.querySelector('.menu')
if(menu){
  menu.style.display = "flex";

}
} 
function hideSidebar(){
  const menu = document.querySelector('.menu')
if(menu){
  menu.style.display = "none";

}
} 
function toggleAI() {
    const aiBox = document.getElementById('aiBox');
    if (aiBox) {
        if (aiBox.style.display === "flex") {
            aiBox.style.display = "none";
        } else {
            aiBox.style.display = "flex";
        }
    }
}
