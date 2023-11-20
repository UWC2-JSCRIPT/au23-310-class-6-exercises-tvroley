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
};

// add listener for add
