function changeEvent(FontTypes) {
    var firstName = document.getElementById("FirstName").value
    var backgroundColor = document.getElementById("BackgroundColor").value;
    var fontSize = document.getElementById("FontSize").value;
    var textColor = document.getElementById("TextColor").value;
    var reset = document.getElementById("reset");
    var fontChoice = FontTypes;
    var font = fontSize + "px " + fontChoice; 
   
    
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = textColor
      ctx.font = font
      ctx.fillText(firstName, 400, 300)

      reset.onclick = function () { 
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, 800, 600);
      }
    }
  }

