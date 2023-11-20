/**
 * Toggles "done" class on <li> element
 */
const $main = $('main');
$main.click(function(e) {
  e.target.classList.toggle('done');
});

/**
 * Delete element when delete link clicked
 */
$main.click(function(e) {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  } 
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
