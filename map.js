function Basicmap(xt,yl,clocktop){
    if(!clocktop){
        clocktop = Infinity;
    }
    if(xt == yl + 1){
        var choice = Math.round(Math.random()*4)
        
        if(choice < 2){
            number = xt;
        }
        else if(choice < 4){
            number = yl;
        }
        else if(choice == 4){
            choice = Math.round(Math.random())
            if(choice == 0){
            number = yl-1;
            }

            else if(choice == 1){
                number = xt+1;
            }
        }
    }

    else if(xt == yl - 1){
        var choice = Math.round(Math.random()*4)
        
        if(choice < 2){
            number = xt;
        }
        else if(choice < 4){
            number = yl;
        }
        else if(choice == 4){
            choice = Math.round(Math.random())
            if(choice == 0){
            number = yl+1;
            }

            else if(choice == 1){
                number = xt-1;
            }
        }
    }
    else if(xt == yl){
        var choice = Math.round(Math.random()*2)
        
        if(choice < 2){
            number = xt
        }
        else if(choice == 2){
            var choice = Math.round(Math.random())
            if(choice == 0){
                number = xt+1
            }
            if(choice == 1){
                number = xt-1
            }
        }
    }
    
    else if(xt > yl){
        var choice = Math.round(Math.random()*3)
        
        if(choice == 0){
            number = xt--;
        }
        else if(choice == 1){
            number = yl++;
        }
        else if(choice == 2){
            number = xt;
        }
        else if(choice == 3){
            number = yl;
        }
    }

    else if(xt < yl){
        var choice = Math.round(Math.random()*3)
        
        if(choice == 0){
            number = xt++
        }
        else if(choice == 1){
            number = yl--;
        }
        else if(choice == 2){
            number = xt;
        }
        else if(choice == 3){
            number = yl;
        }
    }
    if(number > clocktop){
        number = clocktop
    }
    if(number < 0){
        number = 0;
    }
    return number;
}

function chunk(top,left){
    var map = [top,[left[1]],[left[2]],[left[3]],[left[4]],[left[5]],[left[6]],[left[7]],[left[8]],[left[9]]]
    for(var x = 1; x < 10; x++){
        for(var y = 1; y < 10; y++){
            mx = map[x];
            mxp = map[x-1]
            mx[y] = Basicmap(mxp[y],mx[y-1],10);
            map[x] = mx;
        }  
    } 
    return map;
}
function BasicmapOne(l,c){
    choice = Math.round(Math.random()*10)
    var bestoption = null;
    if(choice <= 6){
        bestoption = l;  
    }
    else if(choice == 7 || choice == 8){
        bestoption = l + 1;
    }
    else if(choice == 9 || choice == 10){
        bestoption = l - 1;
      
    }
    if(bestoption > c){
        return c;
    }
    else if(bestoption < 0){
        return 0;
    }
    else{
        return bestoption;
    }
}
function startChunk(){
    var SN = Math.round(Math.random()*10)
    var top = [SN];
    var left = [SN];
    for(i = 1; i < 10; i++){
        top[i] =  BasicmapOne(top[i-1],10);
        left[i] =  BasicmapOne(left[i-1],10);
    }
    return chunk(top,left);
}