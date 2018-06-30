// Defining variables
const submitButton = $('#sizePicker');
let height = $('#inputHeight');
let width = $('#inputWeight');


// When size is submitted by the user, call makeGrid()
submitButton.submit(function(event) {
	// To prevent the submit button from performinig its initial task
	event.preventDefault();

	height = height.val();
	width = width.val();
	makeGrid(height, width);
});


/**
 * @description The Grid former function
 * @param {number} n - Grid Column
 * @param {number} m - Grid Row
 */
function makeGrid(n, m) {
// Remove exsiting grid.ie. to facillitate refresh incase of resizing
$('tr').remove();

// Implement while and for loops to clear and create the grid dynamically.
let x = 1;
while (x <= n) {
	$('#pixelCanvas').append('<tr id = grid'+x+'></tr>');
	for (let y = 1; y <= m; y++) {
				$('#grid'+x).append('<td></td>');
			}
			x++;
	};


	//  TODO: Add event listener make the grid responsive to click and apply the color picker's value to any clicked cell

	$('td').on('click', function() {
		let color = $('#colorPicker').val();
// Conditions for color application and removal
		if ($(this).attr('style')) {
			$(this).removeAttr('style');
		} else {
			$(this).attr('style', 'background-color:' + color);
		};
	});
}