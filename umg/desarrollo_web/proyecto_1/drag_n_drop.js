function SetDraggable() {
  $('.drag').draggable({
    appendTo: 'body',
    helper: 'clone',
    start: function (e, ui) {
      $(ui.helper).removeClass('col-sm-12');
      $(ui.helper).removeClass('col-md-6');
      $(ui.helper).removeClass('col-lg-6');
      $(ui.helper).addClass('col-3');
    }
  });

  $('#dropzone').droppable({
    activeClass: 'droppable-active',
    hoverClass: 'droppable-hover',
    accept: ":not(.ui-sortable-helper)",
    drop: function (e, ui) {
      AddItem(
        ui.draggable.data('id'),
        ui.draggable.data('name'),
        ui.draggable.data('price')
      );
    }
  }).sortable({
    items: '.drop-item',
    sort: function () {
      $(this).removeClass("droppable-active");
    }
  });
};

function AddItem(id, name, price) {
  var itemIndex = GetShoppingListItem(id);

  if(itemIndex === -1)
  {
    var quantity = 1;
    AddShoppingListItem(id, name, price, quantity); 
    AddItemHtml(id, name, price, quantity);
    SetTotal();
  }
}

function AddItemHtml(id, name, price, quantity){
  var $input = $('<input id="' + id + '" type="number" value="' + quantity + '" min="1" onchange="UpdateItem(' + id + ', this)"/></div>');
  var $removeButton = $('<button type="button" class="btn btn-default btn-xs remove" onclick="RemoveItem(' + id + ', this)"><span class="glyphicon glyphicon-trash"></span></button>');
  var $el = $('<div class="drop-item"><details><summary>' + name + ' - ' + GetCurrencyToLocalString(price) + '</summary></details></div>');
  $el.append($input);
  $el.append($removeButton);
  $('#shoppingList').append($el);
}

function UpdateItem(id, input){
  var quantity = input.value;
  UpdateShoppingListItem(id, quantity);
  SetTotal();
}

function RemoveItem(id, button){
  var removed = RemoveShoppingListItem(id);
  if(removed)
  {
    $(button).parent().detach();
    SetTotal();
  }
}

function SetTotal(){
  $('#Total').html(GetCurrencyToLocalString(GetTotal()));
}