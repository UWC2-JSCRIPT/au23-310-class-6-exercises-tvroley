$( document ).ready(function() {
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
    e.stopPropagation();
    $(this).parent().fadeOut('slow', function(){});
  });

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    e.preventDefault();
    const text = $('input').val();

    // rest here...
    const $li = $('<li>');
    const $span = $('<span>');
    $span.text(text);
    $li.append($span);
    $li.click(function(e) {
      $li.toggleClass('done');
    });
    const $a = $('<a>');
    $a.text('Delete');
    $a.addClass('delete');
    $a.click(function(e) {
      e.stopPropagation();
      $a.parent().fadeOut('slow', function(){});
    });
    $li.append($a);
    const $ul = $('ul');
    $ul.append($li);
  };

  // add listener for add
  $('.add-item').click((e) => {addListItem(e);});
});