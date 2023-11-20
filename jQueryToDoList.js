/**
 * Toggles "done" class on <li> element
 */
$('li').click(function(e) {
  $(this).toggleClass('done');
});

/**
 * Delete element when delete link clicked
 */
$('.delete').click(function(e) {
  $(this).parent().remove();
});

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const text = $('input').val();

  // rest here...
  const $li = $('<li>');
  $li.text(text);
  const $a = $('<a>');
  $a.text('Delete');
  $a.addClass('delete');
  $li.append($a);
  const $ul = $('ul');
  $ul.append($li);
};

// add listener for add
$('.add-item').click((e) => {addListItem(e);});