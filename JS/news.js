const loadData = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data.data.news_category[1].category_name))
        .then(data => displayAllData(data))

}


// load Data set all category like navbar 

const displayAllData = allData => {
    const navContainer = document.getElementById('nav-container');
    const div = document.createElement('div')
    div.classList.add('row');
    div.innerHTML = `

                    <div class="col">${allData.data.news_category[0].category_name}</div>
                    <div class="col">${allData.data.news_category[1].category_name}</div>
                    <div class="col">${allData.data.news_category[2].category_name}</div>
                    <div class="col">${allData.data.news_category[3].category_name}</div>
                    <div class="col">${allData.data.news_category[4].category_name}</div>
                    <div class="col">${allData.data.news_category[5].category_name}</div>
                    <div class="col">${allData.data.news_category[6].category_name}</div>
                    <div class="col">${allData.data.news_category[7].category_name}</div>
        `
    navContainer.appendChild(div)
    // console.log(element.category_name)
}
loadData()



const setDataById = () => {

    const url = `https://openapi.programming-hero.com/api/news/category/01`
    // const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
}

const displayDetails = details => {
    // console.log(details)



    // <!---------------------------- Found total Category section start  -------------------------------->
    const displayTotalCategory = document.getElementById('display-category')
    displayTotalCategory.innerHTML = `
                 <div class="py-4 ps-5 fs-3 border border-info  rounded-2">
                     ${details.length} items found for category Entertainment
                </div>`

    // <!---------------------------- Found total Category section end  -------------------------------->


    const displayCategory = document.getElementById('details-body')
    details.forEach(element => {
        console.log(element)
        const div = document.createElement('div')

        div.innerHTML = `
                <div class="card mb-4">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${element.thumbnail_url}" style="height:300px;" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                    <h3 class="card-title py-2"> ${element.title}</h3>
                                    <p class="card-text"> ${element.details.slice(0, 350)}... </p>

                                
                                    <div class="d-flex flex-row mt-3">
                                        <div class="mt-4"> 
                                             <img class="rounded-pill" src="${element.author.img}" alt="" width="60" height="60">
                                        </div>
                                        <div class="mt-4 ms-4">
                                             <p class="lh-sm"> ${element.author.name}</p> 
                                             <p class="lh-sm"> ${element.author.published_date} </p>
                                        </div>


                                        <div class="mt-4" style="margin-left: 150px;"> 
                                        <img class="rounded-pill" src="Photos/download.png" alt=""  width="30" height="30" > <h4>${element.total_view}</h4>
                                        </div>

                                        <div class="mt-5" style="margin-left: 250px;"> 
                                        <button type="button" class="btn btn-warning">Details</button>
                                         </div>


                                    </div>
                                

                            </div>
                            
                        </div>
                    </div>
                </div>

            `


        displayCategory.appendChild(div)

    });

}



setDataById();