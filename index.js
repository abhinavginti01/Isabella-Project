fetch("https://crewbella.com/user/api/profile/ishanmathur")
    .then(response => response.json())
    .then(json => {
        console.log(json)
        basic = json['basic']
        document.querySelector('.coverPageImg').src = `${basic.cover}`;
        document.getElementById('profileImg').src = `${basic.image_hd}`
        document.querySelector('.user-name').innerHTML = `${basic.name}`
        document.querySelector('.dob').innerHTML = `${basic.dob}`
        document.querySelector('.instagram').innerHTML = `${basic.instagram}`
        document.querySelector('.linkedin').innerHTML = `${basic.linkedin}`
        document.querySelector('.twitter').innerHTML = `${basic.twitter}`
        document.querySelector('.website').innerHTML = `${basic.website}`
        document.querySelector('.bio-info').innerHTML = `${basic.bio}`
    });

function fetchData(it, search) {
    document.querySelector('.active').classList.remove('active');
    it.classList.add('active');
    fetch("https://crewbella.com/user/api/profile/ishanmathur")
        .then(response => {
            if (!response.ok) {
                throw Error('Error')
            }
            return response.json();
        })
        .then(json => {
            basic = json['basic']
            let renderData={}
            if (search == 'portfolio') {
                if(json[search].length==0)
                {
                    document.querySelector('.renderingData').innerHTML = 'No Results Found';
                    return;
                }
                renderData = json[search].map(data => {
                    return `<div class="cards px-4 py-1 my-2 w-100" >
                   <div class="User_details p-2 my-1 d-flex align-items-center">
                   <img src=${basic.image_hd} alt=${basic.name}/>
                   <div class="p-1">
                   <p class="user_name mx-2 my-auto px-2 py-1 fs-5 fw-bold">${basic.username}</p>
                   <p class="px-2 mx-2 text-primary"style="font-size:0.8rem;">${search}•</p>
                   </div>
                   </div>
                   <div class="fetchedData p-1">
                   <p class="text-decoration-underline fw-bold">${data.position} at ${data.project_name}</p>
                   <a href=${data.link} class="">${data.link}</a>
                   <div class="my-2 d-flex flex-row justify-content-around align-items-center">
                   <div class="job-start"><span class="fw-lighter text-muted ">Started</span><br><p class="fw-bold">${data.started_time}</p></div>
                   <div class="job-end"><span class="fw-lighter text-muted ">Ended</span><br><p class="fw-bold">${data.ended_time}</p></div>
                   </div>
                   <p class="mt-2">${data.description}</p>
                   </div>
                   <div class="d-flex flex-row overflow-auto">
                   <img class="mx-2" src=${data.images[0].image} alt=" "/>
                   <img src=${data.images[1].image} alt=" "/>
                   <img src=${data.images[2].image} alt=" "/>
                   <img src=${data.images[3].image} alt=" "/>
                   </div>
                   </div>`
                }).join('')
                document.querySelector('.renderingData').innerHTML = renderData;
            }
            else if (search == 'crew_postings') {
                if(json[search].length==0)
                {
                    document.querySelector('.renderingData').innerHTML = 'No Results Found';
                    return;
                }
                renderData = json[search].map(data => {
                    return `<div class="cards p-3 my-2" style="width:100%;">
                   <div class="User_details p-2 my-1 d-flex align-items-center">
                   <img src=${basic.image_hd} alt=${basic.name}/>
                   <div class="p-1">
                   <p class="user_name mx-2 my-auto px-2 py-1 fw-bold">${basic.username}</p>
                   <p class="px-2 mx-2" style="font-size:0.8rem;">${search}•</p>
                   </div>
                   </div>
                   <div class="fetchedData p-1">
                   <p class="fw-bold fs-5">${data.profession} <span class="job_active fs-6 bg-success text-white">${(data.is_active)?'OPEN':'CLOSED'}</span></p>
                   <p class="my-2">${data.description}</p>
                   <div class="job-details px-2">
                        <div class="row border-top py-1 my-1">
                            <div class="fw-bold col-4 px-1">Skills</div>
                            <div class="col-8 px-1">${data.skills}</div>
                        </div>
                        <div class="row border-top py-1 my-1">
                            <div class="fw-bold col-4 px-1">Location</div>
                            <div class="col-8 px-1">${data.location}</div>
                        </div>
                        <div class="row border-top py-1 my-1">
                            <div class="fw-bold col-4 px-1">Experience</div>
                            <div class="col-8 px-1">${data.experience} Year(s)</div>
                        </div>
                   </div>
                   </div>
                   </div>`
                }).join('')
                document.querySelector('.renderingData').innerHTML = renderData;
            }
            else if (search == 'client_postings') {
                if(json[search].length==0)
                {
                    document.querySelector('.renderingData').innerHTML = 'No Results Found';
                    return;
                }
                renderData = json[search].map(data => {
                    return `<div class="cards p-3 my-2" style="width:100%;">
                   <div class="User_details p-2 my-1 d-flex align-items-center">
                   <img src=${basic.image_hd} alt=${basic.name}/>
                   <div class="p-1">
                   <p class="user_name mx-2 my-auto px-2 py-1 fw-bold">${basic.username}</p>
                   <p class="px-2 mx-2" style="font-size:0.8rem;">${search}•</p>
                   </div>
                   </div>
                   <div class="fetchedData p-1">
                   <p class="fw-bold fs-5">${data.profession} <span class="job_active fs-6 bg-success text-white">${(data.is_active)?'OPEN':'CLOSED'}</span></p>
                   <p class="my-2">${data.description}</p>
                   <div class="job-details px-2">
                        <div class="row border-top py-1 my-1">
                            <div class="fw-bold col-4 px-1">Skills</div>
                            <div class="col-8 px-1">${data.skills}</div>
                        </div>
                        <div class="row border-top py-1 my-1">
                            <div class="fw-bold col-4 px-1">Location</div>
                            <div class="col-8 px-1">${data.location}</div>
                        </div>
                        <div class="row border-top py-1 my-1">
                            <div class="fw-bold col-4 px-1">Experience</div>
                            <div class="col-8 px-1">${data.experience} Year(s)</div>
                        </div>
                        <div class="row border-top py-1 my-1">
                            <div class="fw-bold col-4 px-1">Job Type</div>
                            <div class="col-8 px-1">${data.job_type}</div>
                        </div>
                        <div class="row border-top py-1 my-1">
                            <div class="fw-bold col-4 px-1">Time Period</div>
                            <div class="col-8 px-1">${data.time_period}</div>
                        </div>
                        <div class="row border-top py-1 my-1">
                            <div class="fw-bold col-4 px-1">Openings</div>
                            <div class="col-8 px-1">${data.openings}</div>
                        </div>
                   </div>
                   </div>
                   </div>`
                }).join('')
                document.querySelector('.renderingData').innerHTML = renderData;
            }
            else if (search == 'skills') {
                if(json[search].length==0)
                {
                    document.querySelector('.renderingData').innerHTML = 'No Results Found';
                    return;
                }
                renderData = json[search].map(data => {
                    return `<div class="cards p-3 my-2" style="width:100%;">
                   <div class="User_details p-2 my-1 d-flex align-items-center">
                   <img src=${basic.image_hd} alt=${basic.name}/>
                   <div class="p-1">
                   <p class="user_name mx-2 my-auto px-2 py-1 fw-bold">${basic.username}</p>
                   <p class="px-2 mx-2" style="font-size:0.8rem;">${search}•</p>
                   </div>
                   </div>
                   <div class="fetchedData p-1">
                   <div class="fs-5"><i class="far fa-lightbulb fs-4 mx-2"></i>Added a New Skill <span class="fs-4 fw-bold">${data.title}</span></div>
                   <div class=" my-2 job_active  text-center fs-6 bg-success text-white">${(data.level<3)?(data.level<2?"Beginner":"Intermediate"):"Advanced"}</div>
                   </div>
                   
                   </div>`
                }).join('')
                document.querySelector('.renderingData').innerHTML = renderData;
            }
            else if (search == 'professions') {
                renderData = json[search].map(data => {
                    return `<div class="cards p-3 my-2" style="width:100%;">
                   <div class="User_details p-2 my-1 d-flex align-items-center">
                   <img src=${basic.image_hd} alt=${basic.name}/>
                   <div class="p-1">
                   <p class="user_name mx-2 my-auto px-2 py-1 fw-bold">${basic.username}</p>
                   <p class="px-2 mx-2" style="font-size:0.8rem;">${search}•</p>
                   </div>
                   </div>
                   <div class="fetchedData p-1">
                   <div class="fs-5"><i class="fas fa-briefcase fs-4 mx-2"></i>Working as a <span class="fs-5 fw-bold">${data.title}</span> for <span>${data.experience}</span> Year(s) </div>
                   </div>
                   </div>`
                }).join('')
                document.querySelector('.renderingData').innerHTML = renderData;
            }
            else if (search == 'questions') {
                if(json[search].length==0)
                {
                    document.querySelector('.renderingData').innerHTML = 'No Results Found';
                    return;
                }
                renderData = json[search].map(data => {
                    return `<div class="cards p-3 my-2" style="width:100%;">
                   <div class="User_details p-2 my-1 d-flex align-items-center">
                   <img src=${basic.image_hd} alt=${basic.name}/>
                   <div class="p-1">
                   <p class="user_name mx-2 my-auto px-2 py-1 fw-bold">${basic.username}</p>
                   <p class="px-2 mx-2" style="font-size:0.8rem;">${search}•</p>
                   </div>
                   </div>
                   <div class="fetchedData p-1">
                      <p class="fs-4 p-2 fw-bold mx-1">${data.title}</p>
                      <p class="fs-5 p-2 mx-1">${data.description}</p> 
                   </div>
                   </div>`
                }).join('')
                document.querySelector('.renderingData').innerHTML = renderData;
            }
            else if (search == 'locations') {
                if(json[search].length==0)
                {
                    document.querySelector('.renderingData').innerHTML = 'No Results Found';
                    return;
                }
                renderData = json[search].map(data => {
                    return `<div class="cards p-3 my-2" style="width:100%;">
                   <div class="User_details p-2 my-1 d-flex align-items-center">
                   <img src=${basic.image_hd} alt=${basic.name}/>
                   <div class="p-1">
                   <p class="user_name mx-2 my-auto px-2 py-1 fw-bold">${basic.username}</p>
                   <p class="px-2 mx-2" style="font-size:0.8rem;">${search}•</p>
                   </div>
                   </div>
                   <div class="fetchedData p-1">
                   <div class="text-center"><i class="fas fa-map-marked-alt mx-2 fs-3"></i>Now Available for work in <br> <span class="fw-bold fs-4 px-4 my-2 mx-3">${data.city},${data.zip_code},${data.state},${data.country}<span></div>
                   </div>
                   </div>`
                }).join('')
                document.querySelector('.renderingData').innerHTML = renderData;
            }
            else if (search == 'blogs') {
                if(json[search].length==0)
                {
                    document.querySelector('.renderingData').innerHTML = 'No Results Found';
                    return;
                }
                renderData = json[search].map(data => {
                    return `<div class="cards p-1 my-2" style="width:100%;">
                   <div class="User_details p-2 my-1 d-flex align-items-center">
                   <img src=${basic.image_hd} alt=${basic.name}/>
                   <div class="p-1">
                   <p class="user_name mx-2 my-auto px-2 py-1 fw-bold">${basic.username}</p>
                   <p class="px-2 mx-2" style="font-size:0.8rem;">${search}•</p>
                   </div>
                   </div>
                   <div class="fetchedData p-1">
                   <p class="text-decoration-underline fw-bold">${data.position} at ${data.project_name}</p>
                   <a href=${data.link} class="">${data.link}</a>
                   <p class="fw-bolder mt-2">${data.description}</p>
                   </div>
                   </div>`
                }).join('')
                document.querySelector('.renderingData').innerHTML = renderData;
            }
    })
        .catch(err => {
            console.log(err);
        });
}
begit = document.querySelector('.active');
fetchData(begit, 'portfolio')