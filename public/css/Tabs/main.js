var tabButtons = document.querySelectorAll(".tabContainer .buttonTabContainer button");
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function(node){
        node.style.display='';
        node.style.backgroundColor='';
    })
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color='white';
    tabPanels.forEach(function(node){
        node.style.display='none';
    })
    tabPanels[panelIndex].style.backgroundColor=colorCode;
    tabPanels[panelIndex].style.display='block';
}
showPanel(0, '#f44336')