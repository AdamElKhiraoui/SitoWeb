async function getMeal1(){
    const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daymeal1img1").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal1img2").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal1d1").innerText = data.meals[0]["strArea"];
    document.getElementById("daymeal1f").innerText = data.meals[0]["strMeal"]; 
    document.getElementById("daymeal1d3").innerText = data.meals[0]["strCategory"];
    document.getElementById("daymeal1d4").innerText = data.meals[0]["idMeal"];
}
  async function getMeal2(){
    const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    console.log(response);
    const data = await response.json();
    document.getElementById("daymeal2img1").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal2img2").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal2d1").innerText = data.meals[0]["strArea"];
    document.getElementById("daymeal2f").innerText = data.meals[0]["strMeal"]; 
    document.getElementById("daymeal2d3").innerText = data.meals[0]["strCategory"];
    document.getElementById("daymeal2d4").innerText = data.meals[0]["idMeal"];
  }
  async function getMeal3(){
    const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daymeal3img1").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal3img2").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal3d1").innerText = data.meals[0]["strArea"];
    document.getElementById("daymeal3f").innerText = data.meals[0]["strMeal"]; 
    document.getElementById("daymeal3d3").innerText = data.meals[0]["strCategory"];
    document.getElementById("daymeal3d4").innerText = data.meals[0]["idMeal"];
  }
  async function getMeal4(){
    const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daymeal4img1").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal4img2").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal4d1").innerText = data.meals[0]["strArea"];
    document.getElementById("daymeal4f").innerText = data.meals[0]["strMeal"]; 
    document.getElementById("daymeal4d3").innerText = data.meals[0]["strCategory"];
    document.getElementById("daymeal4d4").innerText = data.meals[0]["idMeal"];
  }
  async function getMeal5(){
    const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daymeal5img1").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal5img2").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal5d1").innerText = data.meals[0]["strArea"];
    document.getElementById("daymeal5f").innerText = data.meals[0]["strMeal"]; 
    document.getElementById("daymeal5d3").innerText = data.meals[0]["strCategory"];
    document.getElementById("daymeal5d4").innerText = data.meals[0]["idMeal"];
  }
  async function getMeal6(){
    const api_url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daymeal6img1").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal6img2").src = data.meals[0]["strMealThumb"];
    document.getElementById("daymeal6d1").innerText = data.meals[0]["strArea"];
    document.getElementById("daymeal6f").innerText = data.meals[0]["strMeal"]; 
    document.getElementById("daymeal6d3").innerText = data.meals[0]["strCategory"];
    document.getElementById("daymeal6d4").innerText = data.meals[0]["idMeal"];
  }
  async function getData1(){
    localStorage.clear();
    localStorage.setItem('idMeal', document.getElementById("daymeal1d4").innerText);
  }
  async function getData2(){
    localStorage.clear();
    localStorage.setItem('idMeal', document.getElementById("daymeal2d4").innerText);
  }
  async function getData3(){
    localStorage.clear();
    localStorage.setItem('idMeal', document.getElementById("daymeal3d4").innerText);
  }
  async function getData4(){
    localStorage.clear();
    localStorage.setItem('idMeal', document.getElementById("daymeal4d4").innerText);
  }
  async function getData5(){
    localStorage.clear();
    localStorage.setItem('idMeal', document.getElementById("daymeal5d4").innerText);
  }
  async function getData6(){
    localStorage.clear();
    localStorage.setItem('idMeal', document.getElementById("daymeal6d4").innerText);
  }
  async function getMealById(){
    if(localStorage.key(0) == "idMeal"){
      api_url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+localStorage.getItem('idMeal');
      const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    document.getElementById("recipeName").innerText = data.meals[0]["strMeal"];
    document.getElementById("recipeEN").innerText = data.meals[0]["strInstructions"];
    document.getElementById("recipeThumb").src = data.meals[0]["strMealThumb"];
    var obj = data.meals[0];
    var i = 0;
    for (var key in obj){
      if(key.includes("strIngredient")){
        i = i +1;
        var value = obj[key];
        if(value != null && value != ""){
          if(i == 1){
            if(obj["strMeasure"+i] != null){
              var quantity = obj["strMeasure"+i];
            }
            else{
              var quantity = "";
            }
            var html2 = `
            <h2 style="text-align:center;">Ingredients</h2>
            <p style="text-align:center;">-${value} ${quantity}</p>`;
            var html = `
          <div class="carousel-item active">
          <img style="width:200px;" src="https://www.themealdb.com/images/ingredients/${value}.png" alt="."/> 
          <p style="text-align:center;">${value} ${quantity}</p>
          </div>
          `;
          document.getElementById("ingredientsCheck").innerHTML = document.getElementById("ingredientsCheck").innerHTML + html;
          document.getElementById("ingList").innerHTML = document.getElementById("ingList").innerHTML + html2;
          }
          else{
            if(obj["strMeasure"+i] != null){
              var quantity = obj["strMeasure"+i];
            }
            else{
              var quantity = "";
            }
            var html2 = `<p style="text-align:center;">-${value} ${quantity}</p>`;
            var html = `
          <div class="carousel-item">
          <img style="width:200px;" src="https://www.themealdb.com/images/ingredients/${value}.png" alt="."/> 
          <p style="text-align:center;">${value} ${quantity}</p>
          </div>
          `;
          document.getElementById("ingredientsCheck").innerHTML = document.getElementById("ingredientsCheck").innerHTML + html;
          document.getElementById("ingList").innerHTML = document.getElementById("ingList").innerHTML + html2;
          }
        }
      }
    }
    }
    else
    {
      api_url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+localStorage.getItem('nameMeal');
      console.log(api_url);
      const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    document.getElementById("recipeName").innerText = data.meals[0]["strMeal"];
    document.getElementById("recipeEN").innerText = data.meals[0]["strInstructions"];
    document.getElementById("recipeThumb").src = data.meals[0]["strMealThumb"];
    var obj = data.meals[0];
    var i = 0;
    for (var key in obj){
      if(key.includes("strIngredient")){
        i = i +1;
        var value = obj[key];
        if(value != null && value != ""){
          if(i == 1){
            if(obj["strMeasure"+i] != null){
              var quantity = obj["strMeasure"+i];
            }
            else{
              var quantity = "";
            }
            var html2 = `
            <h2 style="text-align:center;">Ingredients</h2>
            <p style="text-align:center;">-${value} ${quantity}</p>`;
            var html = `
          <div class="carousel-item active">
          <img style="width:200px;" src="https://www.themealdb.com/images/ingredients/${value}.png" alt="."/> 
          <p style="text-align:center;">${value} ${quantity}</p>
          </div>
          `;
          document.getElementById("ingredientsCheck").innerHTML = document.getElementById("ingredientsCheck").innerHTML + html;
          document.getElementById("ingList").innerHTML = document.getElementById("ingList").innerHTML + html2;
          }
          else{
            if(obj["strMeasure"+i] != null){
              var quantity = obj["strMeasure"+i];
            }
            else{
              var quantity = "";
            }
            var html2 = `<p style="text-align:center;">-${value} ${quantity}</p>`;
            var html = `
          <div class="carousel-item">
          <img style="width:200px;" src="https://www.themealdb.com/images/ingredients/${value}.png" alt="."/> 
          <p style="text-align:center;">${value} ${quantity}</p>
          </div>
          `;
          document.getElementById("ingredientsCheck").innerHTML = document.getElementById("ingredientsCheck").innerHTML + html;
          document.getElementById("ingList").innerHTML = document.getElementById("ingList").innerHTML + html2;
          }
        }
      }
    }
    }
    
  }
  
  async function getMealList(){
    document.getElementById("datalistOptions").innerHTML = "";
    const api_url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${document.getElementById("exampleDataList").value}`;
    if(api_url != "https://www.themealdb.com/api/json/v1/1/search.php?s="){
      const response = await fetch(api_url);
      const data = await response.json();
      var o = data["meals"];
      if(o != null){
        o.forEach(element => {
          var n = element["strMeal"]
          document.getElementById("datalistOptions").innerHTML = document.getElementById("datalistOptions").innerHTML + `<option>${n}</option>`;
        });
      }
    }
  }
  async function getMealByName(){
    localStorage.clear();
    localStorage.setItem('nameMeal', document.getElementById("exampleDataList").value);
  }
  async function getEmail(){
    document.getElementById("form5Example21").value = "";
  }
  var isBelow1000 = false;
  async function getPage(){ 
    if (window.innerWidth < 1000) {
      document.getElementById("pagina").innerHTML=`
        <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
        <div class="flip-card-container" style="--hue: 350">
          <div class="flip-card">
        
            <div class="card-front">
              <figure>
                <div class="img-bg"></div>
                <img id="daymeal1img1" src="">
                <figcaption id="daymeal1f"></figcaption>
              </figure>
        
              <ul class="boh">
                <li class="boh2" id="daymeal1d1"></li> 
                <li class="boh2" id="daymeal1d3"></li>
                <li class="boh2" id="daymeal1d4"></li>
                <li class="boh2" id="daymeal1d5"></li>
              </ul>
            </div>
        
            <div class="card-back">
              <figure>
                <div class="img-bg"></div>
                <img id="daymeal1img2" src="">
              </figure>
              
              <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData1()">Learn</button></a>
        
              <div class="design-container">
                <span class="design design--1"></span>
                <span class="design design--2"></span>
                <span class="design design--3"></span>
                <span class="design design--4"></span>
                <span class="design design--5"></span>
                <span class="design design--6"></span>
                <span class="design design--7"></span>
                <span class="design design--8"></span>
              </div>
            </div>
        
          </div>
        </div>
      </div>
      `;
      getMeal1();
    }
    if (innerWidth >= 1000) {
      document.getElementById("pagina").innerHTML=`
      <div class="row" style="display: flex;">
      <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
          <div class="flip-card-container" style="--hue: 350">
            <div class="flip-card">
          
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daymeal1img1" src="">
                  <figcaption id="daymeal1f"></figcaption>
                </figure>
          
                <ul class="boh">
                  <li class="boh2" id="daymeal1d1"></li>
                  <li class="boh2" id="daymeal1d3"></li>
                  <li class="boh2" id="daymeal1d4"></li>
                  <li class="boh2" id="daymeal1d5"></li>
                </ul>
              </div>
          
              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daymeal1img2" src="">
                </figure>
                
                <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData1()">Learn</button></a>
          
                <div class="design-container">
                  <span class="design design--1"></span>
                  <span class="design design--2"></span>
                  <span class="design design--3"></span>
                  <span class="design design--4"></span>
                  <span class="design design--5"></span>
                  <span class="design design--6"></span>
                  <span class="design design--7"></span>
                  <span class="design design--8"></span>
                </div>
              </div>
          
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
          <div class="flip-card-container" style="--hue: 220">
            <div class="flip-card">
          
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daymeal2img1" src="">
                  <figcaption id="daymeal2f"></figcaption>
                </figure>
          
                <ul class="boh">
                  <li class="boh2" id="daymeal2d1"></li>
                  
                  <li class="boh2" id="daymeal2d3"></li>
                  <li class="boh2" id="daymeal2d4"></li>
                  <li class="boh2" id="daymeal2d5"></li>
                </ul>
              </div>
          
              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daymeal2img2" src="">
                </figure>
          
                <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData2()">Learn</button></a>
          
                <div class="design-container">
                  <span class="design design--1"></span>
                  <span class="design design--2"></span>
                  <span class="design design--3"></span>
                  <span class="design design--4"></span>
                  <span class="design design--5"></span>
                  <span class="design design--6"></span>
                  <span class="design design--7"></span>
                  <span class="design design--8"></span>
                </div>
              </div>
          
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
          <div class="flip-card-container" style="--hue: 170">
            <div class="flip-card">
          
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daymeal3img1" src="">
                  <figcaption id="daymeal3f"></figcaption>
                </figure>
          
                <ul class="boh">
                  <li class="boh2" id="daymeal3d1"></li>
                  
                  <li class="boh2" id="daymeal3d3"></li>
                  <li class="boh2" id="daymeal3d4"></li>
                  <li class="boh2" id="daymeal3d5"></li>
                </ul>
              </div>
          
              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daymeal3img2" src="">
                </figure>
          
                <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData3()">Learn</button></a>
          
                <div class="design-container">
                  <span class="design design--1"></span>
                  <span class="design design--2"></span>
                  <span class="design design--3"></span>
                  <span class="design design--4"></span>
                  <span class="design design--5"></span>
                  <span class="design design--6"></span>
                  <span class="design design--7"></span>
                  <span class="design design--8"></span>
                </div>
              </div>
          
            </div>
          </div>
        </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
        <div class="flip-card-container" style="--hue: 220">
          <div class="flip-card">
        
            <div class="card-front">
              <figure>
                <div class="img-bg"></div>
                <img id="daymeal4img1" src="">
                <figcaption id="daymeal4f"></figcaption>
              </figure>
        
              <ul class="boh">
                <li class="boh2" id="daymeal4d1"></li>
              
                <li class="boh2" id="daymeal4d3"></li>
                <li class="boh2" id="daymeal4d4"></li>
                <li class="boh2" id="daymeal4d5"></li>
              </ul>
            </div>
        
            <div class="card-back">
              <figure>
                <div class="img-bg"></div>
                <img id="daymeal4img2" src="">
              </figure>
        
              <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData4()">Learn</button></a>
        
              <div class="design-container">
                <span class="design design--1"></span>
                <span class="design design--2"></span>
                <span class="design design--3"></span>
                <span class="design design--4"></span>
                <span class="design design--5"></span>
                <span class="design design--6"></span>
                <span class="design design--7"></span>
                <span class="design design--8"></span>
              </div>
            </div>
        
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
        <div class="flip-card-container" style="--hue: 170">
          <div class="flip-card">
        
            <div class="card-front">
              <figure>
                <div class="img-bg"></div>
                <img id="daymeal5img1" src="">
                <figcaption id="daymeal5f"></figcaption>
              </figure>
        
              <ul class="boh">
                <li class="boh2" id="daymeal5d1"></li>
              
                <li class="boh2" id="daymeal5d3"></li>
                <li class="boh2" id="daymeal5d4"></li>
                <li class="boh2" id="daymeal5d5"></li>
              </ul>
            </div>
        
            <div class="card-back">
              <figure>
                <div class="img-bg"></div>
                <img id="daymeal5img2" src="">
              </figure>
        
              <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData5()">Learn</button></a>
        
              <div class="design-container">
                <span class="design design--1"></span>
                <span class="design design--2"></span>
                <span class="design design--3"></span>
                <span class="design design--4"></span>
                <span class="design design--5"></span>
                <span class="design design--6"></span>
                <span class="design design--7"></span>
                <span class="design design--8"></span>
              </div>
            </div>
        
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
          <div class="flip-card-container" style="--hue: 350">
            <div class="flip-card">
          
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daymeal6img1" src="">
                  <figcaption id="daymeal6f"></figcaption>
                </figure>
          
                <ul class="boh">
                  <li class="boh2" id="daymeal6d1"></li>
                
                  <li class="boh2" id="daymeal6d3"></li>
                  <li class="boh2" id="daymeal6d4"></li>
                  <li class="boh2" id="daymeal6d5"></li>
                </ul>
              </div>
          
              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daymeal6img2" src="">
                </figure>
          
                <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData6()">Learn</button></a>
          
                <div class="design-container">
                  <span class="design design--1"></span>
                  <span class="design design--2"></span>
                  <span class="design design--3"></span>
                  <span class="design design--4"></span>
                  <span class="design design--5"></span>
                  <span class="design design--6"></span>
                  <span class="design design--7"></span>
                  <span class="design design--8"></span>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </div>
      `;
      getMeal1();
      getMeal2();
      getMeal3();
      getMeal4();
      getMeal5();
      getMeal6();
    };
    window.addEventListener("resize", function() {
      if (window.innerWidth < 1000 && !isBelow1000) {
        getPage();
        isBelow1000 = true;
      } else if (window.innerWidth >= 1000 && isBelow1000) {
        getPage();
        isBelow1000 = false;
      }
    });

  }
  async function getRobe(){
    if (window.innerWidth < 1000) {
      getMeal1();
    } else if (window.innerWidth >= 1000) {
      getMeal1();
      getMeal2();
      getMeal3();
      getMeal4();
      getMeal5();
      getMeal6();
    }
  }