(() => {
  const setup = () => {
    let actions = document.querySelector('.title-group__edit-actions');
    let button = document.createElement('button');
    button.innerHTML = 'Toggle fullscreen';
    let container = document.querySelector('#container');
    let global = document.querySelector('#global');
    let projectNav = document.querySelector('#projectNav');
    let projectHeader = document.querySelector('#project-header');
    let contentMain = document.querySelector('.content-main');
    let pager = document.querySelector('.pager');
    button.addEventListener('click', () => {
      let isFullScreen = (container.style.top === '' || container.style.top === '50px') ? false : true;
      console.log("pager", pager);
      if (isFullScreen) {
        global.style.display = '';
        projectNav.style.display = '';
        projectHeader.style.display = '';
        pager.style.display = '';
        container.style.top = '50px';
        contentMain.style.paddingLeft = '32px';
      } else {
        global.style.display = 'none';
        projectNav.style.display = 'none';
        projectHeader.style.display = 'none';
        pager.style.display = 'none';
        contentMain.style.paddingLeft = '0px';
        container.style.top = '0px';
      }
    });
    actions.insertBefore(button, actions.firstChild);
  }

  PowerUps.isEnabled('full-screen', (enabled) => {
    if (enabled) {
      setup();
    }
  });
})();
