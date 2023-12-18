const removeNews=()=>{
    const totalBoxs=9;
    for(let i=1; i<=totalBoxs;i++){
        const image=document.getElementById(`image${i}`)
        const title=document.getElementById(`title${i}`)
        const description=document.getElementById(`description${i}`)

        imageElement.src="";
        titleElement.innerHTML="";
        descriptionElement.innerHTML="";

    }
};

const myFunction = (() => {
    let input=document.getElementById("input-box").value
        fetch(`https://newsapi.org/v2/everything?q=${input}&from=2023-12-15&to=2023-12-15&sortBy=popularity&apiKey=dbc545857831423f8cde10a7298fa0e7`)
        .then((response)=>{
           return response.json();
        })
        .then((data)=>{
            document.getElementById("img").src=data.articles[0].urlToImage
            document.getElementById("title").innerHTML=`<h3>${data.articles[0].title}</h3>`
            document.getElementById("description").innerHTML=data.articles[0].description
    
    
            document.getElementById("img1").src=data.articles[1].urlToImage
            document.getElementById("title1").innerHTML=`<h3>${data.articles[1].title}</h3>`
            document.getElementById("description1").innerHTML=data.articles[1].description
    
    
            document.getElementById("img2").src=data.articles[2].urlToImage
            document.getElementById("title2").innerHTML=`<h3>${data.articles[2].title}</h3>`
            document.getElementById("description2").innerHTML=data.articles[2].description
    
    
            document.getElementById("img3").src=data.articles[3].urlToImage
            document.getElementById("title3").innerHTML=`<h3>${data.articles[2].title}</h3>`
            document.getElementById("description3").innerHTML=data.articles[3].description
    
    
            document.getElementById("img4").src=data.articles[4].urlToImage
            document.getElementById("title4").innerHTML=`<h3>${data.articles[1].title}</h3>`
            document.getElementById("description4").innerHTML=data.articles[4].description
    
    
            document.getElementById("img5").src=data.articles[5].urlToImage
            document.getElementById("title5").innerHTML=`<h3>${data.articles[5].title}</h3>`
            document.getElementById("description5").innerHTML=data.articles[5].description
    
    
            document.getElementById("img6").src=data.articles[6].urlToImage
            document.getElementById("title6").innerHTML=`<h3>${data.articles[6].title}</h3>`
            document.getElementById("description6").innerHTML=data.articles[6].description
    
    
            document.getElementById("img7").src=data.articles[7].urlToImage
            document.getElementById("title7").innerHTML=`<h3>${data.articles[7].title}</h3>`
            document.getElementById("description7").innerHTML=data.articles[7].description
    
    
            document.getElementById("img8").src=data.articles[8].urlToImage
            document.getElementById("title8").innerHTML=`<h3>${data.articles[8].title}</h3>`
            document.getElementById("description8").innerHTML=data.articles[8].description
    
        })  

         
});


const topHeadLines = (() => {
    // let input=document.getElementById("input-box").value
        fetch(`https://newsapi.org/v2/top-headlines?country=in&from=2023-12-15&to=2023-12-15&sortBy=popularity&apiKey=dbc545857831423f8cde10a7298fa0e7`)
        .then((response)=>{
           return response.json();
        })
        .then((data)=>{
            document.getElementById("img").src=data.articles[8].urlToImage
            document.getElementById("title").innerHTML=`<h3>${data.articles[8].title}</h3>`
            document.getElementById("description").innerHTML=data.articles[8].description
    
    
            document.getElementById("img1").src=data.articles[1].urlToImage
            document.getElementById("title1").innerHTML=`<h3>${data.articles[1].title}</h3>`
            document.getElementById("description1").innerHTML=data.articles[1].description

            document.getElementById("img2").src=data.articles[2].urlToImage
            document.getElementById("title2").innerHTML=`<h3>${data.articles[2].title}</h3>`
            document.getElementById("description2").innerHTML=data.articles[2].description

            document.getElementById("img3").src=data.articles[3].urlToImage
            document.getElementById("title3").innerHTML=`<h3>${data.articles[3].title}</h3>`
            document.getElementById("description3").innerHTML=data.articles[3].description


            document.getElementById("img4").src=data.articles[4].urlToImage
            document.getElementById("title4").innerHTML=`<h3>${data.articles[4].title}</h3>`
            document.getElementById("description4").innerHTML=data.articles[4].description


            document.getElementById("img5").src=data.articles[5].urlToImage
            document.getElementById("title5").innerHTML=`<h3>${data.articles[5].title}</h3>`
            document.getElementById("description5").innerHTML=data.articles[5].description

            document.getElementById("img6").src=data.articles[6].urlToImage
            document.getElementById("title6").innerHTML=`<h3>${data.articles[6].title}</h3>`
            document.getElementById("description6").innerHTML=data.articles[6].description

            document.getElementById("img7").src=data.articles[7].urlToImage
            document.getElementById("title7").innerHTML=`<h3>${data.articles[7].title}</h3>`
            document.getElementById("description7").innerHTML=data.articles[7].description


            document.getElementById("img8").src=data.articles[8].urlToImage
            document.getElementById("title8").innerHTML=`<h3>${data.articles[8].title}</h3>`
            document.getElementById("description8").innerHTML=data.articles[8].description
    
            // Continue this pattern for other elements
        })  
});
topHeadLines();
