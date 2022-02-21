

class Card extends React.Component {

    constructor(){
        super();
        this.state={
            factor:1,
            result:0,
        }
    }

    createLayoutGrid = (e) => {
        e.preventDefault();
        
        const container = document.getElementById('container');
        container.innerHTML="";
        
        let height=document.getElementById("n_rows").value;
        let width=document.getElementById("n_cols").value;
        let factor= width*height;

        this.setState({

            factor:factor-1,

        })

        
        container.style.gridTemplateColumns = `repeat(${width}, 1fr)`
        container.style.gridTemplateRows = `repeat(${height}, 1fr)`;
        for(let i=0;i<factor;i++){
            let div=document.createElement("input");
            div.type="text";
            div.classList.add("its");
            div.id=`${i}`;
            container.appendChild(div);
        }
    }

    
    renderResult=()=>{

        const cells=document.getElementsByClassName("its");
        const arr= cells;
        let left_diagonal_sum=0;
        let right_diagonal_sum=0;
        let bool=(arr.length%2==0);
        console.log(arr.length/2);
        for(let j=0;j<arr.length;j++){
            if(j%(Math.sqrt(arr.length)+1)==0 || j==0){
                console.log("left diagonal"+parseInt(arr[j].value));
                left_diagonal_sum=left_diagonal_sum+ parseInt(arr[j].value);

            }
            else if(j%(Math.sqrt(arr.length)-1)==0){
                console.log("right diagonal"+parseInt(arr[j].value));
                right_diagonal_sum+=parseInt(arr[j].value);

            }
            if(bool==false && j==(arr.length-1)/2){
                
                right_diagonal_sum=right_diagonal_sum+parseInt(arr[j].value);;
            }

            
        }

        console.log(left_diagonal_sum);
        console.log(right_diagonal_sum);

        this.setState({
            result:Math.abs(left_diagonal_sum-right_diagonal_sum)
        })
       




    }

  
    render() {
        return (
            <div className="card" >

                <div className="inp">
                    <input id="n_rows" type="text" placeholder="rows"/>X
                    <input id="n_cols" type="text" placeholder="columns"/>
                    <input type="submit" value="GENERATE" onClick={this.createLayoutGrid}/>
                </div>
                <div className="matrix" id="container">
                    
                    
                </div>
               

                <div className="res">
                    <h2> <input type="button" value="Result"  onClick={this.renderResult}/></h2> <h2 id="result">{this.state.result}</h2>
                </div>
                
            </div>
        );
    }
}

