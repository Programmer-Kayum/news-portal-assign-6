
// <<<<<<<----------------------- load main API link ------------------------>>>>>>>>>

const loadData = () => {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllData(data.data.news_category))
        .catch(error => alert(error))
}


// <<<<<<<<--------------Display load main API link ------------------->>>>>>>>>

const displayAllData = categories => {

    const navContainer = document.getElementById('nav-container');
    categories.forEach(category => {

        // categoryNews(category.category_id);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<a onclick="setDataById('${category.category_id}')"> ${category.category_name} </a>`
        navContainer.appendChild(div)



        // toggleSpinner(true);

    })
}
loadData()




// <<<<<<<<--------------------- load main API by ID  ------------------>>>>>>>>>

const setDataById = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data))
        .catch(error => alert(error))
}



// <<<<<<<<----------------Display load main API by ID  ------------------>>>>>>>>>



const displayDetails = details => {
    const detail = details.data;





    // <<<<---------------------------- Found total Category section start  -------------------------------->
    const displayTotalCategory = document.getElementById('display-category')
    const noFound = document.getElementById('warning-massage')

    if (detail.length === 0) {
        noFound.classList.remove('d-none')
    }
    else {
        noFound.classList.add('d-none')
    }

    displayTotalCategory.innerHTML = `
                 <div class="py-4 ps-5 fs-3 p-2 bg-success text-dark bg-opacity-10 fw-semibold border border-info rounded-2">
                     Total  ${detail.length} items producet found !!! 
                </div>`
    // <!---------------------------- Found total Category section end  -------------------------------->


    //<<<<<----------------- Display Main News Card section --------------->>>>>>>

    const displayCategory = document.getElementById('details-body')
    displayCategory.textContent = '';
    detail.forEach(element => {
        console.log(element)

        const div = document.createElement('div')

        div.innerHTML = `
                <div class="card mb-4 shadow-lg">
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
                                             <p class="lh-sm"> ${element.author.name ? element.author.name : 'name not found'}</p> 
                                             <p class="lh-sm"> ${element.author.published_date} </p>
                                        </div>


                                        <div class="mt-4" style="margin-left: 150px;"> 
                                        <img class="rounded-pill" src="Photos/download.png" alt=""  width="30" height="30" > <h4>${element.total_view ? element.total_view : 'not view found'}</h4>
                                        </div>

                                        <div class="mt-5" style="margin-left: 250px;"> 
                                        <button onclick="setDataById('${element.category_id}')"  type="button" class="btn btn-warning" data-bs-toggle="modal" 
                                         data-bs-target="#exampleModal">Details</button>
                                         </div>

                                         
                                     </button>


                                    </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            `
        displayCategory.appendChild(div)

        // toggleSpinner(false);





        const modalBody = document.getElementById('modal-body')
        modalBody.innerHTML = `
        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${element.title.slice(0, 45)}...</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <h4>Rating : ${element.rating.number} </h4>
                    <h4>Badge : ${element.rating.badge} </h4>
                    <h4>Author : ${element.author.name ? element.author.name : 'name not found'} </h4>
                    <h4>Total View: ${element.total_view ? element.total_view : 'not view found'} </h4>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                </div>
            </div>
        </div>
    </div>
        `

    });

}






// <<<<<<<<<<<<-----------spinner ------------>>>>>>>>>>>>

const toggleSpinner = isLoading => {
    const loadingSection = document.getElementById('spinner');
    if (isLoading) {
        loadingSection.classList.remove('d-none')

    }
    else {
        loadingSection.classList.add('d-none')
    }
}



// blog 

document.getElementById('blog').addEventListener('click', function () {
    const anserBody = document.getElementById('question section')
    anserBody.textContent = '';
    const div = document.createElement('div')
    div.classList.add('border')
    div.innerHTML = `
 
 
 
    <h2> Q1.Differences between var, let, and const ?</h2>

    <div class="container text-center ">
        <div class="row ">
            <div class="col shadow-lg m-2">
                <h3>Var</h3>
                <hr>
                <p>The scope of a var variable is functional scope.</p>
                <p>It can be updated and re-declared into the scope.</p>
                <p>It can be declared without initialization.</p>

            </div>
            <div class="col shadow-lg m-2">
                <h3>Let</h3>
                <hr>
                <p>The scope of a let variable is block scope.</p>
                <p>It can be updated but cannot be re-declared into the scope.</p>
                <p>It can be declared without initialization.</p>
            </div>
            <div class="col shadow-lg m-2">
                <h3>Const</h3>
                <hr>
                <p>The scope of a const variable is block scope.</p>
                <p>It cannot be updated or re-declared into the scope.</p>
                <p>It cannot be declared without initialization.</p>
            </div>
        </div>

    </div>


    <div class="border py-3">
        <h2>Q2. Why we use template String ?</h2>
        <div class="shadow-lg m-2 p-4">
            <p>String concatenation can be done using several different methods. The + operator and template
                literals are a couple of these methods. Template literals make it easier to embed variables into
                a
                string.</p>
        </div>
    </div>


    <div class="border py-3">
        <h2>Q3. Differences Between Arrow and Regular Functions ?</h2>
        <div class="shadow-lg m-2 p-4">
            <p>this value inside a regular function is dynamic and depends on the invocation. But this inside
                the arrow function is bound lexically and equals to this of the outer function.

                arguments object inside the regular functions contains the list of arguments. The arrow
                function, on the opposite, doesn't define arguments (but you can easily access the arrow
                function arguments using a rest parameter ...args).

                If the arrow function has one expression, then the expression is returned implicitly, even
                without using the return keyword.</p>
        </div>
    </div>
 
 
 `
    anserBody.appendChild(div)

})
question();

