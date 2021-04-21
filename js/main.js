const app = new Vue(
    {
        el: '#app',
   
    data : {
        image: [
            'https://picsum.photos/id/237/500/300',
            'https://picsum.photos/500/300',
            'https://picsum.photos/seed/picsum/500/300',
            'https://picsum.photos/id/29/500/300',
            'https://picsum.photos/id/1005/500/300',
            'https://picsum.photos/id/1011/500/300',
            'https://picsum.photos/id/112/500/300',
        ],
    
        indice: 0,
        intervallo: 0,
        },
        created(){
            this.startLoop();
        },
        methods:{
            next(){
                console.log(this.indice);
                if(this.indice === (this.image.length) - 1){
                    this.indice = 0;
                }else{
                    this.indice ++;
                }
            },
            prev(){
                console.log(this.indice)
                if(this.indice === 0){
                    this.indice = (this.image.length - 1);
                }else{
                    this.indice--;
                }
            },
            circle(index){
                this.indice = index;
            },
            startLoop(){
                this.intervallo = setInterval(() =>{
                    this.next();
                },3000);
            },
            stopLoop(){
                clearInterval(this.intervallo);
            }
        },
        

        
    
 });