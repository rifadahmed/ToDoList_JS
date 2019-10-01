$("ul").on("click","li",function(){
$(this).toggleClass("strikeThrough")
	
})
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input").keypress(function(event){
if(event.which===13)
{

	var val=$(this).val();

$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ val+"</li>");

$("input").val("");
}
})

$("#plusIcon").on("click",function(){
	$("input").fadeToggle(500);
})

