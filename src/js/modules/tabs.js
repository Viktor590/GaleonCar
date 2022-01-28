const tabs = (tabsContainer, tabSelector, arrowsSelector, contentSelector) => {
  const tabsBlock = document.querySelector(tabsContainer)
  const tabs = document.querySelectorAll(tabSelector);
  const arrows = document.querySelectorAll(arrowsSelector)
  const tabsContent = document.querySelectorAll(contentSelector);

  hideContent();
  function hideContent() {
    tabsContent.forEach((el) => {
      el.style.display = 'none';
    })

    arrows.forEach((el) => {
      el.style.transform = 'rotate(0deg)'
    })
  }

  function showContent(i = 0) {
    tabsContent[i].style.display = 'block';
    arrows[i].style.transform = 'rotate(180deg)';
  }
  showContent();

  tabsBlock.addEventListener('click', (e) => {
    if (e.target && (e.target.classList.contains(tabSelector.replace(/\./, '')) || e.target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
      tabs.forEach((item, i) => {
        if (e.target == item || e.target.parentNode == item) {
          hideContent();
          showContent(i);
        }
      })
    }
  })



}
export default tabs;