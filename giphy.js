class Giphy{
    constructor(){
        this.keyword = "success";
        this.endpoint = "http://api.giphy.com/v1/gifs";
        this.api_key = "zsI9TtgRPJM5JNVXqCl0X9fkFfjn725f"

    }

    getGifUrl(callback){
        var xhr = new XMLHttpRequest();

        xhr.open("GET",this.endpoint+"/translate?api_key="+this.api_key+"&s="+this.keyword);
    
    xhr.responseType = "json";

    xhr.onload = function(){
        callback(this.response.data.images.original.mp4)
    }

    xhr.send();
    }

    static getUrlAsync(keyword,callback){
        return new Giphy(keyword).getGifUrl(callback)
    }
}


document.getElementById("crear").addEventListener("click", function(){

    let keyword;

    Giphy.getUrlAsync(keyword,function(videoURL){

        document.getElementById("gif").src = videoURL;

    })
});

