document.addEventListener('DOMContentLoaded', () => {
  const TIMEOUT = 30000;

  function showModal(title, message) {
    const modalInfo = document.querySelector('#modal-info');
    const modalTitle = document.querySelector('#modal-title');
    const modalBody = document.querySelector('#modal-body');
    modalTitle.innerHTML = title;
    modalBody.innerHTML = message;
    modalInfo.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    modalInfo.style.display = 'block';
  }

  function closeModal() {
    const modalInfo = document.querySelector('#modal-info');
    modalInfo.style.display = 'none';
  }

  document.querySelector('#close-modal-x').onclick = closeModal;

  document.querySelector('#close-modal-button').onclick = closeModal;

  function addItemToCart(itemType){
    const request = new XMLHttpRequest();
    const selection = document.querySelector('#' + itemType + '-selection');
    const menuItemId = selection.options[selection.selectedIndex].value;
    const csrfMiddlewareToken = document.querySelector("input[name='csrfmiddlewaretoken']").value;
    const cart = document.querySelector('#cart-items-count');
    const button = document.querySelector('#' + itemType + '-submit');
    var abortTimer;
    var oldHTML = button.innerHTML;
    button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
    button.disabled = true;
    request.open('POST', '/add_to_cart/');
    request.onload = () => {
      clearTimeout(abortTimer);
      button.innerHTML = oldHTML;
      button.disabled = false;
      if (request.status == 200) {
        const data = JSON.parse(request.responseText);
        if (data.success) {
          var modalBody = data.message + '<br> * ' + data.item;
          console.log(data);
          cart.innerHTML = data.cart_items_count;
          showModal('Information', modalBody);
        } else {
          console.log(data);
          showModal('Item NOT added to cart!', data.message);
        }
      } else {
        console.log(request);
        let reason = 'Reason: ' + request.status + ' ' + request.statusText;
        showModal('Item NOT added to cart!', reason);
      }
    }
    const data = new FormData();
    data.append('csrfmiddlewaretoken', csrfMiddlewareToken);
    data.append('menu_item_id', menuItemId);
    request.send(data);
    abortTimer = setTimeout( function() {
      request.abort('timeout');
      console.log("timeout");
      button.innerHTML = oldHTML;
      button.disabled = false;
      showModal('Item NOT added to cart!', "Reason: Timeout");
    }, TIMEOUT);
  }

  document.querySelector('#basque-burnt-cheesecake-selection').onchange = () => {
    updateOtherSelection('basque-burnt-cheesecake');
  }

  document.querySelector('#basque-burnt-cheesecake-form').onsubmit = () => {
    addItemToCart('basque-burnt-cheesecake');
    return false;
  }

  document.querySelector('#madeleine-selection').onchange = () => {
    updateOtherSelection('madeleine');
  }

  document.querySelector('#madeleine-form').onsubmit = () => {
    addItemToCart('madeleine');
    return false;
  }

  updateOtherSelection('basque-burnt-cheesecake');
  updateOtherSelection('madeleine');
});
