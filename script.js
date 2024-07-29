let v=5;
function next()
{
    v=v-1;
    if(v<0)
    {
        v=5;
    }
    switch (v)
    {
        case 1:
            {
                document.getElementById("four").style="background-color: green;";
                
            }
        case 2:
            {
                document.getElementById("three").style="background-color: green;";
                
            }
        case 3:
            {
                document.getElementById("two").style="background-color: green;";
                
            }
        case 4:
            {
                document.getElementById("one").style="background-color: green;";
                
            }            
    }
}