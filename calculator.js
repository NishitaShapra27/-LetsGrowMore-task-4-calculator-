
/* js code*/
         function clearscreen()
        {
            document.getElementById("scr").value="";

        }
        function display(value)
        {
            document.getElementById("scr").value += value;
        }
        function calculate()
        {
            var x = document.getElementById("scr").value;
            var y = eval(x)
            document.getElementById("scr").value = y;  
        }
